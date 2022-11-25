import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import AppLayout from "../src/components/layouts/AppLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
     <Component {...pageProps} />
    </AppLayout>
    )
}
