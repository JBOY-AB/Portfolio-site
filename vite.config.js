import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true, // allow connections from local network
    port: 5173,
    hmr: {
      protocol: 'ws',   // use WebSocket for HMR
      host: 'localhost', // change to your local IP if needed
      port: 5173,
    },
  },
});
