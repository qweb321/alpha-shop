import styles from './PaymentForm.module.css'

function PaymentForm() {
    return (
        <>
        <h2>付款資訊</h2>
        <div className={styles.formContorl}>
            <div className={`${styles.inputGroup} ${styles.name}`}>
                <label htmlFor="cardName">持卡人姓名</label>
                <input type="text" id="cardName" name="name"/>
            </div>
            <div className={`${styles.inputGroup} ${styles.number}`}>
                <label htmlFor="cardNumber">卡號</label>
                <input type="text" id="cardNumber" name="number"/>
            </div>
            <div className={`${styles.inputGroup} ${styles.date}`}>
                <label htmlFor="cardDate">有效期限</label>
                <input type="text" id="cardDate" name="date"/>
            </div>
            <div className={`${styles.inputGroup} ${styles.cardCVC}`}>
                <label htmlFor="cardCVC">CVC / CCV</label>
                <input type="text" id="cardCVC" name="CVC"/>
            </div>
        </div>
        </>
    )
}

export default PaymentForm;