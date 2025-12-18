import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import devtoolsJson from 'vite-plugin-devtools-json'
import { nitroV2Plugin } from '@tanstack/nitro-v2-vite-plugin'
import netlify from '@netlify/vite-plugin-tanstack-start'

const forSites =
  process.env?.FOR_SITES === 'true' ||
  Boolean(process.env?.VERCEL) ||
  Boolean(process.env?.NETLIFY)

const config = defineConfig({
  plugins: [
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    netlify(),
    forSites &&
    nitroV2Plugin({
      compatibilityDate: '2025-10-08',
      preset: process.env.NETLIFY ? 'netlify' : process.env.VERCEL ? 'vercel' : 'node',
    }),
    devtoolsJson(),
    viteReact(),
  ],
  server: {
    host: '::',
    allowedHosts: true,
    hmr: true,
  },
})

export default config
