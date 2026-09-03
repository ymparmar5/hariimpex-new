export type Division = 'display-signage' | 'cooling-components';

export interface Category {
  id: string;
  slug: string;
  name: string;
  division: Division;
  shortDescription: string;
  heroImage: string;
  icon: string;
}

export interface PricingInfo {
  type: 'per-sqft' | 'per-piece' | 'per-unit' | 'quote-only';
  amount?: number;
  currency: 'INR';
  minOrderQty?: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  division: Division;
  shortDescription: string;
  description: string;
  images: string[];
  pricing: PricingInfo;
  specs: Record<string, string>;
  inStock: boolean;
  isQuoteOnly: boolean;
  tags?: string[];
  seo: { title: string; description: string; keywords: string[] };
}

export const CATEGORIES: Category[] = [
  // Division A
  {
    id: 'c1', slug: 'led-video-walls', name: 'LED Video Walls & Displays', division: 'display-signage',
    shortDescription: 'High-impact LED video walls and displays for indoor and outdoor advertising.',
    heroImage: '/images/categories/led-video-walls.jpg', icon: 'Monitor'
  },
  {
    id: 'c2', slug: 'digital-standees', name: 'Digital Standees & Signage', division: 'display-signage',
    shortDescription: 'Portable and fixed digital standees for retail and commercial signage.',
    heroImage: '/images/categories/digital-standees.jpg', icon: 'Smartphone'
  },
  {
    id: 'c3', slug: 'led-scrolling-boards', name: 'LED Scrolling & Display Boards', division: 'display-signage',
    shortDescription: 'Dynamic scrolling text boards and static display modules.',
    heroImage: '/images/categories/led-scrolling-boards.jpg', icon: 'Activity'
  },
  {
    id: 'c4', slug: 'led-scoreboards', name: 'LED Scoreboards', division: 'display-signage',
    shortDescription: 'Customized digital scoreboards for sports and stadiums.',
    heroImage: '/images/categories/led-scoreboards.jpg', icon: 'Trello'
  },
  {
    id: 'c5', slug: 'clip-on-acrylic-boards', name: 'Clip-On & Acrylic Boards', division: 'display-signage',
    shortDescription: 'Elegant clip-on and acrylic boards for menus and notices.',
    heroImage: '/images/categories/clip-on-acrylic-boards.jpg', icon: 'Square'
  },
  {
    id: 'c6', slug: 'aluminium-led-profiles', name: 'Aluminium & LED Structural Profiles', division: 'display-signage',
    shortDescription: 'Durable aluminium extrusions and profiles for LED installations.',
    heroImage: '/images/categories/aluminium-led-profiles.jpg', icon: 'Layout'
  },
  // Division B
  {
    id: 'c7', slug: 'water-cooling-blocks', name: 'CPU & Industrial Water Cooling Blocks', division: 'cooling-components',
    shortDescription: 'Precision-machined copper and aluminium water blocks for thermal management.',
    heroImage: '/images/categories/water-cooling-blocks.jpg', icon: 'Cpu'
  },
  {
    id: 'c8', slug: 'radiators-heat-exchange', name: 'Radiators & Heat Exchange', division: 'cooling-components',
    shortDescription: 'High-efficiency radiators and condenser coils for industrial cooling.',
    heroImage: '/images/categories/radiators-heat-exchange.jpg', icon: 'ThermometerSnowflake'
  }
];

