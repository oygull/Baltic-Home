import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./index.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import dw_icon from "../../assets/imgs/download_icon.png";
import nav_icon from "../../assets/imgs/navigation_icon.png"
import fl_icon from "../../assets/imgs/filter_icon.png";
import Main from "../../Components/Filter";
import ModalWrapper from "../../shared/Modal/modal";
import Store from "../../Components/Store";
import { category } from "../../apiex/baltichome";
import { useProductsStore } from "../../store";
const Catalog = () => {
    const [modalActive, setModalActive] = useState(false);
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState('');
    const { setCategoryId } = useProductsStore(state => state);
    const [navigation, setNavigation] = useState([{ text: "Baltichome", link: "/" }, { text: "Товары", link: "/catalog" }]);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            console.log(id, "ID");
            const category_id = +id || false;
            const data = await category();

            if (category_id) {
                const filteredData = data.find(categ => categ.id === category_id)
                setCategories(filteredData.childs);
                setCategoryId(category_id);
                setTitle(filteredData.title);
                setNavigation([...navigation, { text: filteredData.title }]);
            } else {
                setCategories(data.map(categ => categ.childs).flat());
                setTitle("Товары");
                setNavigation([{ text: "Baltichome", link: "/" }, { text: "Товары" }]);
            }
        })()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);


    const Sswiper = () => {
        if (categories.length > 6) {
            return (
                <Swiper
                    spaceBetween={16}
                    grabCursor={true}
                    slidesPerView={6}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        250: {
                            slidesPerView: 1,
                        },
                        380: {
                            slidesPerView: 2,
                        },
                        550: {
                            slidesPerView: 3,
                        },
                        750: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                        1400: {
                            slidesPerView: 6,
                        },

                    }}
                >
                    {
                        categories.map(categori => {
                            return (
                                <SwiperSlide className={styles.category_item}>
                                    <p className={styles.categoty_text}>
                                        {categori.title}
                                    </p>
                                    <img src={categori.img.img} alt="category" />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            );
        }

        return (
            <Swiper
                spaceBetween={16}
                grabCursor={true}
                slidesPerView={6}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                breakpoints={{
                    250: {
                        slidesPerView: categories.length - 2,
                    },
                    380: {
                        slidesPerView: categories.length - 1.5,
                    },
                    550: {
                        slidesPerView: categories.length - 1,
                    },
                    750: {
                        slidesPerView: categories.length - 1,
                    },
                    1024: {
                        slidesPerView: categories.length,
                    },
                    1400: {
                        slidesPerView: categories.length,
                    },

                }}
            >
                {
                    categories.map(categori => {
                        return (
                            <SwiperSlide className={styles.scategory_item}>
                                <p className={styles.categoty_text}>
                                    {categori.title}
                                </p>
                                <img src={categori.img.img} alt="category" />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        );
    }

    //link change

    return (
        <div className={`${styles.wrapper} container`}>
            <div className={`${styles.navigation} pdfprint`}>

                {
                    navigation.map((nav, id) => {
                        return (
                            <>
                                {id ? <img alt="" src={nav_icon} /> : ""}
                                {
                                    nav.link
                                        ? <Link to={nav.link}>{nav.text}</Link>
                                        : <p>{nav.text}</p>
                                }

                            </>
                        )
                    })
                }
            </div >

            <div className={`${styles.dw} pdfprint`}>
                <div className={styles.dw_txt}>
                    <p>{title}</p>
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
                <Main />
            </ModalWrapper>

            <div className={`${styles.category} pdfprint`}>
                <Sswiper />
            </div>


            <div className={styles.catalog_main}>
                <div className={`${styles.catalog_filter} pdfprint`}>
                    <Main />
                </div>
                <div className={styles.catalog_right_container}>
                    <Store />
                </div>

            </div>
        </div >
    );
}

export default Catalog;
