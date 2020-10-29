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

  css: [],

  plugins: [
    {
      src: "~plugins/bootstrap.js",
      ssr: true,
    },
  ],

  components: true,

  buildModules: ["@nuxt/typescript-build"],

  modules: [],

  build: {},
};
