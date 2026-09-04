export type Division = 'display' | 'cooling';

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
  {
    id: 'c1', slug: 'cooling-solutions', name: 'Cooling Solutions', division: 'cooling',
    shortDescription: 'Complete range of cooling components including fans, water blocks, heatsinks, condensers and peltier modules.',
    heroImage: '/uploads/fan-plus-grill-2.jpeg', icon: 'Thermometer'
  },
  {
    id: 'c2', slug: 'digital-displays', name: 'Digital Displays', division: 'display',
    shortDescription: 'Professional digital signage solutions including standee displays and LED board profiles.',
    heroImage: '/uploads/hero1.jpg', icon: 'Monitor'
  },
  {
    id: 'c3', slug: 'water-blocks', name: 'Water Blocks', division: 'cooling',
    shortDescription: 'Precision-machined copper and aluminium water blocks for efficient thermal management.',
    heroImage: '/uploads/IMG-20220419-WA0015.jpg', icon: 'Cpu'
  },
  {
    id: 'c4', slug: 'cooling-accessories', name: 'Cooling Accessories', division: 'cooling',
    shortDescription: 'Fans, grills, heatsinks, SMPS power supplies and peltier modules for cooling setups.',
    heroImage: '/uploads/fan-plus-grill-2.jpeg', icon: 'Fan'
  },
  {
    id: 'c5', slug: 'condensers', name: 'Condensers', division: 'cooling',
    shortDescription: 'High-efficiency condensers, radiators and heat exchange components.',
    heroImage: '/uploads/16-16-1.png', icon: 'ThermometerSnowflake'
  },
  {
    id: 'c6', slug: 'aquarium-chillers', name: 'Aquarium Chillers', division: 'cooling',
    shortDescription: 'Industrial and hobbyist aquarium chillers for precise temperature control.',
    heroImage: '/uploads/IMG-20220419-WA0015.jpg', icon: 'Droplets'
  },
  {
    id: 'c7', slug: 'standee-displays', name: 'Standee Displays', division: 'display',
    shortDescription: 'Premium digital standees for retail, hospitality and commercial signage.',
    heroImage: '/uploads/hero1.jpg', icon: 'Smartphone'
  },
  {
    id: 'c8', slug: 'led-board-profiles', name: 'LED Board Profiles', division: 'display',
    shortDescription: 'Aluminium LED structural profiles for video walls and signage installations.',
    heroImage: '/uploads/led-display.jpg', icon: 'Layout'
  },
];

