import Link from "next/link"
import Product from "./Product"

const ProductList = ({ products }) => {
  if (!products) return null
  return (
    <ul>
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.permalink}`}>
            <a>
              <Product {...product} />
            </a>
          </Link>
        </div>
      ))}
    </ul>
  )
}

export default ProductList
