import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimizar el tamaño del bundle
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar React en su propio chunk
          'react-vendor': ['react', 'react-dom'],
        },
        // Optimizar nombres de archivos para mejor caching
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return `assets/[name]-[hash][extname]`;
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          } else if (/woff2?|ttf|eot/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    // Comprimir assets con esbuild (más rápido)
    minify: 'esbuild',
    // Configurar límites de advertencia de chunks
    chunkSizeWarningLimit: 1000,
    // Generar sourcemaps solo para debugging si es necesario
    sourcemap: false,
    // CSS code splitting
    cssCodeSplit: true,
    // Optimizar assets
    assetsInlineLimit: 4096, // Inline assets < 4kb
  },
  // Optimizar dependencias
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  // Configuración del servidor de desarrollo
  server: {
    // Precargar módulos para desarrollo más rápido
    warmup: {
      clientFiles: ['./src/App.tsx', './src/main.tsx'],
    },
  },
})
