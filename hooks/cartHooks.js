import { useState } from 'react'

// WIP
const sampleCartItems = [
  {
    id: 765,
    title: 'Sample Product 1',
    price: 49.99,
  },
  {
    id: 954,
    title: 'Sample Product 2',
    price: 64.99,
  },
  {
    id: 2122,
    title: 'Sample Product 3',
    price: 99.99,
  },
]

// const [cartItems, setCartItems] = useState(sampleCartItems)

export const addItemToCart = (product) => {
  console.log(product);
  // product.quantity + 1
  // setCartItems([...cartItems, product])
}

export const removeItemFromCart = (cartItem) => {
  console.log(cartItem);
  // const updatedCartItems = cartItems.filter(item => item !== cartItem)
  // setCartItems(updatedCartItems)
}

// export const calculateCartTotal = (cartArray) => {
//   const result = cartArray.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue.price
//   })
// }


// export const increaseCartItemQuantity = (cartItem) => {
//   cartItem.quantity + 1
//   setCartItems([...cartItems, cartItem])
// }

// export const decreaseCartItemQuantity = (cartItem) => {
//   if (cartItem.quantity < 1) return removeItemFromCart(cartItem)
//   cartItem.quantity - 1
//   setCartItems([...cartItems, cartItem])
// }