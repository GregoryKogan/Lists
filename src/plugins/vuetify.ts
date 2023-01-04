// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify, ThemeDefinition } from "vuetify";

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#f6ae29",
    background: "#ffffff",
    "on-background": "#474747",
  },
};

const myCustomDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#f0ab1d",
    background: "#1d1d1d",
    "on-background": "#d4d4d4",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
      myCustomDarkTheme,
    },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
