// nuxt.config.ts
export default defineNuxtConfig({
  // เพิ่มไฟล์สไตล์ของ Vuetify
  css: ['vuetify/styles'],

  build: {
    transpile: ['vuetify'], // ทำให้ Nuxt transpile Vuetify
  },

  modules: [],

  runtimeConfig: {
    public: {
      theme: 'light', // สามารถใช้กำหนดธีมได้
    }
  },

  compatibilityDate: '2025-02-04'
})