export const PRODUCTS: Product[] = [
  // --- WATER BLOCKS ---
  {
    id: 'p1', slug: '40-40-mm-top-nozzell-aluminium-water-block', name: '40×40mm Top Nozzle Aluminium Water Block',
    categorySlug: 'water-blocks', division: 'cooling',
    shortDescription: 'Compact 40×40mm aluminium water block with top-mounted nozzle for space-efficient cooling setups.',
    description: 'Precision-machined aluminium water block designed for compact cooling applications. The top nozzle configuration allows easy integration into tight spaces. Suitable for peltier cooling modules, small electronics, and DIY projects.',
    images: ['/uploads/40-40-mm-top-nozzell-aluminium-water-block-1.jpg', '/uploads/40-40-main.jpg', '/uploads/40-40-2.jpg'],
    pricing: { type: 'per-piece', amount: 325, currency: 'INR', minOrderQty: 1 },
    specs: { 'Dimensions': '40×40mm', 'Material': 'Aluminium', 'Nozzle Position': 'Top', 'Thread Size': 'G1/4"' },
    inStock: true, isQuoteOnly: false,
    seo: { title: '40×40mm Top Nozzle Aluminium Water Block | Hari Impex', description: 'Compact aluminium water block with top nozzle for efficient cooling.', keywords: ['water block', 'aluminium water block', '40mm water block'] }
  },
  {
    id: 'p2', slug: '40-40-12-side-nozzle-copper-water-block', name: '40×40×12mm Side Nozzle Copper Water Block',
    categorySlug: 'water-blocks', division: 'cooling',
    shortDescription: 'High-performance copper water block with side nozzle entry for superior heat dissipation.',
    description: 'Premium copper water block with side-mounted nozzle. Copper construction provides excellent thermal conductivity for demanding cooling applications. Perfect for peltier modules and precision electronics cooling.',
    images: ['/uploads/40-40-12-side-nozzle-copper-water-block-1.jpg', '/uploads/IMG_20210521_201135.jpg', '/uploads/IMG_20210521_201225.jpg'],
    pricing: { type: 'per-piece', amount: 495, currency: 'INR', minOrderQty: 1 },
    specs: { 'Dimensions': '40×40×12mm', 'Material': 'Copper', 'Nozzle Position': 'Side', 'Thread Size': 'G1/4"' },
    inStock: true, isQuoteOnly: false,
    seo: { title: '40×40×12mm Copper Water Block | Hari Impex', description: 'Copper water block with side nozzle for high-performance cooling.', keywords: ['copper water block', 'side nozzle', 'thermal management'] }
  },
  {
    id: 'p3', slug: 'hari-impex-80-40mm-copper-water-block', name: '80×40mm Copper Water Block',
    categorySlug: 'water-blocks', division: 'cooling',
    shortDescription: 'Large-format 80×40mm copper water block for industrial and high-power cooling applications.',
    description: 'Industrial-grade copper water block with extended 80×40mm surface area. Designed for high-power electronics, laser cooling, and industrial thermal management systems. Precision CNC machined for optimal water flow channels.',
    images: ['/uploads/hari-impex-80-40mm-copper-water-block-1.jpg', '/uploads/80-40-side-nozell-3.jpg', '/uploads/80-40-2.jpeg'],
    pricing: { type: 'per-piece', amount: 2250, currency: 'INR', minOrderQty: 1 },
    specs: { 'Dimensions': '80×40mm', 'Material': 'Copper', 'Nozzle Position': 'Side', 'Application': 'Industrial/High-Power' },
    inStock: true, isQuoteOnly: false,
    seo: { title: '80×40mm Copper Water Block | Hari Impex', description: 'Large copper water block for industrial thermal management.', keywords: ['80mm water block', 'copper water block', 'industrial cooling'] }
  },
  {
    id: 'p4', slug: 'cpu-water-cooling-block', name: 'CPU Water Cooling Block',
    categorySlug: 'water-blocks', division: 'cooling',
    shortDescription: 'High-flow CPU water cooling block with micro-channel design for optimal heat transfer.',
    description: 'Engineered CPU water cooling block with advanced micro-channel design for maximum heat transfer efficiency. Compatible with standard CPU mounting systems. Ideal for gaming PCs, workstations, and custom cooling loops.',
    images: ['/uploads/Cpu-water-Block-4.jpg', '/uploads/Cpu-water-Block-3.jpg', '/uploads/Cpu-water-Block-5.jpg'],
    pricing: { type: 'per-piece', amount: 1495, currency: 'INR', minOrderQty: 1 },
    specs: { 'Material': 'Copper + Acetal Top', 'Flow Design': 'Micro-channel', 'Thread Size': 'G1/4"', 'Compatibility': 'Universal CPU Mount' },
    inStock: true, isQuoteOnly: false,
    seo: { title: 'CPU Water Cooling Block | Hari Impex', description: 'High-flow CPU water cooling block with micro-channel design.', keywords: ['CPU water block', 'PC cooling', 'water cooling'] }
  },
  {
    id: 'p5', slug: '40-40-12mm-water-block', name: '40×40×12mm Aluminium Water Block',
    categorySlug: 'water-blocks', division: 'cooling',
    shortDescription: 'Compact aluminium water block, 40×40×12mm with efficient flow channels.',
    description: 'Lightweight aluminium water block perfect for peltier module cooling and small electronic device thermal management. Low-profile 12mm height for tight installation spaces.',
    images: ['/uploads/40-40-12mm-water-block-1.jpg', '/uploads/40-40-3.jpg'],
    pricing: { type: 'per-piece', amount: 295, currency: 'INR', minOrderQty: 1 },
    specs: { 'Dimensions': '40×40×12mm', 'Material': 'Aluminium', 'Weight': '~50g' },
    inStock: true, isQuoteOnly: false,
    seo: { title: '40×40×12mm Aluminium Water Block | Hari Impex', description: 'Compact aluminium water block for peltier and electronics cooling.', keywords: ['aluminium water block', 'compact water block', 'peltier cooling'] }
  },
  // --- PELTIER MODULES ---
  {
    id: 'p6', slug: 'triple-peltier-module', name: 'Triple Peltier Module',
    categorySlug: 'cooling-accessories', division: 'cooling',
    shortDescription: 'Triple Peltier Module with three fan grills, 12706 peltier elements, 40mm heatsinks and miniature fans.',
    description: 'Complete triple peltier cooling assembly featuring three TEC 12706 peltier elements, 40mm aluminium heatsinks, miniature DC fans, and fan grills. Ready-to-use thermoelectric cooling solution for refrigeration projects, cooler boxes, and small space cooling.',
    images: ['/uploads/triple-peltier-module-1.jpg', '/uploads/Screenshot_2022-03-10-20-29-59-30_6012fa4d4ddec268fc5c7112cbb265e7-1.jpg'],
    pricing: { type: 'per-piece', amount: 3600, currency: 'INR', minOrderQty: 1 },
    specs: { 'Peltier Elements': '3× TEC 12706', 'Heatsink Size': '40mm', 'Fans': '3× Miniature DC', 'Voltage': 'DC 12V' },
    inStock: true, isQuoteOnly: false,
    seo: { title: 'Triple Peltier Module | Hari Impex', description: 'Complete triple peltier cooling module with fans and heatsinks.', keywords: ['peltier module', 'thermoelectric cooling', 'TEC 12706'] }
  },
  {
    id: 'p7', slug: 'dual-peltier-module-with-miniature-fans', name: 'Dual Peltier Module with Miniature Fans',
    categorySlug: 'cooling-accessories', division: 'cooling',
    shortDescription: '2-core thermoelectric peltier air cooling module, 120W power, DC 12V with stable 7A current draw.',
    description: 'Dual-core thermoelectric peltier cooling module with 120W power output. Features two 12705 peltier chips, miniature fans for heat dissipation, and stable low-noise operation. Suitable for tablet cooling, computer experiment boards, pet beds, and small space refrigeration.',
    images: ['/uploads/dual-peltier-module-with-miniature-fans-1.jpg', '/uploads/IMG-20220222-WA0010.jpg', '/uploads/IMG-20220222-WA0011.jpg'],
    pricing: { type: 'per-piece', amount: 2400, currency: 'INR', minOrderQty: 1 },
    specs: { 'Power': '120W', 'Peltier Chips': '2× 12705', 'Current': '10A (Stable: 7A)', 'Voltage': 'DC 12V', 'Size': '200×120×95mm' },
    inStock: true, isQuoteOnly: false,
    seo: { title: 'Dual Peltier Module | Hari Impex', description: '120W dual peltier cooling module with miniature fans.', keywords: ['dual peltier', 'thermoelectric cooler', 'peltier module'] }
  },
  {
    id: 'p8', slug: 'single-peltier-module', name: 'Single Peltier Module',
    categorySlug: 'cooling-accessories', division: 'cooling',
    shortDescription: 'Single peltier thermoelectric cooling module, compact and ready to use.',
    description: 'Single-core peltier cooling module for basic thermoelectric cooling needs. Compact design suitable for small projects, beverage coolers, and educational experiments in semiconductor refrigeration.',
    images: ['/uploads/single-peltier-module-1.jpg', '/uploads/IMG_20210601_181334.jpg'],
    pricing: { type: 'per-piece', amount: 1250, currency: 'INR', minOrderQty: 1 },
    specs: { 'Configuration': 'Single Core', 'Voltage': 'DC 12V', 'Application': 'Small Space Cooling' },
    inStock: true, isQuoteOnly: false,
    seo: { title: 'Single Peltier Module | Hari Impex', description: 'Compact single peltier thermoelectric cooling module.', keywords: ['single peltier', 'peltier module', 'thermoelectric'] }
  },
  {
    id: 'p9', slug: 'hari-impex-four-peltier-cooling-module', name: 'Four Peltier Cooling Module',
    categorySlug: 'cooling-accessories', division: 'cooling',
    shortDescription: 'Heavy-duty quad peltier cooling module for maximum cooling capacity in demanding applications.',
    description: 'Our most powerful peltier assembly featuring four thermoelectric elements for maximum cooling capacity. Designed for industrial cooling applications, large cooler boxes, and commercial refrigeration projects. Includes heatsinks, fans, and mounting hardware.',
    images: ['/uploads/hari-impex-four-peltier-cooling-module-1.jpg', '/uploads/IMG-20200923-WA0004.jpg'],
    pricing: { type: 'per-piece', amount: 9500, currency: 'INR', minOrderQty: 1 },
    specs: { 'Peltier Elements': '4× TEC', 'Voltage': 'DC 12V', 'Application': 'Heavy-Duty Cooling', 'Includes': 'Heatsinks, Fans, Hardware' },
    inStock: true, isQuoteOnly: false,
    seo: { title: 'Four Peltier Cooling Module | Hari Impex', description: 'Heavy-duty quad peltier module for maximum cooling.', keywords: ['four peltier', 'quad peltier', 'industrial cooling module'] }
  },
  // --- FANS & ACCESSORIES ---
  {
    id: 'p10', slug: 'hari-impex-12v-120mm-dc-fan-grill-combo', name: '12V 120mm DC Fan + Grill Combo',
    categorySlug: 'cooling-accessories', division: 'cooling',
    shortDescription: '120mm DC fan with matching metal grill for cooling setups and enclosures.',
    description: 'High-quality 120mm DC fan paired with a durable metal grill. 12V operation for compatibility with standard power supplies and cooling systems. Ideal for heatsink assemblies, equipment ventilation, and DIY cooling projects.',
    images: ['/uploads/hari-impex-12v-120mm-dc-fan-grill-combo-1.jpg', '/uploads/fan-plus-grill-combo.jpg'],
    pricing: { type: 'per-piece', amount: 470, currency: 'INR', minOrderQty: 1 },
    specs: { 'Fan Size': '120mm', 'Voltage': 'DC 12V', 'Includes': 'Fan + Metal Grill' },
    inStock: true, isQuoteOnly: false,
    seo: { title: '120mm DC Fan + Grill Combo | Hari Impex', description: '120mm DC fan with metal grill for cooling setups.', keywords: ['120mm fan', 'DC fan', 'fan grill combo'] }
  },
  {
    id: 'p11', slug: 'hari-impex-120mm-fan-grill', name: '120mm Fan Grill',
    categorySlug: 'cooling-accessories', division: 'cooling',
    shortDescription: 'Chrome-plated 120mm fan grill for fan protection and airflow optimization.',
    description: 'Durable chrome-plated metal fan grill for 120mm fans. Provides fan blade protection while maintaining optimal airflow. Standard mounting pattern compatible with all 120mm fans.',
    images: ['/uploads/hari-impex-120mm-fan-grill-1.jpeg', '/uploads/fan-plus-grill-2.jpeg'],
    pricing: { type: 'per-piece', amount: 125, currency: 'INR', minOrderQty: 1 },
    specs: { 'Size': '120mm', 'Material': 'Chrome-plated Steel' },
    inStock: true, isQuoteOnly: false,
    seo: { title: '120mm Fan Grill | Hari Impex', description: 'Chrome-plated 120mm fan grill for protection and airflow.', keywords: ['fan grill', '120mm grill', 'fan guard'] }
  },
  {
    id: 'p12', slug: 'hari-impex-axial-case-cooling-fan-size-120mm-supply-voltage-12vdc', name: '120mm 12V DC Axial Fan',
    categorySlug: 'cooling-accessories', division: 'cooling',
    shortDescription: 'High-performance 120mm axial cooling fan, 12V DC for case and equipment ventilation.',
    description: 'Reliable 120mm axial fan with 12V DC operation. High airflow design for effective cooling in enclosures, equipment cabinets, and custom cooling assemblies. Ball bearing construction for long service life.',
    images: ['/uploads/hari-impex-axial-case-cooling-fan-size-120mm-supply-voltage-12vdc-1.jpg', '/uploads/Fan-1.jpg', '/uploads/120-mm-fan.jpg'],
    pricing: { type: 'per-piece', amount: 350, currency: 'INR', minOrderQty: 1 },
    specs: { 'Fan Size': '120mm', 'Voltage': 'DC 12V', 'Type': 'Axial', 'Bearing': 'Ball Bearing' },
    inStock: true, isQuoteOnly: false,
    seo: { title: '120mm 12V DC Axial Fan | Hari Impex', description: 'High-performance 120mm axial cooling fan for enclosures.', keywords: ['120mm fan', 'axial fan', 'DC cooling fan'] }
  },
  {
    id: 'p13', slug: 'hari-impex-120mm-axial-fan-with-220v-ac-supply-voltage', name: '120mm 220V AC Axial Fan',
    categorySlug: 'cooling-accessories', division: 'cooling',
    shortDescription: '120mm axial fan with 220V AC supply for direct mains-powered ventilation.',
    description: 'Industrial 120mm axial fan with direct 220V AC operation. No power supply needed — connects directly to mains power. Perfect for panel ventilation, cabinet cooling, and industrial equipment where DC conversion is not practical.',
    images: ['/uploads/hari-impex-120mm-axial-fan-with-220v-ac-supply-voltage-1.jpg', '/uploads/120-mm-ac-main.jpg', '/uploads/120-mm-ac-main-2.jpg'],
    pricing: { type: 'per-piece', amount: 550, currency: 'INR', minOrderQty: 1 },
    specs: { 'Fan Size': '120mm', 'Voltage': '220V AC', 'Type': 'Axial', 'Application': 'Panel/Cabinet Ventilation' },
    inStock: true, isQuoteOnly: false,
    seo: { title: '120mm 220V AC Axial Fan | Hari Impex', description: '120mm axial fan with mains 220V AC power for industrial use.', keywords: ['AC fan', '220V fan', 'panel ventilation fan'] }
  },
  {
    id: 'p14', slug: '92-mm-12-v-dc-fan-with-grill-combo', name: '92mm 12V DC Fan with Grill Combo',
    categorySlug: 'cooling-accessories', division: 'cooling',
    shortDescription: '92mm DC fan and grill combo for compact cooling solutions.',
    description: 'Compact 92mm DC fan paired with a protective metal grill. 12V operation suitable for tight spaces where 120mm fans don\'t fit. Great for small enclosures, heatsink assemblies, and micro-cooling setups.',
    images: ['/uploads/92-mm-12-v-dc-fan-with-grill-combo-1.jpg', '/uploads/120-mm-fan-wuth-grill.jpg'],
    pricing: { type: 'per-piece', amount: 395, currency: 'INR', minOrderQty: 1 },
    specs: { 'Fan Size': '92mm', 'Voltage': 'DC 12V', 'Includes': 'Fan + Grill' },
    inStock: true, isQuoteOnly: false,
    seo: { title: '92mm DC Fan + Grill Combo | Hari Impex', description: '92mm DC fan with grill for compact cooling.', keywords: ['92mm fan', 'fan grill combo', 'compact fan'] }
  },
  // --- RADIATORS & CONDENSERS ---
  {
    id: 'p15', slug: '120-240-mm-radiator-fan-and-grill-combo-set', name: '120×240mm Radiator Fan & Grill Combo',
    categorySlug: 'condensers', division: 'cooling',
    shortDescription: 'Complete radiator combo set with 120×240mm radiator, dual fans, and grills.',
    description: 'All-in-one radiator cooling kit featuring a high-efficiency 120×240mm aluminium radiator, dual 120mm fans, and matching grills. Perfect for water cooling loops, peltier systems, and industrial heat dissipation. Includes all mounting hardware.',
    images: ['/uploads/120-240-mm-radiator-fan-and-grill-combo-set-1.png', '/uploads/hari-impex-120-240-mm-radiator-1.jpg', '/uploads/radiator-set-edited-2.jpg'],
    pricing: { type: 'per-piece', amount: 2850, currency: 'INR', minOrderQty: 1 },
    specs: { 'Radiator Size': '120×240mm', 'Material': 'Aluminium', 'Fans': '2× 120mm DC', 'Includes': 'Radiator, Fans, Grills, Hardware' },
    inStock: true, isQuoteOnly: false,
    seo: { title: '120×240mm Radiator Combo Set | Hari Impex', description: 'Complete radiator kit with fans and grills for water cooling.', keywords: ['radiator', '240mm radiator', 'water cooling radiator'] }
  },
  // --- HEATSINK COMBOS ---
  {
    id: 'p16', slug: '300mm-heatsink-combo-without-peltier', name: '300mm Heatsink Combo (without Peltier)',
    categorySlug: 'cooling-accessories', division: 'cooling',
    shortDescription: 'Complete 300mm heatsink combo with 3 water blocks, clip sets, DC fans with grills, and PVC pipe.',
    description: 'Comprehensive heatsink cooling kit with a 300mm aluminium heatsink, three 40×40×12mm water blocks, clip mounting sets, three 12V DC 100mm fans with grills, and PVC pipe. Everything needed to build a multi-zone cooling system. Just add your peltier elements.',
    images: ['/uploads/300mm-heatsink-combo-without-peltier-1.jpg', '/uploads/Screenshot_2020-08-25-21-00-45-42.jpg', '/uploads/300-mm-combo-2.jpg'],
    pricing: { type: 'per-piece', amount: 2700, currency: 'INR', minOrderQty: 1 },
    specs: { 'Heatsink Length': '300mm', 'Water Blocks': '3× 40×40×12mm', 'Fans': '3× 100mm DC 12V', 'Includes': 'Clip Sets, PVC Pipe, Grills' },
    inStock: true, isQuoteOnly: false,
    seo: { title: '300mm Heatsink Combo | Hari Impex', description: '300mm heatsink combo kit with water blocks, fans and accessories.', keywords: ['heatsink combo', '300mm heatsink', 'cooling kit'] }
  },
  {
    id: 'p17', slug: '100mm-100mm-heatsink-combo-without-peltier', name: '100×100mm Heatsink Combo (without Peltier)',
    categorySlug: 'cooling-accessories', division: 'cooling',
    shortDescription: 'Compact 100×100mm heatsink combo kit with water block, fan, and mounting hardware.',
    description: 'Compact single-zone cooling kit with a 100×100mm aluminium heatsink, water block, DC fan with grill, and mounting accessories. Ideal for single peltier setups, electronics cooling, and prototyping.',
    images: ['/uploads/100mm-100mm-heatsink-combo-without-peltier-1.jpg', '/uploads/combooo.jpg'],
    pricing: { type: 'per-piece', amount: 990, currency: 'INR', minOrderQty: 1 },
    specs: { 'Heatsink Size': '100×100mm', 'Includes': 'Heatsink, Water Block, Fan, Grill' },
    inStock: true, isQuoteOnly: false,
    seo: { title: '100×100mm Heatsink Combo | Hari Impex', description: 'Compact heatsink combo kit for single peltier cooling setups.', keywords: ['heatsink combo', '100mm heatsink', 'cooling kit'] }
  },
  // --- POWER SUPPLIES ---
  {
    id: 'p18', slug: '12v-33amp-smps', name: '12V 33Amp SMPS Power Supply',
    categorySlug: 'cooling-accessories', division: 'cooling',
    shortDescription: 'High-capacity 12V 33A SMPS power supply for multi-module cooling systems.',
    description: 'Industrial-grade switched-mode power supply delivering 12V at 33 amps. Sufficient capacity to power multi-peltier cooling systems, LED installations, and other high-current 12V DC applications.',
    images: ['/uploads/12v-33amp-smps-1.jpg', '/uploads/IMG_20210531_192434.jpg'],
    pricing: { type: 'per-piece', amount: 1695, currency: 'INR', minOrderQty: 1 },
    specs: { 'Output Voltage': '12V DC', 'Output Current': '33A', 'Type': 'SMPS' },
    inStock: true, isQuoteOnly: false,
    seo: { title: '12V 33A SMPS Power Supply | Hari Impex', description: 'High-capacity 12V 33A SMPS for cooling and LED systems.', keywords: ['SMPS', '12V power supply', '33A SMPS'] }
  },
  {
    id: 'p19', slug: 'hari-impex-12v-20amp-smps', name: '12V 20Amp SMPS Power Supply',
    categorySlug: 'cooling-accessories', division: 'cooling',
    shortDescription: 'Reliable 12V 20A SMPS power supply for medium-capacity cooling setups.',
    description: 'Reliable switched-mode power supply providing 12V at 20 amps. Suitable for dual peltier cooling systems, LED strip installations, and general 12V DC power distribution.',
    images: ['/uploads/hari-impex-12v-20amp-smps-1.jpg', '/uploads/IMG_20210531_190520.jpg'],
    pricing: { type: 'per-piece', amount: 1695, currency: 'INR', minOrderQty: 1 },
    specs: { 'Output Voltage': '12V DC', 'Output Current': '20A', 'Type': 'SMPS' },
    inStock: true, isQuoteOnly: false,
    seo: { title: '12V 20A SMPS Power Supply | Hari Impex', description: 'Reliable 12V 20A SMPS for cooling and general use.', keywords: ['SMPS', '12V power supply', '20A SMPS'] }
  },
  {
    id: 'p20', slug: 'hari-impex-12v-10amp-smps', name: '12V 10Amp SMPS Power Supply',
    categorySlug: 'cooling-accessories', division: 'cooling',
    shortDescription: 'Compact 12V 10A SMPS power supply for single peltier and fan setups.',
    description: 'Compact and efficient SMPS power supply delivering 12V at 10 amps. Perfect for single peltier setups, small fan arrays, and electronics prototyping. Reliable operation with overload protection.',
    images: ['/uploads/hari-impex-12v-10amp-smps-1.jpg', '/uploads/IMG_20210531_184224.jpg'],
    pricing: { type: 'per-piece', amount: 1395, currency: 'INR', minOrderQty: 1 },
    specs: { 'Output Voltage': '12V DC', 'Output Current': '10A', 'Type': 'SMPS' },
    inStock: true, isQuoteOnly: false,
    seo: { title: '12V 10A SMPS Power Supply | Hari Impex', description: 'Compact 12V 10A SMPS for peltier and cooling setups.', keywords: ['SMPS', '12V power supply', '10A SMPS'] }
  },
  // --- AQUARIUM CHILLERS ---
  {
    id: 'p21', slug: 'aquarium-chiller-hi-150a-with-shipping', name: 'Aquarium Chiller HI-150A (with Shipping)',
    categorySlug: 'aquarium-chillers', division: 'cooling',
    shortDescription: 'Hari Impex HI-150A aquarium chiller with free shipping — precision temperature control for aquariums.',
    description: 'Professional aquarium chiller model HI-150A from Hari Impex. Provides precise temperature control for freshwater and marine aquariums. Shipped with complete installation kit. Price includes nationwide shipping.',
    images: ['/uploads/aquarium-chiller-hi-150a-with-shipping-1.jpg', '/uploads/IMG-20220419-WA0015.jpg'],
    pricing: { type: 'per-piece', amount: 21500, currency: 'INR', minOrderQty: 1 },
    specs: { 'Model': 'HI-150A', 'Application': 'Aquarium Cooling', 'Shipping': 'Included', 'Type': 'Thermoelectric Chiller' },
    inStock: true, isQuoteOnly: false,
    seo: { title: 'Aquarium Chiller HI-150A | Hari Impex', description: 'Professional aquarium chiller with free shipping.', keywords: ['aquarium chiller', 'HI-150A', 'fish tank chiller'] }
  },
  // --- WATER PUMP ---
  {
    id: 'p22', slug: 'hari-impex-12-volt-dc-water-pump', name: '12V DC Water Pump',
    categorySlug: 'cooling-accessories', division: 'cooling',
    shortDescription: 'Submersible 12V DC water pump for liquid cooling loops and water circulation.',
    description: 'Compact submersible water pump operating on 12V DC. Designed for water cooling loops, peltier cooling systems, small fountains, and aquarium applications. Quiet operation with reliable flow rate.',
    images: ['/uploads/hari-impex-12-volt-dc-water-pump-1.jpg', '/uploads/pump-1.jpg', '/uploads/pump-2.jpg'],
    pricing: { type: 'per-piece', amount: 450, currency: 'INR', minOrderQty: 1 },
    specs: { 'Voltage': 'DC 12V', 'Type': 'Submersible', 'Application': 'Water Cooling/Circulation' },
    inStock: true, isQuoteOnly: false,
    seo: { title: '12V DC Water Pump | Hari Impex', description: 'Submersible 12V water pump for cooling loops.', keywords: ['water pump', 'DC pump', 'submersible pump'] }
  },
  // --- DISPLAY PRODUCTS ---
  {
    id: 'p23', slug: '32-a-type-standee', name: '32" A-Type Digital Standee',
    categorySlug: 'standee-displays', division: 'display',
    shortDescription: 'Premium 32-inch A-frame digital standee for retail and commercial advertising.',
    description: 'Elegant 32-inch A-type digital standee display for retail environments, restaurants, and commercial lobbies. Full HD display with bright, vivid colors. Easy content management via USB or WiFi. Built with a durable aluminium frame.',
    images: ['/uploads/32-a-type-standee-1.jpg', '/uploads/hero1.jpg'],
    pricing: { type: 'per-piece', amount: 35000, currency: 'INR', minOrderQty: 1 },
    specs: { 'Screen Size': '32 inch', 'Resolution': 'Full HD', 'Frame': 'Aluminium A-Type', 'Connectivity': 'USB, WiFi' },
    inStock: true, isQuoteOnly: true,
    seo: { title: '32" A-Type Digital Standee | Hari Impex', description: 'Premium 32-inch digital standee for retail advertising.', keywords: ['digital standee', '32 inch standee', 'LED standee'] }
  },
  {
    id: 'p24', slug: '43-standee-display', name: '43" Digital Standee Display',
    categorySlug: 'standee-displays', division: 'display',
    shortDescription: 'Large 43-inch digital standee display for high-impact commercial signage.',
    description: 'Large-format 43-inch digital standee display for maximum visual impact. Ideal for shopping malls, hotel lobbies, corporate offices, and exhibition spaces. Ultra-bright LED panel with wide viewing angles. Includes built-in media player.',
    images: ['/uploads/43-standee-display-1.jpg', '/uploads/hero1.jpg'],
    pricing: { type: 'per-piece', amount: 57000, currency: 'INR', minOrderQty: 1 },
    specs: { 'Screen Size': '43 inch', 'Resolution': 'Full HD', 'Brightness': 'High (Indoor)', 'Media Player': 'Built-in' },
    inStock: true, isQuoteOnly: true,
    seo: { title: '43" Digital Standee Display | Hari Impex', description: 'Large 43-inch digital standee for commercial signage.', keywords: ['digital standee', '43 inch standee', 'commercial display'] }
  },
  // --- PELTIER COMPONENT ---
  {
    id: 'p25', slug: 'tec-peltier-12715', name: 'TEC Peltier 12715',
    categorySlug: 'water-blocks', division: 'cooling',
    shortDescription: 'TEC1-12715 thermoelectric peltier element — high-performance semiconductor cooling chip.',
    description: 'High-performance TEC1-12715 thermoelectric peltier element. One of the most powerful single-stage peltier chips available. Ideal for building custom cooling modules, experimental setups, and industrial cooling applications.',
    images: ['/uploads/tec-peltier-12715-1.jpeg', '/uploads/images-6.jpeg'],
    pricing: { type: 'per-piece', amount: 490, currency: 'INR', minOrderQty: 1 },
    specs: { 'Model': 'TEC1-12715', 'Type': 'Thermoelectric Peltier', 'Max Voltage': '15.4V', 'Max Current': '15A' },
    inStock: true, isQuoteOnly: false,
    seo: { title: 'TEC Peltier 12715 | Hari Impex', description: 'High-performance TEC1-12715 thermoelectric peltier element.', keywords: ['TEC 12715', 'peltier element', 'thermoelectric chip'] }
  },
  // --- TRIPLE PELTIER WATER COOLING ---
  {
    id: 'p26', slug: 'triple-peltier-water-cooling-module', name: 'Triple Peltier Water Cooling Module',
    categorySlug: 'water-blocks', division: 'cooling',
    shortDescription: 'Advanced triple peltier module integrated with water cooling for maximum heat dissipation.',
    description: 'Premium triple peltier assembly with integrated water cooling system. Combines the cooling power of three peltier elements with efficient liquid cooling for superior performance. Ideal for serious cooling projects requiring maximum heat extraction.',
    images: ['/uploads/triple-peltier-water-cooling-module-1.jpg', '/uploads/300-mm-combo-main.jpg'],
    pricing: { type: 'per-piece', amount: 3600, currency: 'INR', minOrderQty: 1 },
    specs: { 'Peltier Elements': '3× TEC', 'Cooling': 'Water-Cooled', 'Application': 'High-Performance Cooling' },
    inStock: true, isQuoteOnly: false,
    seo: { title: 'Triple Peltier Water Cooling Module | Hari Impex', description: 'Triple peltier module with water cooling integration.', keywords: ['water cooling module', 'peltier water cooling', 'triple peltier'] }
  },
];

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
const SERVER_URL = process.env.NEXT_PUBLIC_API_URL
  ? process.env.NEXT_PUBLIC_API_URL.replace(/\/api\/?$/, '')
  : 'http://localhost:5000';

