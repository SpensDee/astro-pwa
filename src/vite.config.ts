import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  css: {
    preprocessorOptions: {
      plugins: [imagetools()],
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
});
