import ProductList from "./components/ProductList"
import Head from "next/head"
import getCommerce from "../misc/commerce"

export async function getStaticProps() {
  // Create Instance
  const commerce = getCommerce()
  const { data: products } = await commerce.products.list()
  const { data: categories } = await commerce.categories.list()

  // Return a render funnction
  return {
    props: {
      products,
    },
  }
}

export default function Home({ products }) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <h1 className='text-6xl font-bold'>Products</h1>
        <ProductList products={products} />
      </main>

      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <a
          className='flex items-center justify-center'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{" "}
          <img src='/vercel.svg' alt='Vercel Logo' className='h-4 ml-2' />
        </a>
      </footer>
    </div>
  )
}
