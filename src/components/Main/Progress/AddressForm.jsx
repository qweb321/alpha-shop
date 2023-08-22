import styles from "./AddressForm.module.css"
import { OrderContext } from "../../../context/OrderContext";
import { useContext } from "react";
function AddressForm() {
    const { handleOrderInfo, step } = useContext(OrderContext)
    return (
        <>
        <h2>寄送地址</h2>
        <div className={styles.formContorl}>
            <div className={`${styles.inputGroup} ${styles.title}`} >
                <label htmlFor="title" className="inputLabel">稱謂</label>
                <select name="title" id="title" onChange={(e) => handleOrderInfo(e, step)}>
                    <option value="先生">先生</option>
                    <option value="小姐">小姐</option>
                </select>
            </div>
            <div className={`${styles.inputGroup} ${styles.name}`}>
                <label htmlFor="name" className="inputLabel">姓名</label>
                <input type="text" name="name" id="name" onChange={(e) => handleOrderInfo(e, step)}/>
            </div>
            <div className={`${styles.inputGroup} ${styles.phone}`}>
                <label htmlFor="phone" className="inputLabel">電話</label>
                <input type="tel" name="phone" id="phone" onChange={(e) => handleOrderInfo(e, step)}/>
            </div>
            <div className={`${styles.inputGroup} ${styles.email}`}>
                <label htmlFor="email" className="inputLabel">Email</label>
                <input type="email" name="email" id="email" onChange={(e) => handleOrderInfo(e, step)}/>
            </div>
            <div className={`${styles.inputGroup} ${styles.city}`}>
                <label htmlFor="city" className="inputLabel">縣市</label>
                <select name="city" required onChange={(e) => handleOrderInfo(e, step)}>
                    <option value="">請選擇縣市</option>
                    <option value="KLU">基隆市</option>
                    <option value="TPH">新北市</option>
                    <option value="TPE">臺北市</option>
                    <option value="TYC">桃園市</option>
                    <option value="HSH">新竹縣</option>
                    <option value="HSC">新竹市</option>
                    <option value="MAC">苗栗市</option>
                    <option value="MAL">苗栗縣</option>
                    <option value="TXG">臺中市</option>
                    <option value="CWH">彰化縣</option>
                    <option value="CWS">彰化市</option>
                    <option value="NTC">南投市</option>
                    <option value="NTO">南投縣</option>
                    <option value="YLH">雲林縣</option>
                    <option value="CHY">嘉義縣</option>
                    <option value="CYI">嘉義市</option>
                    <option value="TNN">臺南市</option>
                    <option value="KHH">高雄市</option>
                    <option value="IUH">屏東縣</option>
                    <option value="PTS">屏東市</option>
                    <option value="ILN">宜蘭縣</option>
                    <option value="ILC">宜蘭市</option>
                    <option value="HWA">花蓮縣</option>
                    <option value="HWC">花蓮市</option>
                    <option value="TTC">臺東市</option>
                    <option value="TTT">臺東縣</option>
                    <option value="PEH">澎湖縣</option>
                    <option value="KMN">金門縣</option>
                    <option value="LNN">連江縣</option>
                </select>
            </div>
            <div className={`${styles.inputGroup} ${styles.address}`}>
                <label htmlFor="address" className="inputLabel">地址</label>
                <input type="text" name="address" id="address" onChange={(e) => handleOrderInfo(e, 1)}/>
            </div>
        </div>
        </>
    )
}

export default AddressForm;