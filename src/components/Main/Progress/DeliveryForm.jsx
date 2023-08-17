import styles from './DeliveryForm.module.css'

function DeliveryForm() {
    return (
        <>
        <h2>運送方式</h2>
            <div className="form-body">
                <div className={styles.item}>
                    <input type="radio" id="standardShipping" name="deliveryMethod" value="free" />
                    <label htmlFor="standardShipping">
                        <div className={styles.shippingContent}>
                            <div className="formItemTitle">標準運送</div>
                            <div className="formItemDesscription">約3~7個工作天</div>
                        </div>
                        <div className={styles.shippingPrice}>免費</div>
                    </label>
                </div>
                <div className={styles.item}>
                    <input type="radio" id="dhlShipping" name="deliveryMethod" value="500" />
                    <label htmlFor="dhlShipping">
                        <div className={styles.shippingContent}>
                            <div className="formItemTitle">DHL 貨運</div>
                            <div className="formItemDesscription">48小時內送達</div>
                        </div>
                        <div className={styles.shippingPrice}>500</div>
                    </label>
                </div>
            </div>
        </>
    )
}

export default DeliveryForm;