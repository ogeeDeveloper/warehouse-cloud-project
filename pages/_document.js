// This file will ru inn te server side
import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheets } from "@mui/material/styles"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // RendeDr app and pages to collected side effects
  const sheets = new ServerStyleSheets()
  // Get render page
  const originalRenderPage = ctx.renderPage
  // Update the render page of the context and use original render page
  ctx.renderPage = () => {
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    })
    const initialProps = await Document.getInitialProps(ctx)
    // Return Object
    return {
      ...initialProps,
      // Styles fragment will rendered whenn the page and render is finish
      styles: [...React.Children.toArray(initialProps.styles)], //Get style from materialui
    }
  }
}
