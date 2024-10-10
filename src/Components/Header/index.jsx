import React, {useEffect, useRef, useState} from "react";
import {useTranslation} from 'react-i18next';
import styles from "./index.module.scss";
import logo from "./img/logo.svg";
import {Link} from "react-router-dom";
import arrow from "./img/arrow.svg";
import ruIcon from "./img/ru.svg";
import enIcon from "./img/en.svg";
import uzIcon from "./img/uz.svg"
import searchIcon from "./img/search.svg"
import Search from "../Search";
import {useOutside} from "./useOutsideClick";

const langArr = [
    {
        id: 1,
        language: 'Русский',
        img: ruIcon,
        translationLang: "Ру",
        viewLang: "ru"
    },
    {
        id: 2,
        language: 'O’zbekcha',
        img: uzIcon,
        translationLang: "O’z",
        viewLang: "uz"
    },
    {
        id: 3,
        language: 'English',
        img: enIcon,
        translationLang: "En",
        viewLang: "en"
    },
]

function Header({active,setActive,setSearchWrap,searchWrap}) {
    const { t, i18n } = useTranslation();
    const triggerRef = useRef(null);
    const targetRef = useRef(null);
    const searchTriggerRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [lang ,setLang] = useState("")
    const [selectedLang, setSelectedLang] = useState(null)
    const [menuOpen, setMenuOpen] = useState(false)
    useOutside(triggerRef, targetRef, () => setOpen(false));

    const langFunc = () => {
        setOpen(!open)
    }
    const getValue = (el) => {
        setLang(el?.translationLang);
        setSelectedLang(el.id);
        i18n.changeLanguage(el.viewLang);
        setOpen(false);
    }

    useEffect(() => {
        const test = langArr.find(item => item.viewLang === i18n.language);
        setLang(test?.translationLang)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const toggleClassName = () => {
        setActive(!active);

        if(!menuOpen){
            setMenuOpen(true)
        } else{
            setMenuOpen(false)
        }
    }
    const closeBurger = () => {
        setActive(false)
    }

    console.log(searchTriggerRef)

    return (
        <div className="pdfprint">
            <div className="container">
                <div className={styles.header_inner}>
                    <div onClick={toggleClassName} className={`${styles.menu_btn} ${active ? styles.open : ""}`}
                    >
                       <div className={styles.menu_btn_burger}></div>
                    </div>
                    <Link onClick={closeBurger} className={styles.logo_box} to="/">
                        <img src={logo} alt="logo"/>
                    </Link>
                    {
                        !searchWrap &&  <div className={`${styles.nav_list} ${active ? styles.nav_list_active : ""}`}  >
                            <Link onClick={closeBurger} className={styles.nav_link} to="/">{t('Главная')}</Link>
                            <Link onClick={closeBurger} className={styles.nav_link} to="catalog">{t('Товары')}</Link>
                            <Link onClick={closeBurger} className={styles.nav_link} to="about">{t('О нас')}</Link>
                            <Link onClick={closeBurger} className={styles.nav_link} to="contacts">{t('Контакты')}</Link>
                            <div className={styles.header_lang}>
                                {
                                    langArr.map((el,i)=>(
                                        <div
                                            onClick={()=>getValue(el)}
                                            key={el.id}
                                            className={`${styles.lang_item} ${el.id === selectedLang ? styles.selected : ""} `}>
                                            <img className={styles.header_lng} src={el.img} alt="uz"/>
                                            <span>{el.translationLang}</span>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    }
                    {
                        searchWrap && <Search ref={searchTriggerRef} searchWrap={searchWrap} setSearchWrap={setSearchWrap}/>
                    }
                    <div className={styles.nav_btns}>
                        <div className={styles.lang}>
                            <div className={styles.lang_change} ref={triggerRef} onClick={langFunc}>
                                <span>{lang}</span>
                                <img src={arrow} alt="arrow"/>
                            </div>
                            {
                                open && <div ref={targetRef} className={styles.lang_dropdown}>
                                    {
                                        langArr.map((el,i)=>(
                                            <div
                                                onClick={()=>getValue(el)}
                                                key={el.id}
                                                className={`${styles.lang_item} ${el.id === selectedLang ? styles.selected : ""} `}>
                                                <img src={el.img} alt="uz"/>
                                                <span>{el.language}</span>
                                            </div>
                                        ))
                                    }

                                </div>
                            }
                        </div>
                        <button ref={searchTriggerRef} onClick={()=>setSearchWrap(true)} className={styles.search_btn}>
                            <img src={searchIcon} alt="search"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
