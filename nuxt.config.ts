// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content'
  ],
  // @nuxtjs/color-mode
  colorMode: {
    classSuffix: ''
  },
  // @nuxt/content
  content: {
    // https://content.nuxt.com/get-started/configuration#highlight
    // https://github.com/shikijs/textmate-grammars-themes/tree/main/packages/tm-themes
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'min-light',
        // Theme used if `html.dark`
        dark: 'min-dark'
      }
    }
  }
})
