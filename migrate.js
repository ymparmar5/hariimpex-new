/**
 * DEFINITIVE MIGRATION SCRIPT
 * Copies ALL data from hari_live (Firebase + Mydata.jsx + local images)
 * into the MongoDB Atlas database at MONGO_URL.
 * 
 * Sources:
 *   1. Firebase Firestore "products" collection (live data from hariimpex.in)
 *   2. Mydata.jsx hardcoded products (complete catalog with correct image paths)
 *   3. hari_live/public/ directory (all product images)
 * 
 * This script:
 *   - Fetches from Firebase to get the latest live products
 *   - Merges with Mydata.jsx to fill missing images and descriptions
 *   - Copies ALL images from hari_live/public/ to public/uploads/
 *   - Strips HTML from descriptions
 *   - Creates proper category hierarchy
 *   - Pushes everything into MongoDB Atlas
 */

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// ─── Firebase Config ────────────────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyCxJPmDC5mgFNCoNRRmMhKVL9Pa6K2hjv4",
  authDomain: "hari-impex5.firebaseapp.com",
  projectId: "hari-impex5",
  storageBucket: "hari-impex5.appspot.com",
  messagingSenderId: "81821225787",
  appId: "1:81821225787:web:f35e5c01b03b0fc91d1d1e"
};
const fbApp = initializeApp(firebaseConfig);
const fireDB = getFirestore(fbApp);

// ─── MongoDB Config ─────────────────────────────────────────
const MONGO_URL = 'mongodb+srv://hariimpex:hariimpex@hariimpex.tp4fkk0.mongodb.net/?appName=hariimpex';

// ─── Paths ──────────────────────────────────────────────────
const LIVE_PUBLIC = path.join(__dirname, 'hari_live', 'public');
const DEST_UPLOADS = path.join(__dirname, 'public', 'uploads');
const MIGRATION_DIR = path.join(__dirname, 'migration_data');

// ─── Mongoose Models (inline so no import issues) ───────────
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  image: { type: String },
  division: { type: String, enum: ['display', 'cooling'], required: true },
  parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: false },
  createdAt: { type: Date, default: Date.now }
});
const Category = mongoose.model('Category', categorySchema);

const productSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  categorySlug: { type: String, required: true },
  subcategorySlug: { type: String },
  shortDescription: { type: String, default: '' },
  fullDescription: { type: String },
  images: [{ type: String }],
  isQuoteOnly: { type: Boolean, default: false },
  featured: { type: Boolean, default: false },
  pricing: {
    price: { type: Number },
    salePrice: { type: Number },
    unit: { type: String },
    minOrderQuantity: { type: Number }
  },
  specifications: { type: Map, of: String },
  features: [{ type: String }],
  stock: { type: mongoose.Schema.Types.Mixed },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
const Product = mongoose.model('Product', productSchema);

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  isAdmin: { type: Boolean, default: false }
});
userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  const bcrypt = require('bcryptjs');
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
const User = mongoose.model('User', userSchema);

// ─── Helpers ────────────────────────────────────────────────
const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const stripHtml = (html) => {
  if (!html) return '';
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\\n/g, '\n')
    .replace(/\s+/g, ' ')
    .trim();
};

// ─── Category Hierarchy ─────────────────────────────────────
const CATEGORY_HIERARCHY = {
  // Parent categories
  parents: [
    { name: 'Cooling Solutions', slug: 'cooling-solutions', division: 'cooling', image: '/uploads/fan-plus-grill-2.jpeg', description: 'Complete range of cooling components including fans, water blocks, heatsinks, condensers and peltier modules.' },
    { name: 'Digital Displays', slug: 'digital-displays', division: 'display', image: '/uploads/hero1.jpg', description: 'Professional digital signage solutions including standee displays and LED board profiles.' }
  ],
  // Subcategories mapped to parent slugs
  subcategories: [
    { name: 'Cooling Accessories', slug: 'cooling-accessories', parent: 'cooling-solutions', division: 'cooling', image: '/uploads/fan-plus-grill-2.jpeg' },
    { name: 'Water Blocks', slug: 'water-blocks', parent: 'cooling-solutions', division: 'cooling', image: '/uploads/IMG-20220419-WA0015.jpg' },
    { name: 'Condensers', slug: 'condensers', parent: 'cooling-solutions', division: 'cooling', image: '/uploads/16-16-1.png' },
    { name: 'Aquarium Chillers', slug: 'aquarium-chillers', parent: 'cooling-solutions', division: 'cooling', image: '/uploads/IMG-20220419-WA0015.jpg' },
    { name: 'Standee Displays', slug: 'standee-displays', parent: 'digital-displays', division: 'display', image: '/uploads/hero1.jpg' },
    { name: 'LED Board Profiles', slug: 'led-board-profiles', parent: 'digital-displays', division: 'display', image: '/uploads/led-display.jpg' }
  ],
  // Maps old category names to new subcategory slugs
  mapping: {
    'Cooling Accs': 'cooling-accessories',
    'Water Block': 'water-blocks',
    'Condenser': 'condensers',
    'Condenser ': 'condensers',
    'Aquarium Chiller': 'aquarium-chillers',
    'Standee Display': 'standee-displays',
    'LED-Bord Profiles': 'led-board-profiles',
    'Uncategorized': 'cooling-accessories',
    'Category|Cooling/Water Block accesories': 'cooling-accessories'
  },
  // Maps subcategory slug to parent slug
  parentMap: {
    'cooling-accessories': 'cooling-solutions',
    'water-blocks': 'cooling-solutions',
    'condensers': 'cooling-solutions',
    'aquarium-chillers': 'cooling-solutions',
    'standee-displays': 'digital-displays',
    'led-board-profiles': 'digital-displays'
  }
};

