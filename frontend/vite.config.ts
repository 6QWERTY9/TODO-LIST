import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

const projectRoot = path.resolve(__dirname, './'); 
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(projectRoot, 'src'),
      // Алиасы для слоев FSD:
      '@app': path.resolve(projectRoot, 'src/app'),
      '@pages': path.resolve(projectRoot, 'src/pages'),
      '@widgets': path.resolve(projectRoot, 'src/widgets'),
      '@features': path.resolve(projectRoot, 'src/features'),
      '@entities': path.resolve(projectRoot, 'src/entities'),
      '@shared': path.resolve(projectRoot, 'src/shared'),
    }
  }
})
