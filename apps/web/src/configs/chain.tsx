import * as wagmiChains from 'wagmi/chains';

import { cn } from 'utils/formatter';

export enum LoginTypeEnum {
  Web3Auth = 'web3auth',
  Metamask = 'metaMask',
  Coinbase = 'coinbaseWallet',
  WalletConnect = 'walletConnect',
  Ledger = 'ledger',
  Safe = 'safe'
}

export enum SupportedChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GOERLI = 5,
  KOVAN = 42,
  BSC_TESTNET = 97,
  BSC = 56,

  ARBITRUM_ONE = 42161,
  ARBITRUM_RINKEBY = 421611,

  OPTIMISM = 10,
  OPTIMISTIC_KOVAN = 69,

  POLYGON = 137,
  POLYGON_MUMBAI = 80001
}

export const DEFAULT_CHAIN_RPC_LINK: { [key: number]: string } = {
  [SupportedChainId.MAINNET]: 'https://rpc.ankr.com/eth',
  [SupportedChainId.GOERLI]: 'https://rpc.ankr.com/eth_goerli',
  [SupportedChainId.POLYGON]: 'https://polygon-rpc.com',
  [SupportedChainId.POLYGON_MUMBAI]: 'https://rpc-endpoints.superfluid.dev/mumbai',
  [SupportedChainId.BSC]: 'https://bsc-dataseed.binance.org/',
  [SupportedChainId.BSC_TESTNET]: ''
};

export const SUPPORTED_CHAINS = [wagmiChains.mainnet, wagmiChains.goerli];

