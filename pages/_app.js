import '@styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { SWRConfig } from 'swr';
import ky from 'ky';
import Layout from '@components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <SWRConfig
        options={{ errorRetryCount: 3 }}
        value={{
          fetcher: (url) => ky.get(url).json(),
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </SessionProvider>
  );
}
