import React, {useEffect, useState} from "react";
import styles from "./index.module.scss"
import {Link} from "react-router-dom";
import logo from "../Header/img/logo.svg";
import facebook from "./imgs/facebook.svg";
import instagram from "./imgs/instagram.svg";
import telegram from "./imgs/telegram.svg"
import {useTranslation} from "react-i18next";
import {setting} from "../../apiex/baltichome";

const socials = [
    {
        icon: facebook,
        link: ''
    },
    {
        icon: instagram,
        link: ''
    },
    {
        icon: telegram,
        link: ''
    },
]

function Footer() {

    const [settings, setSettings] = useState({});

    useEffect(() => {
        setting({}).then(response => setSettings(response))
    },[])


    console.log(settings, 'settings')

    const { t } = useTranslation();

    return (
        <div className={`${styles.wrapper} pdfprint`}>
            <div className="container">
                <div className={styles.footer_inner}>
                    <div className={styles.logo_box}>
                        <Link className={styles.logo_box} to="/">
                            <img src={logo} alt="logo"/>
                        </Link>
                    </div>
                    <div className={styles.contacts}>
                        <Link to={"/"+settings.telephone } className={styles.phone_num}>{settings.telephone}</Link>
                        <Link to={"/" + settings.email} className={styles.mail}>{settings.email}</Link>
                        <div className={styles.socials}>
                            {
                                socials.map((el,i)=>(
                                   <Link className={styles.socials_link} key={i} to={el.link}>
                                       <img src={el.icon} alt="socials"/>
                                   </Link>
                                    )
                                )
                            }
                        </div>
                    </div>
                    <div className={styles.list_box}>
                        <div className={styles.company}>
                            <h3 className={styles.subtitle}>Компания</h3>
                            <Link className={styles.footer_link} to={'catalog'}>{t('Мебель')}</Link>
                            <Link className={styles.footer_link} to={'about'}>{t('О нас')}</Link>
                            <Link className={styles.footer_link} to={'contacts'}>{t('Контакты')}</Link>
                        </div>
                        <div className={styles.catalog}>
                            <h3 className={styles.subtitle}>Каталог</h3>
                            <Link className={styles.footer_link} to={''}>{t('Диван')}</Link>
                            <Link className={styles.footer_link} to={''}>{t('Кресла')}</Link>
                            <Link className={styles.footer_link} to={''}>{t('Аксессуары')}</Link>
                            <Link className={styles.footer_link} to={''}>{t('Пуфики')}</Link>
                            <Link className={styles.footer_link} to={''}>{t('Кушетки')}</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;
