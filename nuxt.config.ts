// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: ['@nuxtjs/i18n', '@nuxt/eslint', '@nuxt/content'],
  i18n: {
    // Module Options
    lazy: true,
    langDir: 'locales',

    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: 'English',
        file: 'en.yml'
      },
      {
        code: 'de',
        iso: 'de',
        name: 'Deutsch',
        file: 'de.yml'
      },
      {
        code: 'ru',
        iso: 'ru',
        name: 'Russian',
        file: 'ru.yml'
      }
    ],
    defaultLocale: 'en'
  }
  // content: {
  //   locales: ['en', 'de', 'ru'],
  //   defaultLocale: 'en',
  // }
})
