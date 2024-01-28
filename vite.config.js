//vite.config.js
import { resolve } from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
import * as packageJson from "./package.json";
// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ["src/component/"],
    }),
  ],
  build: {
    lib: {
      entry: resolve("src", "component/index.ts"),
      name: "react-revealing-text",
      formats: ["es", "umd"],
      fileName: (format) => `react-revealing-text.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}));
