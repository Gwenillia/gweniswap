import '../styles/globals.css'
import '../styles/design_tokens.css'
import '../styles/utilities/utilities.css'
import type { AppProps } from 'next/app'
import { Web3ContextProvider } from 'context/Web3Context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ContextProvider>
      <Component {...pageProps} />
    </Web3ContextProvider>
  )
}

export default MyApp
