import path from "node:path";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

import packageJson from "./package.json";

export default defineConfig(({ mode = "development" }) => {
  const isDevMode = mode === "development";

  return {
    root: isDevMode ? "example" : "",
    plugins: [vue(), isDevMode && vueDevTools()].filter(Boolean),
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      lib: {
        entry: path.resolve(import.meta.dirname, "src/index.ts"),
        name: packageJson.name,
        fileName: (format) => `${packageJson.name}.${format}.js`,
        cssFilename: `${packageJson.name}.css`,
      },
      rollupOptions: {
        external: ["vue"],
        output: {
          globals: {
            vue: "Vue",
          },
        },
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
      root: ".",
      coverage: {
        provider: "v8",
        reporter: ["text", "json", "html"],
        include: ["src/**/*.{ts,vue}"],
        exclude: ["src/**/*.d.ts"],
      },
    },
  };
});
