import { defineConfig } from 'astro/config'
import image from '@astrojs/image';

export default defineConfig({
  site: 'https://www.innovativeeyecare.com.au',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          includePaths: ['./src/styles'],
          additionalData(source, fp) {
            if (RegExp(`(${['_variables', '_defaults', '_mixins', '_animations'].join('|')})`).test(fp)) return source
            return `@use 'variables.scss' as var;\n@use 'mixins.scss'; ${source}`
          },
        },
      },
    },
    build: {
      cssCodeSplit: true,
    },
  },
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })],
})