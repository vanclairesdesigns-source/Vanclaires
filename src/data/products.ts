import { Product, Collection } from './types';

export const COLLECTIONS: Collection[] = [
  {
    id: 'c1',
    name: 'The Evening Edit',
    slug: 'evening',
    description: 'Seductive silhouettes for the nocturnal soul.',
    image: 'https://images.unsplash.com/photo-1539109132314-3475cd65e897?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'c2',
    name: 'Sculpt & Form',
    slug: 'sets',
    description: 'Minimalist sets that define the modern silhouette.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'c3',
    name: 'Eternal Essentials',
    slug: 'essentials',
    description: 'The foundation of a luxury wardrobe.',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=1200'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'AURELIA SILK GOWN',
    price: 1450000,
    category: 'Evening',
    description: 'A masterpiece of fluidity, the Aurelia Gown transitions with grace. Crafted from 100% weighted silk charmouse.',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800'
    ],
    colors: ['Noir', 'Champagne', 'Cream'],
    sizes: ['XS', 'S', 'M', 'L'],
    stock: 5,
    isNew: true,
    isBestSeller: true,
    material: '100% Mulberry Silk',
    care: 'Dry clean only',
    details: [
      'Bias cut for a natural stretch',
      'Adjustable delicate spaghetti straps',
      'Floor-length silhouette',
      'Fully lined with silk'
    ]
  },
  {
    id: 'p2',
    name: 'MONO SCULPT TOP',
    price: 320000,
    category: 'Sets',
    description: 'A structural feat. The Mono Sculpt Top uses heavy-weight ponte to create a corset-like silhouette without the restriction.',
    images: [
      'https://images.unsplash.com/photo-1539109132314-3475cd65e897?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1485230895905-ec17ba36b5bc?auto=format&fit=crop&q=80&w=800'
    ],
    colors: ['Noir', 'Bone'],
    sizes: ['XXS', 'XS', 'S', 'M', 'L'],
    stock: 12,
    isNew: true,
    material: '70% Viscose, 25% Nylon, 5% Elastane',
    care: 'Hand wash cold',
    details: [
      'Internal boning for support',
      'Asymmetric hemline',
      'Exposed back zip',
      'Double layered fabric'
    ]
  },
  {
    id: 'p3',
    name: 'CYRIL TAILORED TROUSER',
    price: 450000,
    category: 'Essentials',
    description: 'The ultimate power trouser. High-waisted with a wide leg that creates endless length.',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&q=80&w=800'
    ],
    colors: ['Noir', 'Sand', 'Slate'],
    sizes: ['0', '2', '4', '6', '8', '10'],
    stock: 8,
    isBestSeller: true,
    material: 'Virgin Wool Blend',
    care: 'Professional dry clean',
    details: [
      'Deep pleat detail',
      'Concealed fastening',
      'Belt loops',
      'Side slip pockets'
    ]
  },
  {
    id: 'p4',
    name: 'VALERIE MINIMALIST DRESS',
    price: 680000,
    category: 'Dresses',
    description: 'Femininity reclaimed. The Valerie Dress features a soft drape and mid-length cut for versatile elegance.',
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1518767761162-459a5a107590?auto=format&fit=crop&q=80&w=800'
    ],
    colors: ['Bone', 'Noir'],
    sizes: ['XS', 'S', 'M', 'L'],
    stock: 15,
    isSale: true,
    salePrice: 490000,
    material: 'Eco-Vero Viscose',
    care: 'Machine wash delicate',
    details: [
      'Open back detail',
      'Side slit',
      'Midi length',
      'Soft satin finish'
    ]
  },
  {
    id: 'p5',
    name: 'CLAIRE SILK CAMISOLE',
    price: 240000,
    category: 'Essentials',
    description: 'A delicate staple. The Claire Camisole is cut on the bias from our signature sand-washed silk.',
    images: [
      'https://images.unsplash.com/photo-1485230895905-ec17ba36b5bc?auto=format&fit=crop&q=80&w=800'
    ],
    colors: ['Cream', 'Noir', 'Champagne'],
    sizes: ['XS', 'S', 'M', 'L'],
    stock: 20,
    isNew: true,
    material: '100% Sand-washed Silk',
    care: 'Hand wash cold',
    details: [
      'Adjustable straps',
      'V-neckline',
      'Regular fit',
      'Hip length'
    ]
  },
  {
    id: 'p6',
    name: 'NOCTURNE BLAZER',
    price: 920000,
    category: 'Evening',
    description: 'Sharp tailoring meets evening elegance. The Nocturne Blazer features satin lapels and a structured shoulder.',
    images: [
      'https://images.unsplash.com/photo-1548272181-1a20e428d09e?auto=format&fit=crop&q=80&w=800'
    ],
    colors: ['Noir'],
    sizes: ['34', '36', '38', '40', '42'],
    stock: 4,
    isBestSeller: true,
    material: 'Wool Gabardine with Silk Satin lapels',
    care: 'Dry clean only',
    details: [
      'Single button closure',
      'Padded shoulders',
      'Internal pocket',
      'Satin peak lapel'
    ]
  }
];
