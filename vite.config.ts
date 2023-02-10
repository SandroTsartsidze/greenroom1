import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url';
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  resolve: {
		alias: {
			'~': fileURLToPath(new URL('./', import.meta.url)),
			'@': fileURLToPath(new URL('./node_modules/', import.meta.url)),
			'$assets': fileURLToPath(new URL('./src/assets/', import.meta.url)),
			'$service': fileURLToPath(new URL('./src/service/', import.meta.url)),
			'$shared': fileURLToPath(new URL('./src/shared/', import.meta.url)),
		},
		extensions: [".js", ".json", ".tsx", ".ts", "scss"],
	},
	css: { preprocessorOptions: { scss: { additionalData: `@import "./src/assets/Styles/Linkin.scss";` } } }
})