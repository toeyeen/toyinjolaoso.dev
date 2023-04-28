import { defineNuxtConfig } from 'nuxt'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'


export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: './static/favicon.ico' },
      ],
    },
  },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@unocss/nuxt',],
  css: ['@/assets/style/css/markdown.css', '@/assets/style/css/main.css'],
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

  content: {
    markdown: {
      // @ts-expect-error
      anchorLinks: {
        depth: 0, exclude: [2, 3, 4, 5, 6]
      }
    }
  }
})
