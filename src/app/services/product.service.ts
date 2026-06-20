import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  images?: string[];
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Minimalist Leather Keychain',
      description: 'Premium leather keychain with elegant minimalist design',
      price: 12.99,
      image: 'assets/keychain01.avif',
      images: ['assets/keychain01.avif', 'assets/keychain02.avif', 'assets/keychain03.avif'],
      category: 'Leather',
    },
    {
      id: 2,
      name: 'Stainless Steel Keyring',
      description: 'Durable stainless steel keyring perfect for everyday use',
      price: 8.99,
      image: 'assets/keychain02.avif',
      images: ['assets/keychain01.avif', 'assets/keychain02.avif', 'assets/keychain03.avif'],
      category: 'Metal',
    },
    {
      id: 3,
      name: 'Wooden Carved Keychain',
      description: 'Beautiful handcrafted wooden keychain with custom design',
      price: 14.99,
      image: 'assets/keychain03.avif',
      images: ['assets/keychain01.avif', 'assets/keychain02.avif', 'assets/keychain03.avif'],
      category: 'Wood',
    },
    {
      id: 4,
      name: 'Neon Glow Keychain',
      description: 'Fun and colorful keychain that glows in the dark',
      price: 9.99,
      image: 'assets/keychain01.avif',
      images: ['assets/keychain01.avif', 'assets/keychain02.avif', 'assets/keychain03.avif'],
      category: 'Novelty',
    },
    {
      id: 5,
      name: 'Vintage Brass Keychain',
      description: 'Vintage-style brass keychain with antique finish',
      price: 11.99,
      image: 'assets/keychain02.avif',
      images: ['assets/keychain01.avif', 'assets/keychain02.avif', 'assets/keychain03.avif'],
      category: 'Vintage',
    },
    {
      id: 6,
      name: 'Colorful Acrylic Keychain',
      description: 'Lightweight acrylic keychain in vibrant colors',
      price: 7.99,
      image: 'assets/keychain03.avif',
      images: ['assets/keychain01.avif', 'assets/keychain02.avif', 'assets/keychain03.avif'],
      category: 'Acrylic',
    },
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.products);
  public products$ = this.productsSubject.asObservable();

  constructor() {}

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((p) => p.id === id);
  }

  getPopularProducts(): Product[] {
    return this.products.slice(0, 4);
  }
}
