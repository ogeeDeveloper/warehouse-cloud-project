import CommerceSDK from "@chec/commerce.js"
//const client = new CommerceSDK(process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY)

let commerce = null

const getCommerce = (CommercePublickey) => {
  if (commerce) {
    return commerce
  } else {
    const publicKey =
      CommercePublickey || process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY
    const devEnvironnment = process.env.NODE_ENV == "development"
    if (devEnvironnment && !publicKey) {
      throw Error("Commerce public API not found")
    }
    commerce = new CommerceSDK(publicKey, devEnvironnment)
    return commerce
  }
}
export default getCommerce
