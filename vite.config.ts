import Congigs from './configs.json'
import { defineConfig } from 'vite'
import i18next from './src/domain/locales/i18next'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    /* Default Paths */
    alias: {
      '@app': '/src',
    }
  },
  define: {
    ...Congigs.viteDefines,
    'import.meta.env.APP_NAME': JSON.stringify(i18next.t('common:app.title')),
    'import.meta.env.APP_DEFAULT_LANG': i18next.language
  }
})