function resolveImageUrl(url: string): string {
  if (!url) return '/uploads/fan-plus-grill-2.jpeg';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  // For /uploads/ paths, use them directly (served from public/uploads/)
  if (url.startsWith('/uploads')) return url;
  return url;
}

function mapPricing(p: any): PricingInfo {
  const raw = p.pricing;
  if (!raw) return { type: 'quote-only', currency: 'INR' };

  // If it already has the frontend shape (type + amount), pass through
  if (raw.type && (raw.amount !== undefined || raw.type === 'quote-only')) {
    return raw as PricingInfo;
  }

  // Map from DB shape: { price, salePrice, unit, minOrderQuantity }
  const price = raw.salePrice || raw.price;
  if (!price) {
    return { type: 'quote-only', currency: 'INR' };
  }

  let type: PricingInfo['type'] = 'per-unit';
  const unit = (raw.unit || '').toLowerCase();
  if (unit.includes('sqft') || unit.includes('sq ft') || unit.includes('square')) type = 'per-sqft';
  else if (unit.includes('piece') || unit.includes('pcs')) type = 'per-piece';
  else if (unit.includes('unit')) type = 'per-unit';

  return {
    type,
    amount: price,
    currency: 'INR',
    minOrderQty: raw.minOrderQuantity,
  };
}

