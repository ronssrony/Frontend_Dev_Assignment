import { defineStore } from 'pinia'

export const useFavStore = defineStore("favourites", {
  state: () => ({
    fav: JSON.parse(localStorage.getItem("fav") || "[]"),
  }),
  actions: {
    addToFav(product) {
      const existingItem = this.fav.find((item) => item.id === product.id);
      if (!existingItem) {
        this.fav.push(product);
        this.saveFavToLocalStorage();
        console.log("Product added to fav!");
      } else {
        console.log("Product already exists in the fav!");
      }
    },
    removeFromFav(productId) {
      this.fav = this.fav.filter((item) => item.id !== productId);
      this.saveFavToLocalStorage();
    },
    clearFav() {
      this.fav = [];
      this.saveFavToLocalStorage();
    },
    saveFavToLocalStorage() {
      localStorage.setItem("fav", JSON.stringify(this.fav));
    },
    loadFavFromLocalStorage() {
      this.fav = JSON.parse(localStorage.getItem("fav") || "[]");
    },
  },
});
