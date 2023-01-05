import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), eslint()],
  esbuild: {  
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
  define: {
    VITE_BASE_API_URI: JSON.stringify('https://localhost:5173'),
  },
});