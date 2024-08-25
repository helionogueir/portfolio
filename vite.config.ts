/// <reference types="vitest/config" />

import { defineConfig } from 'vite'
import i18next from './src/domain/locales/i18next'
import react from '@vitejs/plugin-react'
import vitestConfig from './src/configs/test/vitest/vitest.config.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src',
  test: vitestConfig,
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
    minify: 'esbuild',
  },
  resolve: { alias: { '@app': '' } },
  define: {
    'import.meta.env.APP_CHARSET': JSON.stringify(
      i18next.t('system:app.charset'),
    ),
    'import.meta.env.APP_LANG': JSON.stringify(i18next.language),
    'import.meta.env.APP_NAME': JSON.stringify(i18next.t('system:app.name')),
  },
})
