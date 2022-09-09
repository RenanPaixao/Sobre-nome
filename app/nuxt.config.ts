import { defineNuxtConfig } from 'nuxt'
import { fileURLToPath } from 'url'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@qvant/qui-max/styles'],
  build: {
    transpile: ['@qvant/qui-max']
  },
  meta: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css'
      }
    ]
  },
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url))
  }
})