export const PRODUCTS: Product[] = [
  // 1. LED Video Walls & Displays
  {
    id: 'p1', slug: 'outdoor-led-screen', name: 'Outdoor LED Screen', categorySlug: 'led-video-walls', division: 'display-signage',
    shortDescription: 'High-brightness outdoor LED screen for advertising.', description: '...',
    images: ['/images/products/placeholder.jpg'], pricing: { type: 'per-sqft', amount: 4500, currency: 'INR' },
    specs: { 'Pixel Pitch': '— confirm with client —', 'Brightness': '— confirm with client —' },
    inStock: true, isQuoteOnly: true,
    seo: { title: 'Outdoor LED Screen | Hari Impex', description: 'High-brightness outdoor LED screen.', keywords: [] }
  },
  {
    id: 'p2', slug: 'fixable-video-wall', name: 'Fixable Video Wall', categorySlug: 'led-video-walls', division: 'display-signage',
    shortDescription: 'Durable fixable video wall for permanent installations.', description: '...',
    images: ['/images/products/placeholder.jpg'], pricing: { type: 'per-sqft', amount: 6800, currency: 'INR' },
    specs: { 'Panel Material': '— confirm with client —' },
    inStock: true, isQuoteOnly: true,
    seo: { title: 'Fixable Video Wall | Hari Impex', description: 'Durable fixable video wall.', keywords: [] }
  },
  {
    id: 'p3', slug: 'indoor-led-display', name: 'Indoor LED Display', categorySlug: 'led-video-walls', division: 'display-signage',
    shortDescription: 'High-resolution indoor LED display.', description: '...',
    images: ['/images/products/placeholder.jpg'], pricing: { type: 'quote-only', currency: 'INR' },
    specs: { 'Refresh Rate': '— confirm with client —' },
    inStock: true, isQuoteOnly: true,
    seo: { title: 'Indoor LED Display | Hari Impex', description: 'Indoor LED Display.', keywords: [] }
  },
  // 2. Digital Standees & Signage
  {
    id: 'p4', slug: 'led-screen-standee', name: 'LED Screen Standee', categorySlug: 'digital-standees', division: 'display-signage',
    shortDescription: 'Premium LED screen standee for retail stores.', description: '...',
    images: ['/images/products/placeholder.jpg'], pricing: { type: 'per-piece', amount: 57000, currency: 'INR' },
    specs: { 'Screen Size': '— confirm with client —' },
    inStock: true, isQuoteOnly: true,
    seo: { title: 'LED Screen Standee | Hari Impex', description: 'LED Screen Standee.', keywords: [] }
  },
  {
    id: 'p5', slug: 'led-standee-32-inch', name: 'LED Standee, 32-inch, with charging socket', categorySlug: 'digital-standees', division: 'display-signage',
    shortDescription: 'Interactive 32-inch standee with integrated charging.', description: '...',
    images: ['/images/products/placeholder.jpg'], pricing: { type: 'per-unit', amount: 35000, currency: 'INR' },
    specs: { 'Screen Size': '32-inch', 'Charging Ports': '— confirm with client —' },
    inStock: true, isQuoteOnly: true,
    seo: { title: '32-inch LED Standee | Hari Impex', description: '32-inch LED Standee with charging socket.', keywords: [] }
  },
  // 3. LED Scrolling & Display Boards
  {
    id: 'p6', slug: 'running-led-display-board', name: 'Running LED Display Board', categorySlug: 'led-scrolling-boards', division: 'display-signage',
    shortDescription: 'Dynamic scrolling board for text displays.', description: '...',
    images: ['/images/products/placeholder.jpg'], pricing: { type: 'per-sqft', amount: 1700, currency: 'INR' },
    specs: { 'Color': '— confirm with client —' },
    inStock: true, isQuoteOnly: true,
    seo: { title: 'Running LED Display Board | Hari Impex', description: 'Running LED Display Board.', keywords: [] }
  },
  {
    id: 'p7', slug: 'led-display-module', name: 'LED Display Module', categorySlug: 'led-scrolling-boards', division: 'display-signage',
    shortDescription: 'Individual LED modules for custom boards.', description: '...',
    images: ['/images/products/placeholder.jpg'], pricing: { type: 'per-piece', amount: 3400, currency: 'INR' },
    specs: { 'Pitch': '— confirm with client —' },
    inStock: true, isQuoteOnly: false,
    seo: { title: 'LED Display Module | Hari Impex', description: 'LED Display Module.', keywords: [] }
  },
  {
    id: 'p8', slug: 'gold-rate-led-display-board', name: 'Gold Rate LED Display Board', categorySlug: 'led-scrolling-boards', division: 'display-signage',
    shortDescription: 'Specifically designed display board for bullion markets.', description: '...',
    images: ['/images/products/placeholder.jpg'], pricing: { type: 'per-piece', amount: 3900, currency: 'INR' },
    specs: { 'Digits': '— confirm with client —' },
    inStock: true, isQuoteOnly: false,
    seo: { title: 'Gold Rate LED Display Board | Hari Impex', description: 'Gold Rate LED Display Board.', keywords: [] }
  },
  // 5. Clip-On & Acrylic Boards
  {
    id: 'p9', slug: 'clip-on-board', name: 'Aluminium Clip-On Board', categorySlug: 'clip-on-acrylic-boards', division: 'display-signage',
    shortDescription: 'Easy to change aluminium clip-on board.', description: '...',
    images: ['/images/products/placeholder.jpg'], pricing: { type: 'quote-only', currency: 'INR' },
    specs: { 'Material': 'Aluminium' },
    inStock: true, isQuoteOnly: true,
    seo: { title: 'Aluminium Clip-On Board | Hari Impex', description: 'Aluminium Clip-On Board.', keywords: [] }
  },
  // 7. CPU & Industrial Water Cooling Blocks
  {
    id: 'p10', slug: 'copper-water-block-80x40', name: 'Copper Water Block, 80×40mm', categorySlug: 'water-cooling-blocks', division: 'cooling-components',
    shortDescription: 'Precision machined copper water block.', description: '...',
    images: ['/images/products/placeholder.jpg'], pricing: { type: 'quote-only', currency: 'INR' },
    specs: { 'Dimensions': '80x40mm', 'Material': 'Copper' },
    inStock: true, isQuoteOnly: true,
    seo: { title: 'Copper Water Block 80x40mm | Hari Impex', description: 'Copper Water Block 80x40mm.', keywords: [] }
  },
  {
    id: 'p11', slug: 'copper-water-block-top-nozzle', name: 'Copper Water Block, Top Nozzle', categorySlug: 'water-cooling-blocks', division: 'cooling-components',
    shortDescription: 'Top nozzle copper water block for industrial use.', description: '...',
    images: ['/images/products/placeholder.jpg'], pricing: { type: 'quote-only', currency: 'INR' },
    specs: { 'Material': 'Copper', 'Nozzle Position': 'Top' },
    inStock: true, isQuoteOnly: true,
    seo: { title: 'Copper Water Block Top Nozzle | Hari Impex', description: 'Copper Water Block Top Nozzle.', keywords: [] }
  },
  // 8. Radiators & Heat Exchange
  {
    id: 'p12', slug: 'cpu-water-cooling-radiator', name: 'CPU Water Cooling Radiator', categorySlug: 'radiators-heat-exchange', division: 'cooling-components',
    shortDescription: 'High-performance CPU water cooling radiator.', description: '...',
    images: ['/images/products/placeholder.jpg'], pricing: { type: 'quote-only', currency: 'INR' },
    specs: { 'Material': '— confirm with client —' },
    inStock: true, isQuoteOnly: true,
    seo: { title: 'CPU Water Cooling Radiator | Hari Impex', description: 'CPU Water Cooling Radiator.', keywords: [] }
  },
  {
    id: 'p13', slug: 'condenser-coil-8x4', name: 'Condenser Coil, 8×4 inch', categorySlug: 'radiators-heat-exchange', division: 'cooling-components',
    shortDescription: 'Industrial condenser coil.', description: '...',
    images: ['/images/products/placeholder.jpg'], pricing: { type: 'quote-only', currency: 'INR' },
    specs: { 'Dimensions': '8x4 inch' },
    inStock: true, isQuoteOnly: true,
    seo: { title: 'Condenser Coil 8x4 inch | Hari Impex', description: 'Condenser Coil 8x4 inch.', keywords: [] }
  }
];

export async function getCategories() {
  return CATEGORIES;
}

export async function getCategoryBySlug(slug: string) {
  return CATEGORIES.find(c => c.slug === slug);
}

export async function getProductsByCategory(categorySlug: string) {
  return PRODUCTS.filter(p => p.categorySlug === categorySlug);
}

export async function getProductBySlug(slug: string) {
  return PRODUCTS.find(p => p.slug === slug);
}

export async function getProductsByDivision(division: Division) {
  return PRODUCTS.filter(p => p.division === division);
}

export async function getAllProducts() {
  return PRODUCTS;
}
