<template>
  <v-switch
    v-model="isDark"
    :label="isDark ? 'Dark theme' : 'Light theme'"
    inset
    color="primary"
    @change="toggleTheme"
  >
  </v-switch>
</template>

<script lang="ts">
import { useTheme } from "vuetify";

export default {
  name: "ThemeToggle",

  data: () => ({
    isDark: localStorage.theme == "myCustomDarkTheme",
  }),

  watch: {
    isDark(newVal: boolean) {
      localStorage.theme = newVal ? "myCustomDarkTheme" : "myCustomLightTheme";
    },
  },

  setup() {
    const theme = useTheme();

    return {
      theme,
      toggleTheme: () => {
        theme.global.name.value = theme.global.current.value.dark
          ? "myCustomLightTheme"
          : "myCustomDarkTheme";
        localStorage.theme = theme.global.name.value;
      },
    };
  },
};
</script>