// ─── MAIN ───────────────────────────────────────────────────
async function main() {
  console.log('═══════════════════════════════════════════════');
  console.log('  HARI IMPEX — DEFINITIVE DATA MIGRATION');
  console.log('═══════════════════════════════════════════════\n');

  // 1. Copy ALL images from hari_live/public to public/uploads
  console.log('[1/5] Copying ALL images from hari_live/public/ → public/uploads/');
  if (!fs.existsSync(DEST_UPLOADS)) fs.mkdirSync(DEST_UPLOADS, { recursive: true });
  
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.mp4'];
  const publicFiles = fs.readdirSync(LIVE_PUBLIC);
  let imagesCopied = 0;
  for (const file of publicFiles) {
    const ext = path.extname(file).toLowerCase();
    if (imageExtensions.includes(ext)) {
      const src = path.join(LIVE_PUBLIC, file);
      const dst = path.join(DEST_UPLOADS, file);
      if (!fs.statSync(src).isDirectory()) {
        fs.copyFileSync(src, dst);
        imagesCopied++;
      }
    }
  }
  console.log(`   ✓ Copied ${imagesCopied} image files\n`);

  // 2. Fetch live products from Firebase
  console.log('[2/5] Fetching products from Firebase Firestore...');
  const querySnapshot = await getDocs(collection(fireDB, 'products'));
  const firebaseProducts = [];
  querySnapshot.forEach(doc => {
    firebaseProducts.push({ ...doc.data(), firebaseId: doc.id });
  });
  console.log(`   ✓ Fetched ${firebaseProducts.length} products from Firebase\n`);

  // 3. Build the DEFINITIVE product list using Mydata.jsx as the master source
  //    (it has 54 products with correct image paths, sale prices, descriptions)
  //    We merge Firebase data for any products NOT in Mydata
  console.log('[3/5] Building definitive product catalog...');

  // Parse Mydata.jsx products
  const mydataProducts = parseMydataJsx();

  // Create a map by title for Firebase products
  const fbMap = new Map();
  firebaseProducts.forEach(p => {
    fbMap.set(p.title?.trim(), p);
  });

  // Start with Mydata products (the master list with correct images)
  const allProducts = [];
  const seenSlugs = new Set();

  for (const md of mydataProducts) {
    if (!md.title || md.title === 'test') continue; // skip test entries

    const slug = slugify(md.title);
    if (seenSlugs.has(slug)) continue;
    seenSlugs.add(slug);

    // Find matching Firebase product for extra data
    const fb = fbMap.get(md.title) || {};

    // Resolve image - try Mydata path first, then Firebase
    const images = [];
    const imgPaths = [md.imgurl1, md.imgurl2, md.imgurl3, md.imgurl4, md.imgurl5]
      .filter(Boolean)
      .filter(p => p && p !== '/' && p.length > 1);

    for (const imgPath of imgPaths) {
      const cleanName = imgPath.startsWith('/') ? imgPath.slice(1) : imgPath;
      // Check if file exists in destination
      if (fs.existsSync(path.join(DEST_UPLOADS, cleanName))) {
        images.push('/uploads/' + cleanName);
      } else {
        // Try without the -1 suffix (e.g., "4-12-2-1.png" -> "4-12-2.png")
        const altName = cleanName.replace(/-1(\.\w+)$/, '$1');
        if (fs.existsSync(path.join(DEST_UPLOADS, altName))) {
          images.push('/uploads/' + altName);
        }
      }
    }

    // Map category
    const oldCat = md.category || fb.category || 'Cooling Accs';
    const subcategorySlug = CATEGORY_HIERARCHY.mapping[oldCat] || 'cooling-accessories';
    const categorySlug = CATEGORY_HIERARCHY.parentMap[subcategorySlug] || 'cooling-solutions';

    // Clean description
    const rawDesc = md.description || fb.description || '';
    const cleanDesc = stripHtml(rawDesc);

    const product = {
      slug,
      name: md.title,
      categorySlug,
      subcategorySlug,
      shortDescription: cleanDesc || md.title,
      fullDescription: rawDesc, // keep raw HTML for rich display
      images,
      isQuoteOnly: md.stock === 'Out of Stock',
      featured: md.featured || false,
      pricing: {
        price: md.price ? parseFloat(md.price) : null,
        salePrice: md.saleprice ? parseFloat(md.saleprice) : null,
        unit: 'piece',
        minOrderQuantity: 1
      },
      stock: md.stock
    };

    allProducts.push(product);
  }

  // Add any Firebase products NOT already in Mydata
  for (const fb of firebaseProducts) {
    if (!fb.title) continue;
    const slug = slugify(fb.title);
    if (seenSlugs.has(slug)) continue;
    seenSlugs.add(slug);

    const oldCat = fb.category || 'Cooling Accs';
    const subcategorySlug = CATEGORY_HIERARCHY.mapping[oldCat] || 'cooling-accessories';
    const categorySlug = CATEGORY_HIERARCHY.parentMap[subcategorySlug] || 'cooling-solutions';

    const images = [];
    const fbImgs = [fb.imgurl1, fb.imgurl2, fb.imgurl3, fb.imgurl4].filter(Boolean).filter(p => p !== '/');
    for (const imgPath of fbImgs) {
      const cleanName = imgPath.startsWith('/') ? imgPath.slice(1) : imgPath;
      if (fs.existsSync(path.join(DEST_UPLOADS, cleanName))) {
        images.push('/uploads/' + cleanName);
      }
    }

    allProducts.push({
      slug,
      name: fb.title,
      categorySlug,
      subcategorySlug,
      shortDescription: stripHtml(fb.description) || fb.title,
      fullDescription: fb.description || '',
      images,
      isQuoteOnly: fb.stock === 'Out of Stock',
      featured: false,
      pricing: {
        price: fb.price ? parseFloat(fb.price) : null,
        salePrice: fb.salePrice ? parseFloat(fb.salePrice) : null,
        unit: 'piece',
        minOrderQuantity: 1
      },
      stock: fb.stock
    });
  }

  console.log(`   ✓ Built ${allProducts.length} total products\n`);

  // 4. Save JSON files for reference
  console.log('[4/5] Saving migration data to JSON...');
  if (!fs.existsSync(MIGRATION_DIR)) fs.mkdirSync(MIGRATION_DIR, { recursive: true });

  const allCategories = [
    ...CATEGORY_HIERARCHY.parents,
    ...CATEGORY_HIERARCHY.subcategories
  ];
  fs.writeFileSync(path.join(MIGRATION_DIR, 'products.json'), JSON.stringify(allProducts, null, 2));
  fs.writeFileSync(path.join(MIGRATION_DIR, 'categories.json'), JSON.stringify(allCategories, null, 2));
  console.log(`   ✓ Saved ${allProducts.length} products and ${allCategories.length} categories\n`);

  // 5. Push to MongoDB Atlas
  console.log('[5/5] Pushing data to MongoDB Atlas...');
  await mongoose.connect(MONGO_URL);
  console.log('   ✓ Connected to MongoDB Atlas');

  // Clear existing collections
  await mongoose.connection.db.collection('products').deleteMany({});
  await mongoose.connection.db.collection('categories').deleteMany({});
  await mongoose.connection.db.collection('users').deleteMany({});
  console.log('   ✓ Cleared existing data');

  // Insert parent categories first
  const parentDocs = {};
  for (const parent of CATEGORY_HIERARCHY.parents) {
    const doc = await Category.create(parent);
    parentDocs[parent.slug] = doc._id;
  }

  // Insert subcategories with parent references
  for (const sub of CATEGORY_HIERARCHY.subcategories) {
    await Category.create({
      ...sub,
      parentCategory: parentDocs[sub.parent]
    });
  }
  console.log(`   ✓ Inserted ${allCategories.length} categories`);

  // Insert products
  await Product.insertMany(allProducts);
  console.log(`   ✓ Inserted ${allProducts.length} products`);

  // Create admin user
  const adminUser = new User({
    name: 'Admin',
    email: 'admin@hariimpex.in',
    password: 'Hari@2024',
    isAdmin: true
  });
  await adminUser.save();
  console.log('   ✓ Created admin user (admin@hariimpex.in)');

  console.log('\n═══════════════════════════════════════════════');
  console.log('  MIGRATION COMPLETE!');
  console.log(`  Products: ${allProducts.length}`);
  console.log(`  Categories: ${allCategories.length}`);
  console.log(`  Images: ${imagesCopied}`);
  console.log('═══════════════════════════════════════════════');

  process.exit(0);
}

function parseMydataJsx() {
  const mydataPath = path.join(__dirname, 'hari_live', 'src', 'Components', 'Mydata.jsx');
  const content = fs.readFileSync(mydataPath, 'utf-8');
  // Extract the array between "const predefinedProducts = [" and "];"
  const startIdx = content.indexOf('[');
  const endIdx = content.lastIndexOf('];') + 1;
  const arrayStr = content.substring(startIdx, endIdx);
  try {
    const fn = new Function('return ' + arrayStr);
    return fn();
  } catch (e) {
    console.error('Failed to parse Mydata.jsx:', e.message);
    return [];
  }
}

main().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