export const getWalletIcon = (id: LoginTypeEnum | null, className?: string) => {
  const mergedClassName = cn('h-7 w-7 mobile:h-6 mobile:w-6', className);
  switch (id) {
    case LoginTypeEnum.Metamask:
      return (
        <svg
          className={mergedClassName}
          xmlns="http://www.w3.org/2000/svg"
          width="212"
          height="189"
          viewBox="0 0 212 189">
          <g fill="none" fillRule="evenodd">
            <polygon
              fill="#CDBDB2"
              points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875"
            />
            <polygon
              fill="#CDBDB2"
              points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875"
              transform="matrix(-1 0 0 1 256.5 0)"
            />
            <polygon
              fill="#393939"
              points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188"
            />
            <polygon
              fill="#F89C35"
              points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27"
            />
            <polygon
              fill="#F89D35"
              points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
            />
            <polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375" />
            <polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813" />
            <polygon
              fill="#F89D35"
              points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
            />
            <polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90.563 152.438" />
            <polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719" />
            <polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25" />
            <polygon
              fill="#EB8F35"
              points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
            />
            <polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938" />
            <polygon
              fill="#DFCEC3"
              points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625"
            />
            <polygon
              fill="#DFCEC3"
              points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625"
              transform="matrix(-1 0 0 1 272.25 0)"
            />
            <polygon
              fill="#393939"
              points="70.313 112.5 64.125 125.438 86.063 119.813"
              transform="matrix(-1 0 0 1 150.188 0)"
            />
            <polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27" />
            <path
              fill="#8E5A30"
              d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
            />
            <g transform="matrix(-1 0 0 1 211.5 0)">
              <polygon
                fill="#F89D35"
                points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
              />
              <polygon
                fill="#D87C30"
                points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"
              />
              <polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813" />
              <polygon
                fill="#F89D35"
                points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
              />
              <polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90 153" />
              <polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719" />
              <polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25" />
              <polygon
                fill="#EB8F35"
                points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
              />
              <polygon
                fill="#E8821E"
                points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"
              />
              <polygon
                fill="#393939"
                points="70.313 112.5 64.125 125.438 86.063 119.813"
                transform="matrix(-1 0 0 1 150.188 0)"
              />
              <polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27" />
              <path
                fill="#8E5A30"
                d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
              />
            </g>
          </g>
        </svg>
      );
    case LoginTypeEnum.WalletConnect:
      return (
        <svg
          className={mergedClassName}
          height="25"
          viewBox="0 0 40 25"
          width="40"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="m8.19180572 4.83416816c6.52149658-6.38508884 17.09493158-6.38508884 23.61642788 0l.7848727.76845565c.3260748.31925442.3260748.83686816 0 1.15612272l-2.6848927 2.62873374c-.1630375.15962734-.4273733.15962734-.5904108 0l-1.0800779-1.05748639c-4.5495589-4.45439756-11.9258514-4.45439756-16.4754105 0l-1.1566741 1.13248068c-.1630376.15962721-.4273735.15962721-.5904108 0l-2.68489263-2.62873375c-.32607483-.31925456-.32607483-.83686829 0-1.15612272zm29.16903948 5.43649934 2.3895596 2.3395862c.3260732.319253.3260751.8368636.0000041 1.1561187l-10.7746894 10.5494845c-.3260726.3192568-.8547443.3192604-1.1808214.0000083-.0000013-.0000013-.0000029-.0000029-.0000042-.0000043l-7.6472191-7.4872762c-.0815187-.0798136-.2136867-.0798136-.2952053 0-.0000006.0000005-.000001.000001-.0000015.0000014l-7.6470562 7.4872708c-.3260715.3192576-.8547434.319263-1.1808215.0000116-.0000019-.0000018-.0000039-.0000037-.0000059-.0000058l-10.7749893-10.5496247c-.32607469-.3192544-.32607469-.8368682 0-1.1561226l2.38956395-2.3395823c.3260747-.31925446.85474652-.31925446 1.18082136 0l7.64733029 7.4873809c.0815188.0798136.2136866.0798136.2952054 0 .0000012-.0000012.0000023-.0000023.0000035-.0000032l7.6469471-7.4873777c.3260673-.31926181.8547392-.31927378 1.1808214-.0000267.0000046.0000045.0000091.000009.0000135.0000135l7.6473203 7.4873909c.0815186.0798135.2136866.0798135.2952053 0l7.6471967-7.4872433c.3260748-.31925458.8547465-.31925458 1.1808213 0z"
            fill="white"
          />
        </svg>
      );
    case LoginTypeEnum.Coinbase:
      return (
        <svg
          className={mergedClassName}
          version="1.2"
          baseProfile="tiny"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1024 1024"
          overflow="visible"
          xmlSpace="preserve">
          <path
            fill="#0052FF"
            d="M512,0L512,0c282.8,0,512,229.2,512,512l0,0c0,282.8-229.2,512-512,512l0,0C229.2,1024,0,794.8,0,512l0,0
	C0,229.2,229.2,0,512,0z"
          />
          <path
            fill="#FFFFFF"
            d="M512.1,692c-99.4,0-180-80.5-180-180s80.6-180,180-180c89.1,0,163.1,65,177.3,150h181.3
	c-15.3-184.8-170-330-358.7-330c-198.8,0-360,161.2-360,360s161.2,360,360,360c188.7,0,343.4-145.2,358.7-330H689.3
	C675,627,601.2,692,512.1,692z"
          />
        </svg>
      );
    case LoginTypeEnum.Safe:
      return (
        <svg className={mergedClassName} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 440">
          <path
            fill="#008b73"
            d="M220,9.82C103.92,9.82,9.82,103.92,9.82,220S103.92,430.18,220,430.18,430.18,336.08,430.18,220,336.08,9.82,220,9.82ZM373.83,231.47H276.3a59.41,59.41,0,1,1,.45-20.67h97.08a10.34,10.34,0,1,1,0,20.67Z"
          />
        </svg>
      );
    case LoginTypeEnum.Ledger:
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={mergedClassName}>
          <path
            d="M35.6248 7H19.9365V27.9862H40.9914V12.4602C41 9.51219 38.5825 7 35.6248 7ZM15.1185 7H12.4866C9.529 7 7 9.40111 7 12.4687V15.092H15.1185V7ZM7 20.0053H15.1185V28.0973H7V20.0053ZM32.8815 40.9915H35.5134C38.471 40.9915 41 38.5903 41 35.5227V32.908H32.8815V40.9915ZM19.9365 32.908H28.055V41H19.9365V32.908ZM7 32.908V35.5313C7 38.4793 9.40898 41 12.4866 41H15.1185V32.908H7Z"
            fill="#9597A2"
          />
        </svg>
      );
    default:
      break;
  }
};
