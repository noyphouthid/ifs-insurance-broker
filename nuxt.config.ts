// nuxt.config.ts
export default defineNuxtConfig({
  css: ['vuetify/styles'], // เพิ่มไฟล์สไตล์ของ Vuetify
  build: {
    transpile: ['vuetify'], // ทำให้ Nuxt transpile Vuetify
  },
  modules: [],
  runtimeConfig: {
    public: {
      theme: 'light', // สามารถใช้กำหนดธีมได้
    }
  }
})
