import Qui from '@qvant/qui-max'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.use(Qui)
})
