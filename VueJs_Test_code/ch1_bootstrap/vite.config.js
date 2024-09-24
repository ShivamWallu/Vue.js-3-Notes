import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0', // Allow access from external network
    port: 8080, // Default port
    strictPort: true, // Exit if port is already in use
    // Add this if you face an invalid host header issue:
    // hmr: {
    //   clientPort: 8080,
    // },
  }
});
