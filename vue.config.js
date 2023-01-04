const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: "Lists",
    short_name: "Lists",
    display: "standalone",
    themeColor: "#f6ca09",
    background_color: "#000000"
  },

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});
