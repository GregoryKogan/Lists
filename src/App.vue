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

export default defineComponent({
  name: "App",

  mounted() {
    const theme = useTheme();
    if (localStorage.theme) theme.global.name.value = localStorage.theme;
  },

  data() {
    return {
      //
    };
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
