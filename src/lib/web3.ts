import Onboard from '@web3-onboard/core';
import injectedModule from '@web3-onboard/injected-wallets';
// import { defaultEvmStores, signer, signerAddress, provider } from 'svelte-ethers-store';

let onboard = Onboard({
	wallets: [injectedModule],
	chains: [
		{
			id: '0x1',
			token: 'ETH',
			label: 'Ethereum Mainnet',
			rpcUrl: 'https://eth-mainnet.g.alchemy.com/v2/bYP2vTPrRGGdUb_ocjDzq-Y0NVNv_SwN'
		}
	],
	appMetadata: {
		name: 'Lucky Toad',
		icon: 'logo-toad-no-text-transparent-bg.png',
		logo: 'logo-text-transparent-bg.png',
		description: 'temp-description',
		recommendedInjectedWallets: [
			{ name: 'MetaMask', url: 'https://metamask.io' },
			{ name: 'WalletConnect', url: 'https://walletconnect.com/' }
		]
	},
	accountCenter: {
		desktop: {
			enabled: false,
			position: 'topRight'
		},
		mobile: {
			enabled: false,
			position: 'topRight'
		}
	},
	connect: {
		// showSidebar: false
	},

	i18n: {
		en: {
			connect: {
				selectingWallet: {
					header: 'Select a Wallet',
					sidebar: {
						heading: '',
						subheading: '',
						paragraph: ''
					}
				}
			}
		}
	}
});

const walletsSubscription = onboard.state.select('wallets');
const { unsubscribe } = walletsSubscription.subscribe(async (wallets) => {
	const walletProvider = wallets[0]?.provider;

	if (walletProvider) {
		const provider = new ethers.providers.Web3Provider(walletProvider, 'any');
		// await defaultEvmStores.setProvider(provider);
		// await defaultEvmStores.attachContract('TOAD', PUBLIC_TOAD_CONTRACT_ADDRESS, abi);
	}
	// updateAlreadyConnectedWallets();
});

export const connect = async () => {
	const wallets = await onboard.connectWallet();
};