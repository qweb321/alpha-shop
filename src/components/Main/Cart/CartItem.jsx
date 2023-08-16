import styles from './CartItem.module.css'
import { ReactComponent as IconMinus } from '../../../public/icon/minus.svg'
import { ReactComponent as IconPlus } from '../../../public/icon/plus.svg'

function CartItem({id, name, img, price, quantity, onHandleQuantity}) {
    return (
        <div className={styles.productContainer} id={id} data-count={quantity} data-price={price}>
            <img src={img} alt="productImage"/>
            <div className={styles.productInfo}>
                <div className={styles.productName}>{name}</div>
                <div className={styles.productPrice}>${price}</div>
                <div className={styles.productControlContainer}>
                    <div className={styles.productControl}>
                        <IconMinus className={`${styles.productAction} minus`} id={id} onClick={onHandleQuantity} />
                        <span>{quantity}</span>
                        <IconPlus className={`${styles.productAction} plus`} id={id} onClick={onHandleQuantity} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;