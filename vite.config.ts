/// <reference types="vitest/config" />

import configs from './configs.json'
import { defineConfig } from 'vite'
import i18next from './src/domain/locales/i18next'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
    minify: 'esbuild',
  },
  resolve: { alias: { '@app': '' } },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/configs/test/vitest.setup.ts'],
  },
  define: {
    'import.meta.env.APP_DEFAULT_CHARSET': JSON.stringify(
      configs.APP_DEFAULT_CHARSET,
    ),
    'import.meta.env.APP_DEFAULT_LANG': JSON.stringify(i18next.language),
    'import.meta.env.APP_NAME': JSON.stringify(i18next.t('common:app.title')),
  },
})
