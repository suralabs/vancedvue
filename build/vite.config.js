import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';
import { resolve } from 'path';

const { VANCEDVUE_ENTRY, VANCEDVUE_FILENAME } = process.env;

console.log('env:', VANCEDVUE_ENTRY, VANCEDVUE_FILENAME);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, `../src/${VANCEDVUE_ENTRY || 'index.js'}`),
      name: VANCEDVUE_ENTRY ? undefined : 'vancedvue',
      formats: VANCEDVUE_ENTRY ? ['es'] : ['cjs', 'es', 'iife', 'umd'],
      fileName: (format) =>
        VANCEDVUE_FILENAME ? VANCEDVUE_FILENAME : `vancedvue.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
