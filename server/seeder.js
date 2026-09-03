const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

const Product = require('./models/Product');
const Category = require('./models/Category');
const User = require('./models/User');
const Order = require('./models/Order');

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.C || 'mongodb://localhost:27017/hariimpex');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const importData = async () => {
  try {
    await connectDB();

    // Clear DB
    await Order.deleteMany();
    await Product.deleteMany();
    await Category.deleteMany();
    await User.deleteMany();

    console.log('Data Cleared!');

    // Read JSON files
    const productsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../migration_data/products.json'), 'utf-8'));
    const categoriesData = JSON.parse(fs.readFileSync(path.join(__dirname, '../migration_data/categories.json'), 'utf-8'));

    // Insert Admin User
    const adminUser = new User({
        name: 'Admin User',
        email: 'admin@hariimpex.in',
        password: 'password123', 
        isAdmin: true
    });
    await adminUser.save();

    // Insert Categories
    // First, separate main categories (no parentCategorySlug) and subcategories
    const mainCategories = categoriesData.filter(c => !c.parentCategorySlug);
    const subCategories = categoriesData.filter(c => c.parentCategorySlug);

    const insertedMains = await Category.insertMany(mainCategories);

    // Map inserted main categories to their ObjectIds
    const mainCategoryMap = {};
    insertedMains.forEach(cat => {
      mainCategoryMap[cat.slug] = cat._id;
    });

    // Insert subcategories with proper parentCategory ObjectId
    const subCategoriesWithParent = subCategories.map(sub => {
      const parentId = mainCategoryMap[sub.parentCategorySlug];
      return {
        name: sub.name,
        slug: sub.slug,
        division: sub.division,
        parentCategory: parentId
      };
    });

    await Category.insertMany(subCategoriesWithParent);

    // Insert Products
    await Product.insertMany(productsData);

    console.log('Data Imported successfully from perfectly polished migration_data!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await connectDB();
    await Order.deleteMany();
    await Product.deleteMany();
    await Category.deleteMany();
    await User.deleteMany();
    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
