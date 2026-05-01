export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'Dresses' | 'Sets' | 'Evening' | 'Essentials' | 'Accessories';
  images: string[];
  colors: string[];
  sizes: string[];
  details: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  isSale?: boolean;
  salePrice?: number;
  stock: number;
  material: string;
  care: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}

export interface CartItem extends Product {
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}
