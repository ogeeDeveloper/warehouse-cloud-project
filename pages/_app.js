import "tailwindcss/tailwind.css"
import React from "react"
import { StoreProvider } from "./components/Store"

MyApp.getInitialProps = async () => {
  return {
    pageProps: {
      commercePublicKey: process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY,
    },
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp
