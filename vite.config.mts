import { sveltekit } from 'npm:@sveltejs/kit/vite';
import type { UserConfig } from 'npm:vite';
import UnoCSS from 'npm:unocss/vite'
import { presetUno, presetIcons, extractorSvelte } from 'npm:unocss';
// import presetWebFonts from 'npm:@unocss/preset-web-fonts';
// import 'npm:@iconify/json';
import Onboard from 'npm:@web3-onboard/core';
import injectedModule from 'npm:@web3-onboard/injected-wallets';
// import 'npm:svelte-ethers-store';



const config: UserConfig = {
	plugins: [
		sveltekit(),
		UnoCSS({
			extractors: [extractorSvelte],
			// mode: 'svelte-scoped',
			presets: [
				presetUno()
			],
		})
	]
};

export default config;

// presetWebFonts({
// 	provider: 'google',
// 	fonts: {
// 		inter: ['Inter', 'sans-serif']
// 	}
// })
// 	theme: {
// 		colors: {}
// 	}