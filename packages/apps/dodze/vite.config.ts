import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'DEV_DODZE',
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
    reportCompressedSize: false,
  },
  plugins: [react({ tsDecorators: true })],
});
