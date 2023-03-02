import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import pluginYaml from "vite-plugin-yaml2";
/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(), 
		pluginYaml()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
}
export default defineConfig(config);
