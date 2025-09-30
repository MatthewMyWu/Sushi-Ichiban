import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import {viteStaticCopy} from 'vite-plugin-static-copy';

// https://vite.dev/config/
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
});
