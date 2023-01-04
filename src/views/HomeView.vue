<template>
  <h1>Il!? Hello, World!</h1>
  <v-btn prepend-icon="mdi-vuetify" variant="tonal"> Button </v-btn>
  <theme-toggle />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ThemeToggle from "@/components/ThemeToggle.vue";

export default defineComponent({
  name: "HomeView",
  components: { ThemeToggle },
});
</script>

<style>
h1 {
  font-size: 70px;
}
</style>
