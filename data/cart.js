export const cart = []

export function addtoCart(productId){
  let matchingItem
        let cartQuantity = 0
        cart.forEach((item) => {
          if(productId === item.productId) {
            matchingItem = item

          }
        })
        if(matchingItem){
          matchingItem.quantity += 1
        } else {
            cart.push({
            productId: productId,
            quantity: 1

          })

        }
}