import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import {viteStaticCopy} from 'vite-plugin-static-copy';

// https://vite.dev/config/
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        { src: "images", dest: "" },
        { src: "fonts", dest: "" },
        { src: "js", dest: "" },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        menu: resolve(__dirname, 'menu.html'),
      }
    }
  }
});
