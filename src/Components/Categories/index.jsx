import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import styles from "./index.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { category } from "../../apiex/baltichome";
import furniture from "../../assets/imgs/lights.png"

const Categoties = () => {

    const [catArr, setCatArr] = useState([]);

    useEffect(() => {
        category({}).then(response => setCatArr(response))
    }, [])


    return (
        <div className={`${styles.wrapper} pdfprint`}>
            <div className="container">
                <Swiper
                    className={styles.categories}
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        250: {
                            slidesPerView: 1,
                        },
                        550: {
                            slidesPerView: 2,
                        },
                        1400: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {
                        catArr.map((el, i) => {
                            return (
                                <SwiperSlide key={i} >
                                    <Link className={styles.category_link} to={"/catalog/" + el.id}>
                                        <div className={styles.category_item}>
                                            <p className={styles.categoty_text}>{el.title}</p>
                                            {/*<img src={el.img.img} alt="category" />*/}
                                            <img src={furniture} alt="category" />
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
}


export default Categoties;
