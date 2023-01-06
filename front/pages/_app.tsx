import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import AppLayout from "../src/components/layouts/AppLayout";

import "@spideai/my-lib/dist/cjs/index.css"
import {AuthenticationProvider} from "../src/context/AuthenticationContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <AuthenticationProvider>
          <AppLayout>
              <Component {...pageProps} />
          </AppLayout>
      </AuthenticationProvider>
    )
}