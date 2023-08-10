import CartItem from "./CartItem";
import styles from './Cart.module.css'
import productOne from "../../../public/images/product-1.jpg"
import productTwo from "../../../public/images/product-2.jpg"

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
    return (
        <section className={styles.cartContainer}>
            <div className={styles.cart}>
                <h3 className="cartTitle">購物籃</h3>
                <section className={styles.productList}>
                        {cartItem.map(item => 
                            <CartItem {...item} key={item.id}/>
                        )}
                </section>
                <section class={`${styles.cartInfo} ${styles.shipping}`}>
                    <div class="text">運費</div>
                    <div class="price"></div>
                </section>
                <section class={`${styles.cartInfo} ${styles.total}`}>
                    <div class="text">小計</div>
                    <div class="price"></div>
                </section>

            </div>
        </section>
    )
}

export default Cart;