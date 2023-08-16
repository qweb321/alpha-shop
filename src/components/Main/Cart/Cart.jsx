import CartItem from "./CartItem";
import styles from './Cart.module.css'
import productOne from "../../../public/images/product-1.jpg"
import productTwo from "../../../public/images/product-2.jpg"
import { useState } from "react";

function Cart() {
    const cartItem = [{
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
      }]

    const [items, setItem] = useState(cartItem)

      function handleItemQuantity(e){
        const targetId = e.target.parentElement.id
        const isMinus = e.target.parentElement.classList.contains("minus");
        setItem(items =>items.map(item => {
            if (item.id === targetId) {
                return {...item, quantity: isMinus ? item.quantity -1 : item.quantity + 1}
            }else {
                return item
            }
        }))
        setItem(items => items.filter(item => item.quantity >= 0))
      }
    let totalPrice = 0;
    items.forEach(item => totalPrice += item.quantity * item.price)
    return (
        <section className={styles.cartContainer}>
            <div className={styles.cart}>
                <h3 className="cartTitle">購物籃</h3>
                <section className={styles.productList}>
                        {items.map(item => 
                            <CartItem {...item} key={item.id} onHandleQuantity={handleItemQuantity}/>
                        )}
                </section>
                <section className={`${styles.cartInfo} ${styles.shipping}`}>
                    <div className="text">運費</div>
                    <div className="price">免費</div>
                </section>
                <section className={`${styles.cartInfo} ${styles.total}`}>
                    <div className="text">小計</div>
                    <div className="price">{totalPrice}</div>
                </section>

            </div>
        </section>
    )
}

export default Cart;