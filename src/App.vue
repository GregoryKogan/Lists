<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTheme } from "vuetify";
import { usePocketbaseStore } from "@/stores/pocketbase";
import PocketBase from "pocketbase";

export default defineComponent({
  name: "App",

  setup() {
    const store = usePocketbaseStore();
    return { store };
  },

  created() {
    this.loadTheme();
    this.connectToPocketbase();
  },

  methods: {
    connectToPocketbase() {
      const pb = new PocketBase("https://gregorykogan.tw1.su");
      if (pb == null) {
        console.error("Can't connect to Pocketbase!");
      }
      this.store.setPb(pb);
    },
    loadTheme() {
      const theme = useTheme();
      if (localStorage.theme) theme.global.name.value = localStorage.theme;
    },
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

#app {
  font-family: "Inter", sans-serif;
}

::selection {
  background: rgba(var(--v-theme-primary), 0.7); /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: rgba(var(--v-theme-primary), 0.7); /* Gecko Browsers */
}
</style>
