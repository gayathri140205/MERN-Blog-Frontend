import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // eslint-disable-next-line no-undef
    port: process.env.PORT || 5173, // Use the port Render provides, fall back to 5173 locally
    host: true,  // This binds the server to 0.0.0.0
  },
  build: {
    // Increase the timeout duration for the build
    timeout: 180000, // Example: 3 minutes
  },
});
