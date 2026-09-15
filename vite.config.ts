import { fileURLToPath } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

const srcDir = fileURLToPath(new URL("./src", import.meta.url));

/*
 * Plugin order matters: tailwind has to run before tanstackStart generates the
 * route tree and server entry, and the React plugin runs last so it sees the
 * already-transformed output.
 */
export default defineConfig(({ command }) => ({
  css: { transformer: "lightningcss" },

  resolve: {
    // Resolves the `@/*` paths declared in tsconfig.json. Native to Vite 8 —
    // the vite-tsconfig-paths plugin is no longer needed.
    tsconfigPaths: true,
    alias: { "@": srcDir },
    // React and the TanStack packages must be single instances — a duplicate
    // copy pulled in through a transitive dep breaks hooks and query context.
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },

  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-dom/client",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
    ],
    ignoreOutdatedRequests: true,
  },

  server: { host: "::", port: 8080 },

  plugins: [
    tailwindcss(),
    tanstackStart({
      // Route TanStack Start's bundled server entry through src/server.ts, our
      // SSR error wrapper.
      server: { entry: "server" },
      // Fail the build instead of silently shipping server-only modules to the
      // browser bundle.
      importProtection: {
        behavior: "error",
        client: { files: ["**/server/**"], specifiers: ["server-only"] },
      },
    }),
    // Deploy plugin: build-only, so `vite dev` never pays for it.
    ...(command === "build" ? [nitro({ defaultPreset: "render-com" })] : []),
    viteReact(),
  ],
}));