export async function getCategories() {
  try {
    const res = await fetch(`${API_URL}/categories`, { cache: 'no-store' });
    if (!res.ok) return CATEGORIES;
    const data = await res.json();
    if (!data || data.length === 0) return CATEGORIES;
    return data.map((c: any) => ({
      ...c,
      id: c._id || c.id,
      heroImage: c.image ? resolveImageUrl(c.image) : '/uploads/fan-plus-grill-2.jpeg',
      shortDescription: c.description || c.shortDescription || '',
      icon: c.icon || 'Layout'
    }));
  } catch (error) {
    return CATEGORIES; // Fallback to static data on error
  }
}

export async function getCategoryBySlug(slug: string) {
  const categories = await getCategories();
  return categories.find((c: any) => c.slug === slug);
}

export async function getProductsByCategory(categorySlug: string) {
  const products = await getAllProducts();
  return products.filter((p: any) => p.categorySlug === categorySlug || p.subcategorySlug === categorySlug);
}

export async function getProductBySlug(slug: string) {
  const products = await getAllProducts();
  return products.find((p: any) => p.slug === slug);
}

export async function getProductsByDivision(division: Division) {
  const [products, categories] = await Promise.all([getAllProducts(), getCategories()]);
  // Build a set of category slugs that belong to the requested division
  const divisionCategorySlugs = new Set(
    categories
      .filter((c: any) => c.division === division)
      .map((c: any) => c.slug)
  );
  return products.filter((p: any) =>
    p.division === division || divisionCategorySlugs.has(p.categorySlug) || divisionCategorySlugs.has(p.subcategorySlug)
  );
}

export async function getAllProducts() {
  try {
    const res = await fetch(`${API_URL}/products`, { cache: 'no-store' });
    if (!res.ok) return PRODUCTS;
    const data = await res.json();
    if (!data || data.length === 0) return PRODUCTS;
    return data.map((p: any) => ({
      ...p,
      id: p._id || p.id,
      description: p.fullDescription || p.description || '',
      images: (p.images || []).map((img: string) => resolveImageUrl(img)),
      specs: p.specifications ? Object.fromEntries(p.specifications) : (p.specs || {}),
      pricing: mapPricing(p),
      inStock: p.stock !== 'Out of Stock',
      isQuoteOnly: p.isQuoteOnly ?? (!p.pricing?.price && !p.pricing?.salePrice),
      seo: p.seo || { title: `${p.name} | Hari Impex`, description: p.shortDescription || '', keywords: [] },
    }));
  } catch (error) {
    return PRODUCTS; // Fallback to static data on error
  }
}
