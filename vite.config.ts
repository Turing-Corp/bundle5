import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { codecovVitePlugin } from "@codecov/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    // Put the Codecov vite plugin after all other plugins
    codecovVitePlugin({
      enableBundleAnalysis: true,
      bundleName: "bundle5",
      uploadToken: process.env.CODECOV_TOKEN,
    }),
  ],
});
