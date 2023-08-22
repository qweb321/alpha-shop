import CartItem from "./CartItem";
import styles from './Cart.module.css'
import { useContext } from "react";
import { CartContext } from '../../../context/CartContext'

function Cart() {
    const { items, handleItemQuantity } = useContext(CartContext)
    
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
                    <div className="price" data-price={totalPrice}>{totalPrice}</div>
                </section>

            </div>
        </section>
    )
}

export default Cart;