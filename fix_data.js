const fs = require('fs');
const path = require('path');

const MIGRATION_DIR = path.join(__dirname, 'migration_data');
const PRODUCTS_FILE = path.join(MIGRATION_DIR, 'products.json');
const CATEGORIES_FILE = path.join(MIGRATION_DIR, 'categories.json');

// Read existing data
let products = JSON.parse(fs.readFileSync(PRODUCTS_FILE, 'utf-8'));
let oldCategories = JSON.parse(fs.readFileSync(CATEGORIES_FILE, 'utf-8'));

// 1. Rebuild Categories with Hierarchy
// Main Categories
const newCategories = [
  { name: 'Cooling Solutions', slug: 'cooling-solutions', division: 'cooling' },
  { name: 'Digital Displays', slug: 'digital-displays', division: 'display' }
];

// Map old categories to subcategories
const categoryMapping = {
  'cooling-accs': { parent: 'cooling-solutions', newSlug: 'cooling-accessories' },
  'water-block': { parent: 'cooling-solutions', newSlug: 'water-blocks' },
  'condenser': { parent: 'cooling-solutions', newSlug: 'condensers' },
  'aquarium-chiller': { parent: 'cooling-solutions', newSlug: 'aquarium-chillers' },
  'category-cooling-water-block-accesories': { parent: 'cooling-solutions', newSlug: 'cooling-accessories' },
  'uncategorized': { parent: 'cooling-solutions', newSlug: 'other-cooling' },
  'standee-display': { parent: 'digital-displays', newSlug: 'standees' },
  'led-bord-profiles': { parent: 'digital-displays', newSlug: 'led-boards' }
};

// Add subcategories to newCategories array
oldCategories.forEach(oldCat => {
  const mapping = categoryMapping[oldCat.slug];
  if (mapping) {
    // Only add if not already added
    if (!newCategories.find(c => c.slug === mapping.newSlug)) {
      newCategories.push({
        name: oldCat.name,
        slug: mapping.newSlug,
        division: mapping.parent === 'cooling-solutions' ? 'cooling' : 'display',
        parentCategorySlug: mapping.parent // We will resolve this to ObjectId in seeder
      });
    }
  }
});

// 2. Fix Products
const imageFallbacks = {
  'standee': 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800',
  'heatsink': 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800',
  'condenser': 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800',
  'chiller': 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=800',
  'default': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
};

products = products.map(p => {
  // Fix Category & Subcategory
  const mapping = categoryMapping[p.categorySlug] || { parent: 'cooling-solutions', newSlug: 'other-cooling' };
  
  p.categorySlug = mapping.parent;
  p.subcategorySlug = mapping.newSlug;

  // Fix Missing Images
  if (!p.images || p.images.length === 0) {
    console.log(`Fixing missing image for: ${p.name}`);
    let fallback = imageFallbacks['default'];
    if (p.name.toLowerCase().includes('standee')) fallback = imageFallbacks['standee'];
    else if (p.name.toLowerCase().includes('heatsink')) fallback = imageFallbacks['heatsink'];
    else if (p.name.toLowerCase().includes('condenser')) fallback = imageFallbacks['condenser'];
    else if (p.name.toLowerCase().includes('chiller')) fallback = imageFallbacks['chiller'];
    
    p.images = [fallback];
  }

  // Clean up empty shortDescription which causes mongoose validation errors
  if (!p.shortDescription || p.shortDescription.trim() === '') {
    p.shortDescription = p.name;
  }

  return p;
});

// Write fixed data
fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2));
fs.writeFileSync(CATEGORIES_FILE, JSON.stringify(newCategories, null, 2));

console.log('Data polished perfectly! Added parent categories and resolved missing images.');
