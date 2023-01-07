<template>
  <v-dialog v-model="dialog" transition="dialog-bottom-transition" contained>
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        variant="tonal"
        color="error"
        append-icon="mdi-logout"
        >Log out</v-btn
      >
    </template>

    <v-card>
      <v-card-title>Are you sure you want to log out?</v-card-title>
      <v-card-actions>
        <v-btn size="large" color="error" @click="logOut">Yes</v-btn>
        <v-spacer></v-spacer>
        <v-btn size="large" color="primary" @click="dialog = false">No</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePocketbaseStore } from "@/stores/pocketbase";

export default defineComponent({
  name: "LogOutButton",
  data: () => ({
    dialog: false,
  }),
  setup() {
    const store = usePocketbaseStore();
    return { store };
  },
  methods: {
    logOut() {
      this.dialog = false;
      if (!this.store.getPb) {
        console.error("Can't get Pocketbase instance from storage");
        return;
      }
      this.store.getPb.authStore.clear();
    },
  },
});
</script>
