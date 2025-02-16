// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0',
    },
    title: 'Sips and Sparks'
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@bootstrap-vue-next/nuxt'
  ],

  css: [
    '@/assets/scss/global.scss',
    '@/assets/scss/global/buttons.scss',
    '@/assets/scss/global/inputs.scss',
    'bootstrap/dist/css/bootstrap.min.css',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          
          api: 'modern',
          silenceDeprecations: ['mixed-decls'],
          additionalData: `@use "~/assets/scss/_media-queries.scss" as *; 
                            @use "~/assets/scss/_colors.scss" as *;
                            @use "~/assets/scss/_fonts.scss" as *;`,
        },
      },
    },
  },
  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**'
    ]
  }
})
