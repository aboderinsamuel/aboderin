import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // allows access from other devices
    port: 5173, // specify port if needed
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
