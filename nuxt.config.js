export default {
  head: {
    title: "sdo",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: [
    "bootstrap/dist/css/bootstrap.css",
    "bootstrap-vue/dist/bootstrap-vue.css",
    "assets/style/main.scss",
  ],

  plugins: [
    {
      src: "~plugins/bootstrap.js",
      ssr: true,
    },
  ],

  components: true,

  buildModules: ["@nuxt/typescript-build"],

  modules: ["@nuxtjs/axios"],
  axios: {
    proxy: true,
  },
  proxy: {
    "/api/": process.env.BASE_URL,
  },

  build: {
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue|pug)$/,
          loader: "pug-plain-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
