// src/data/products.js - CORRECTED AND UPDATED

export const products = [
  // UPDATED: The new, detailed object for Ember & Dusk
  {
    id: 'ghorpha_01',
    name: 'Ember & Dusk',
    codename: 'NOIR_918',
    brand: 'Alchemique',
    collection: 'Signatures', // Note: We use 'collection' now, not 'category'
    category: 'men', // Kept for backward compatibility with any old code, can be removed later
    description: 'A bold fusion of smoked birchwood and crushed peppercorn, for a presence that lingers long after you’ve left the room.',
    price: '120',
    imageUrl: '/products/ember_dusk.jpg',
    
    // --- The Alchemical Profile ---
    scent_family: 'Woody',
    concentration: 'Extrait de Parfum',
    
    // --- The Sensory Data ---
    notes: {
      top: ['Black Peppercorn', 'Saffron'],
      middle: ['Smoked Birchwood', 'Leather', 'Incense'],
      base: ['Oud', 'Vetiver', 'Black Musk']
    },

    // --- The Psychographic Profile ---
    archetype: ['The Leader', 'The Maverick', 'Enigmatic'],
    setting: ['Nocturnal', 'Ceremonial']
  },

  // --- The rest of the products remain in their original structure for now ---
  {
    id: 'ghorpha_02',
    name: 'Velvet Haze',
    brand: 'Noctua',
    category: 'women',
    imageUrl: '/products/velvet_haze.jpg',
    description: 'Night-blooming jasmine wrapped in a cloak of dark vanilla.',
    price: '135',
  },
  {
    id: 'ghorpha_03',
    name: 'Cipher',
    brand: 'Argent',
    category: 'unisex',
    imageUrl: '/products/cipher.jpg',
    description: 'An enigmatic blend of cold metal, ink, and rare papyrus.',
    price: '150',
  },
  {
    id: 'ghorpha_04',
    name: 'Oracle',
    brand: 'Alchemique',
    category: 'unisex',
    imageUrl: '/products/oracle.jpg',
    description: 'Sacred incense, ancient leather, and a whisper of salt.',
    price: '155',
  },
  {
    id: 'ghorpha_05',
    name: 'Solar Flare',
    brand: 'Argent',
    category: 'men',
    imageUrl: '/products/solar_flare.jpg',
    description: 'Bright citrus notes forged with the heat of ginger and saffron.',
    price: '110',
  },
  {
    id: 'ghorpha_06',
    name: 'Moonpetal',
    brand: 'Noctua',
    category: 'women',
    imageUrl: '/products/moonpetal.jpg',
    description: 'A delicate arrangement of white gardenia and cool, dewy moss.',
    price: '130',
  }
];