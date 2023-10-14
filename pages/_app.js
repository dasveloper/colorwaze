import '@styles/globals.css'
import { SWRConfig } from 'swr'
import ky from 'ky'
import Layout from '@components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig
      options={{ errorRetryCount: 3, revalidateFirstPage: false }}
      value={{
        fetcher: url => ky.get(url).json(),
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  )
}
