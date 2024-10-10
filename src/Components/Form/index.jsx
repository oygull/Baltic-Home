import React, {useState, useRef} from "react";
import styles from "./index.module.scss";
import closeIcon from "./imgs/close.svg";
import ReCAPTCHA from "react-google-recaptcha"
import { IMaskInput } from 'react-imask';

function Form({setOpenModal, openModal}) {

    const [modalControl, setModalControl] = useState(true);
    const sendNum = () => {
        setModalControl(false)
    }
    const captchaRef = useRef(null)

    const handleSubmit = (e) =>{
        e.preventDefault();
        captchaRef.current.reset();
    }
    const ref = useRef(null);
    const inputRef = useRef(null);
    const PhoneMask = "+{000}(00)000-00-00";
    console.log(process.env.REACT_APP_SITE_KEY, 'process.env.REACT_APP_SITE_KEY')

    return (
        <div  className={`${styles.modal_body} ${openModal ? styles.open : ""}`}>
            {
                modalControl ?
                    <div className={styles.modal_wrapper}>
                        <button onClick={()=>setOpenModal(false)} className={styles.close_btn}>
                            <img src={closeIcon} alt="closeBtn"/>
                        </button>
                        <h3 className={styles.modal_main_title}>Оставьте свой номер, мы с вами свяжемся</h3>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <ReCAPTCHA
                                sitekey={process.env.REACT_APP_SITE_KEY}
                                ref={captchaRef}
                            />
                            <div className={styles.form_box}>
                                <IMaskInput
                                    mask={PhoneMask}
                                    radix="."
                                    className={styles.modal_input}
                                    value="+9989"
                                    unmask={false} // true|false|'typed'
                                    ref={ref}
                                    maxLength="17"
                                    inputRef={inputRef}

                                    onAccept={
                                        (value ) => console.log(value)
                                    }
                                    placeholder='Enter number here'
                                />
                                <button onClick={sendNum} className={styles.modal_btn}>Отправить</button>
                            </div>
                        </form>
                    </div>
                       :
                    <div className={styles.second_wrapper}>
                        <button onClick={()=>setOpenModal(false)} className={styles.close_btn}>
                            <img src={closeIcon} alt="closeBtn"/>
                        </button>
                        <h3 className={styles.modal_title}>Ваша заявка принята</h3>
                        <p className={styles.modal_desc}>Наши консультанты свяжутся с вами в ближайшее время</p>
                        <button className={styles.modal_btn}>Вернуться на главную страницу</button>
                    </div>
            }
        </div>
    );
}

export default Form;
