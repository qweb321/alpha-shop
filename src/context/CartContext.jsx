import { createContext, useState } from "react";
import productOne from "../public/images/product-1.jpg"
import productTwo from "../public/images/product-2.jpg"

const cartItems = [{
    id: '1',
    name: '貓咪罐罐',
    img: productOne,
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: productTwo,
    price: 200,
    quantity: 1,
  },
]

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItem] = useState(cartItems)

  function handleItemQuantity(id, action){
    const isMinus = action === 'minus' 
    const updatedItem = items =>items.map(item => {
        if (item.id === id) {
            return {...item, quantity: isMinus ? item.quantity -1 : item.quantity + 1}
        }else {
            return item
        }
    }).filter(item => item.quantity > 0)
    
   
    setItem(updatedItem)
  }

  return (
    <CartContext.Provider value={{ items, handleItemQuantity }}>
      {children}
    </CartContext.Provider>
  )
}
