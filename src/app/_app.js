import Layout from '@/app/layout';
import { NextUIProvider } from "@nextui-org/react";

export default function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  )
}