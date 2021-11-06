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
    </div>
  )
}
