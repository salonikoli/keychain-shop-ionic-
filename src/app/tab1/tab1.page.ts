import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonBadge,
  IonIcon,
} from '@ionic/angular/standalone';
import { Product, ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { addCircle, cart, informationCircle } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonBadge,
    IonIcon,
  ],
})
export class Tab1Page implements OnInit {
  products: Product[] = [];
  popularProducts: Product[] = [];
  selectedCategory: string = 'all';
  cartCount: number = 0;
  showToast: boolean = false;
  toastMessage: string = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private toastController: ToastController
  ) {
    addIcons({ addCircle, cart, informationCircle });
  }

  ngOnInit() {
    this.loadProducts();
    this.updateCartCount();
  }

  loadProducts() {
    this.products = this.productService.getAllProducts();
    this.popularProducts = this.productService.getPopularProducts();
  }

  async addToCart(product: Product) {
    this.cartService.addToCart(product, 1);
    this.updateCartCount();

    // Show success toast
    const toast = await this.toastController.create({
      message: `✓ ${product.name} added to cart!`,
      duration: 2000,
      position: 'bottom',
      color: 'success',
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
        },
      ],
    });
    await toast.present();
  }

  updateCartCount() {
    this.cartService.cart$.subscribe(() => {
      this.cartCount = this.cartService.getCartCount();
    });
  }
}
