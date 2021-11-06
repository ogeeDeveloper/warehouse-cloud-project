const Product = ({ name, price }) => {
  return (
    <>
      <p>{name}</p>
      <p>{price.formatted_with_symbol}</p>
    </>
  )
}

export default Product
