import React from "react"
import { StoreProvider } from "./components/Store"
import Router from "next/router"
import NProgress from "nprogress"

MyApp.getInitialProps = async () => {
  return {
    pageProps: {
      commercePublicKey: process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY,
    },
  }
}

Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.start())

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp
