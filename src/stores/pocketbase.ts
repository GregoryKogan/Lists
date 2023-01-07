import { defineStore } from "pinia";
import PocketBase, { Admin, Record } from "pocketbase";

export const usePocketbaseStore = defineStore("pocketbase", {
  state: () => ({
    pb: null as PocketBase | null,
    currentUser: null as Record | Admin | null,
  }),
  getters: {
    getPb: (state) => state.pb,
    getCurrentUser: (state) => state.currentUser,
  },
  actions: {
    setPb(pb: PocketBase) {
      this.pb = pb;
      this.currentUser = pb.authStore.model;
      pb.authStore.onChange((auth) => {
        console.log("authStore changed", auth);
        this.updateCurrentUser();
      });
    },
    updateCurrentUser() {
      if (this.pb === null) {
        console.error("Pocketbase is null");
        return;
      }
      this.currentUser = this.pb.authStore.model;
    },
  },
});
