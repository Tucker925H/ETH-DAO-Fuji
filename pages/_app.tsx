import type { AppProps } from 'next/app';
import '../styles/globals.css';
import HeadComponent from '../components/head';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { Sepolia } from '@thirdweb-dev/chains';
// アプリケーションが動作するチェーン（ Sepolia）を取得し、定義します。
// const activeChainId = 11155111;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={Sepolia}>
      <HeadComponent />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
