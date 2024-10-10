import React from "react";
import styles from "./index.module.scss"
import Slider from "../../Components/Slider";
import Categories from "../../Components/Categories";
import Filter from "../../Components/Filter";
import Store from "../../Components/Store";
import ModalWrapper from "../../shared/Modal/modal";
import dw_icon from "../../assets/imgs/download_icon.png"
import fl_icon from "../../assets/imgs/filter_icon.png"
import { useState } from "react";

function Main() {

    const [modalActive, setModalActive] = useState(false);
    return (
        <div>
            <Slider />
            <Categories />
            <div className={`${styles.dw} pdfprint`}>
                <div className={styles.dw_txt}>
                    <p>Товары</p>
                </div>
                <div className={styles.dw_pdf_fl}>

                    <div className={styles.dw_pdf} onClick={() => window.print()}>
                        <img alt="" src={dw_icon} />
                        <p >
                            Скачать каталог файлом
                        </p>
                    </div>
                    <div className={styles.dw_fl} onClick={() => setModalActive(true)}>
                        <p className={styles.dw_fl_txt} >
                            Фильтр
                        </p>
                        <img alt="" src={fl_icon} />
                    </div>
                </div>
            </div>
            <ModalWrapper active={modalActive} setActive={setModalActive} filter_headertxt={"Фильтры"}>
                <Filter />
            </ModalWrapper>
            <div className='container'>
                <div className={styles.wrapper}>
                    <Filter />
                    <Store />
                </div>
            </div>
        </div>
    );
}

export default Main;
