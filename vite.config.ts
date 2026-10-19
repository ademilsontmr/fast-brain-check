import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

/** Evita crossorigin em CSS/JS same-origin (Safari pode falhar o estilo se CORS falhar). */
function stripAssetCrossorigin() {
  return {
    name: "strip-asset-crossorigin",
    transformIndexHtml(html: string) {
      return html.replace(/\s+crossorigin(?:=["'][^"']*["'])?/gi, "");
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8788",
        changeOrigin: true,
      },
    },
  },
  plugins: [
    react(),
    stripAssetCrossorigin(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-radix": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-tabs",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-accordion",
          ],
          "vendor-charts": ["recharts"],
        },
      },
    },
  },
}));
