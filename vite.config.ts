/// <reference types="vitest/config" />

import config from './src/configs.json'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import vitestConfig from './.vitest/vitest.config.json'

const rootPath = resolve(__dirname, '.')
const sourcePath = resolve(rootPath, './src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: sourcePath,
  test: vitestConfig,
  build: {
    outDir: resolve(rootPath, './dist'),
    emptyOutDir: true,
    sourcemap: true,
    minify: 'esbuild',
  },
  resolve: { alias: { '@app': sourcePath } },
  define: {
    'import.meta.env.APP_CONFIG_CHARSET': JSON.stringify(config.app.charset),
    'import.meta.env.APP_CONFIG_LANG': JSON.stringify(config.app.lang),
    'import.meta.env.APP_CONFIG_NAME': JSON.stringify(config.app.name),
  },
})
