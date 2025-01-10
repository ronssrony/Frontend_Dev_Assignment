import { defineStore } from 'pinia'

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: JSON.parse(localStorage.getItem("cart") || "[]"),
  }),
  actions: {
    addToCart(product) {
      const existingItem = this.cart.find((item) => item.id === product.id);
      if (!existingItem) {
        this.cart.push(product);
        this.saveCartToLocalStorage();
        console.log("Product added to cart!");
      } else {
        console.log("Product already exists in the cart!");
      }
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
      this.saveCartToLocalStorage();
    },
    clearCart() {
      this.cart = [];
      this.saveCartToLocalStorage();
    },
    saveCartToLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    loadCartFromLocalStorage() {
      this.cart = JSON.parse(localStorage.getItem("cart") || "[]");
    },
  },
});
