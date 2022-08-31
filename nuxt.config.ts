import { defineNuxtConfig } from 'nuxt'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  css: ['@/assets/style/css/main.css'],
  // buildModules: [
  //   [
  //     '@nuxtjs/google-fonts',
  //     {
  //       families: {
  //         Quicksand: true,
  //         'Qwitcher+Grypen': true,
  //         subsets: ['latin'],
  //         display: 'swap',
  //         prefetch: false,
  //         preconnect: false,
  //         preload: false,
  //         download: true,
  //         base64: false,
  //       },
  //     },
  //   ],
  // ],
  vite: {
    plugins: [
      Components({
        resolvers: [
          IconsResolver({
            prefix: 'i',
          }),
        ],
      }),
      Icons(),
    ],
  },
})
