/// <reference types="vitest/config" />

import configs from './configs.json'
import { defineConfig } from 'vite'
import i18next from './src/domain/locales/i18next'
import react from '@vitejs/plugin-react'
import vitestConfig from './src/configs/test/vitest.config.json'

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
    'import.meta.env.APP_DEFAULT_CHARSET': JSON.stringify(
      configs.APP_DEFAULT_CHARSET,
    ),
    'import.meta.env.APP_DEFAULT_LANG': JSON.stringify(i18next.language),
    'import.meta.env.APP_NAME': JSON.stringify(i18next.t('common:app.title')),
  },
})
