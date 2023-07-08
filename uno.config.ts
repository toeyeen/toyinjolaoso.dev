import { defineConfig, presetIcons, presetWebFonts, presetUno } from 'unocss'
export default defineConfig({
  shortcuts: [
    {
      // border
      'border-base': 'border-$c-border',
      'border-dark': 'border-$c-border-dark',
      'border-strong': 'border-$c-text-base',
      'border-bg-base': 'border-$c-bg-base',
      'border-primary-light': 'border-$c-primary-light',

      // background
      'bg-main': 'bg-$c-bg-main',
      // 'bg-primary': 'bg-$c-primary',
      'bg-base': 'bg-$c-bg-base',
      'bg-border': 'bg-$c-border',
      'bg-active': 'bg-$c-bg-active',
      'bg-secondary': 'bg-$c-text-secondary',
      'bg-secondary-light': 'bg-$c-text-secondary-light',
      'bg-primary-light': 'bg-$c-primary-light',
      'bg-primary-dark': 'bg-$c-primary-dark',
      'bg-primary-fade': 'bg-$c-primary-fade',
      'bg-card': 'bg-$c-bg-card',
      'bg-code': 'bg-$c-bg-code',
      'bg-dm': 'bg-$c-bg-dm',
      'bg-brand-secondary': 'bg-$c-secondary',
      'bg-betslip': 'bg-$c-card',
      'bg-tertiary': 'bg-$c-tertiary',
      'bg-border-code': 'bg-$c-border-code',

      // text colors
      // 'text-primary': 'text-$c-primary',
      'text-tertiary': 'text-$c-tertiary',
      'text-base': 'text-$c-text-base',
      'text-base-lg': 'text-$c-text-base-light',
      'text-code': 'text-$c-text-code',
      'text-inverted': 'text-black',
      'text-secondary': 'text-$c-secondary',
      'text-secondary-light': 'text-$c-text-secondary-light',

      // buttons
      'btn-base': 'cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 hover:disabled:bg-none',
      'btn-solid': 'btn-base px-4 py-2 rounded text-$c-text-btn bg-$c-primary hover:bg-$c-primary-active',
      'btn-outline': 'btn-base px-4 py-2 rounded text-$c-primary border border-$c-primary hover:bg-$c-primary hover:text-inverted',
      'btn-text': 'btn-base px-4 py-2 text-$c-primary hover:text-$c-primary-active',
      'btn-action-icon': 'btn-base hover:bg-active rounded-full h9 w9 flex items-center justify-center disabled:bg-transparent disabled:text-$c-text-secondary',
      'btn-danger': 'btn-base px-4 py-2 rounded text-white bg-$c-danger hover:bg-$c-danger-active',

      // input
      'input-base-focus': 'focus:outline-none focus:border-$c-primary',
      'input-base-disabled': 'disabled:pointer-events-none disabled:bg-gray-500/5 disabled:text-gray-500/50',
      'input-base': 'p2 rounded w-full bg-transparent border border-dark input-base-focus input-base-disabled',
      'input-error': 'border-$c-error focus:(outline-offset-0 outline-$c-error outline-1px)',

      'select-settings': 'p3 border border-base rounded w-full block bg-base',

      // link
      'text-link-rounded': 'focus:outline-none focus:ring-(2 primary inset) hover:bg-active rounded md:rounded-full px2 mx--2',

      // utils
      'ellipse': 'whitespace-nowrap overflow-hidden text-ellipsis',
      'flex-center': 'items-center justify-center',
      'flex-v-center': 'items-center',
      'flex-h-center': 'justify-center',
      'bg-hover-overflow': 'relative z-0 transition-colors duration-250 after-content-empty after:(absolute inset--4px bg-transparent rounded-full z--1 transition-colors duration-250) hover:after:(bg-active)',
      'title': 'bg-white text-black inline-block pt-2px pr-12px pl-3px font-bold text-15px '

      // Shadow

    },
    [/^btn-solid-(.*)$/, ([, name]) => `btn-base px-4 h-10 rounded text-$c-text-btn bg-$c-${name} hover:opacity-90 `],
    [/^btn-outline-(.*)$/, ([, name]) => `btn-base px-4 h-10 rounded text-$c-${name} border border-$c-${name} hover:bg-$c-${name} hover:text-inverted `],
    [/^(.*)-pry$/, ([, name]) => `${name}-$c-primary`],
    [/^(.*)-pry-lg$/, ([, name]) => `${name}-$c-primary-light`],
    [/^(.*)-sec$/, ([, name]) => `${name}-$c-secondary`],
    [/^(.*)-mdl$/, ([, name]) => `${name}-$c-modal`],

  ],
  presets: [
    // Reset to default css,
    presetUno(),
    presetIcons({
      collections: {
        custom: {
          logo: '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.25" y="1.25" width="12.5" height="12.5" rx="4.75" stroke="#FCB331" stroke-width="2.5"></rect></svg>',
        },
      },
      customizations: {
        transform(svg, collection, icon) {
          // do not apply fill to this icons on this collection
          if (collection === 'custom')
            return svg.replace(/#FCB331/, 'currentColor')
        },
      },
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        rubik: [
          {
            name: 'Rubik',
            weights: ['100', '200', '300', '400', '500', '600', '700', '800'],
            italic: true,
          },
        ],
        RedHatMono: [
          {
            name: 'Red Hat Mono',
            weights: ['100', '200', '300', '400', '500', '600', '700', '800'],
            italic: true,
          },
        ],
      },
    }),
  ],
})
