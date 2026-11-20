export type Project = {
  slug: string;
  name: string;
  url: string;
  domain: string;
  category: string;
  description: string;
  accent: 'forest' | 'clay';
  screenshot?: string;
  screenshotAlt?: string;
  mobileScreenshot?: string;
};

// Add another object here to publish another project card.
// Only include verified descriptions and technologies for each project.
export const projects: Project[] = [
  {
    slug: 'vendall', screenshot: '/projects/vendall.webp', mobileScreenshot: '/projects/vendall-mobile.webp', name: 'Vendall',
    url: 'https://vendall.vercel.app/', domain: 'vendall.vercel.app',
    category: 'WEB APPLICATION',
    description: 'A business platform bringing storefronts, stock, products, customers, and business numbers together.',
    accent: 'clay',
  },
  {
    slug: 'em-gadgets', screenshot: '/projects/em-gadgets.webp', mobileScreenshot: '/projects/em-gadgets-mobile.webp', name: 'EM Gadgets',
    url: 'https://emgadgets-zeta.vercel.app/', domain: 'emgadgets-zeta.vercel.app',
    category: 'BUSINESS WEBSITE',
    description: 'An electronics storefront for discovering phones, laptops, accessories, and new product launches.',
    accent: 'forest',
  },
  {
    slug: 'connect2wed',
    screenshot: '/projects/connect2wed-home.webp',
    screenshotAlt: 'Connect2Wed homepage with member photos and details anonymized',
    name: 'Connect2Wed',
    url: 'https://connect2wed.com',
    domain: 'connect2wed.com',
    category: 'CONNECTION PLATFORM',
    description: 'Intentional connections through profile discovery, private messaging, and subscription plans.',
    accent: 'forest',
  },
  {
    slug: 'mirage', screenshot: '/projects/mirage.webp', mobileScreenshot: '/projects/mirage-mobile.webp', name: 'Mirage Condominiums',
    url: 'https://mirage-sable-five.vercel.app/', domain: 'mirage-sable-five.vercel.app',
    category: 'PROPERTY SHOWCASE',
    description: 'An interactive property showcase with floor exploration and building information for Mirage Condominiums at Eko Atlantic.',
    accent: 'forest',
  },
  {
    slug: 'bevexexpress',
    screenshot: '/projects/bevexexpress.webp',
    screenshotAlt: 'BevEX Express homepage featuring its NYC building code violation services',
    name: 'Bevex Express',
    url: 'https://bevexexpress.com',
    domain: 'bevexexpress.com',
    category: 'BUSINESS WEBSITE',
    description: 'A clear path to building compliance, architectural planning, and violation resolution in NYC.',
    accent: 'forest',
  },
  {
    slug: 'chioma-okoli-art',
    screenshot: '/projects/chioma-okoli-art.webp',
    screenshotAlt: 'Chioma Okoli Art homepage showcasing the artist and her colourful artworks',
    name: 'Chioma Okoli Art',
    url: 'https://chiomaokoliart.com',
    domain: 'chiomaokoliart.com',
    category: 'ARTIST PORTFOLIO',
    description: 'An artist’s work, practice, and material research brought together in a considered digital portfolio.',
    accent: 'clay',
  },
  {
    slug: 'famzik-auto-lights', screenshot: '/projects/famzik-auto-lights.webp', mobileScreenshot: '/projects/famzik-auto-lights-mobile.webp', name: 'Famzik Auto Lights',
    url: 'https://famzikautolights.com.ng', domain: 'famzikautolights.com.ng',
    category: 'BUSINESS WEBSITE',
    description: 'An automotive lighting catalogue connecting retailers, dealers, and installers with products and supply enquiries.',
    accent: 'clay',
  },
  {
    slug: 'ao-associates', screenshot: '/projects/ao-associates.webp', mobileScreenshot: '/projects/ao-associates-mobile.webp', name: 'AO Associates',
    url: 'https://aoassociates.vercel.app/', domain: 'aoassociates.vercel.app',
    category: 'BUSINESS WEBSITE',
    description: 'An architecture portfolio presenting environmentally responsible design, planning, and projects.',
    accent: 'forest',
  },
  {
    slug: 'growe', screenshot: '/projects/growe.webp', mobileScreenshot: '/projects/growe-mobile.webp', name: 'Growe',
    url: 'https://growe-admin-u8hs.vercel.app/', domain: 'growe-admin-u8hs.vercel.app',
    category: 'WEB APPLICATION',
    description: 'An administration dashboard for reviewing users, investments, savings, revenue, and activity.',
    accent: 'clay',
  },
  {
    slug: 'the-ceo-app', screenshot: '/projects/the-ceo-app.webp', mobileScreenshot: '/projects/the-ceo-app-mobile.webp', name: 'TheCEOApp',
    url: 'https://theceoapp.com', domain: 'theceoapp.com',
    category: 'BUSINESS PLATFORM',
    description: 'A business platform bringing sales, receipts, stock, and payments into one experience.',
    accent: 'forest',
  },
  {
    slug: 'carecircle',
    name: 'CareCircle',
    url: 'https://carecircle.com.ng/',
    domain: 'carecircle.com.ng',
    category: 'CARE COORDINATION PLATFORM',
    description: 'A home-care coordination workspace for tracking medications, appointments, care tasks, team contacts, and handover notes.',
    screenshot: '/projects/carecircle.webp',
    screenshotAlt: 'CareCircle sample dashboard with fictional care data, medication tracking, appointments, and care tasks',
    accent: 'forest',
  },
];
