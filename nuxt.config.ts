// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@nuxt/eslint"],
  i18n: {
    // Module Options
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en",
        iso: "en",
        name: "English",
        file: "en.JSON",
      },
      {
        code: "ru",
        iso: "ru",
        name: "Russian",
        file: "ru.JSON",
      },
    ],
    defaultLocale: "en",
  },
});
