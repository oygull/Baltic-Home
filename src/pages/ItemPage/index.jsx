import React, {useEffect, useState} from "react";
import styles from "./index.module.scss";
import {Link, useParams} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import 'swiper/css';
import {fetchProductId} from "../../apiex/baltichome";
import arrow from "./arrow.svg"

function ItemPage() {

    const [product, setProduct] = useState({});
    let {id} = useParams();
    const [mainPic, setMainPic] = useState(null);
    const [colorObj, setColorObj] = useState(null);


    useEffect(() => {
        fetchProductId({id}).then(response => setProduct(response))
    },[id])


    useEffect(() => {
        if(Object.keys(product).length) {
            console.log(product)
            setMainPic(product.images[0].img)
            setColorObj(product.colors[0])
        }
    }, [product])

    const changeImg = (item) => {
        setMainPic(item)
    }
    const changeColor = (color) => {
        console.log(color)
        setColorObj(color)
    }

    return (
        <div className={styles.wrapper}>

            <div className="container">
                    <div className={styles.path}>
                        <Link className={styles.path_name} to={'./'}>Baltichome <img alt="arrow" src={arrow}/> </Link>
                        <Link className={styles.path_name} to={'/catalog'}>Каталог <img alt="arrow" src={arrow}/> </Link>
                        <Link className={styles.path_name} to={'/catalog'}>{product?.category?.title}<img alt="arrow" src={arrow}/> </Link>
                        <Link className={styles.path_name} to={'/itempage/:id'}>{product?.title}> </Link>
                    </div>
                    <div className={styles.item_wrap}>
                        <div className={styles.img_box}>
                            <div className={styles.img_container}>
                                <Swiper
                                    className={styles.swiper_container}
                                    spaceBetween={25}
                                    slidesPerView={1}
                                    pagination={{ clickable: true }}
                                    modules={[Navigation, Pagination]}
                                    breakpoints={{
                                        250: {
                                            slidesPerView: 1,
                                        },
                                        1400: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                >
                                    {
                                    product?.images?.map((item
                                    ,i)=>{
                                   return (
                                         <SwiperSlide
                                           onClick={() => changeImg(item.img)}
                                            key={i} className={styles.sub_img}>
                                                <img src={item.img} alt="item"/>
                                              </SwiperSlide>
                                          )
                                   })
                                    }
                                </Swiper>
                            </div>
                            <div className={styles.main_img}>
                                <img src={mainPic} alt="mainImg"/>
                            </div>
                        </div>
                        <div className={styles.item_info}>
                            <h3 className={styles.item_name}>{product.title}</h3>
                            <div className={styles.color_box}>
                                <p>Выберите цвет</p>
                                {
                                    product?.colors?.map((el,i) => (
                                        <button onClick={() => changeColor(el)} key={i} className={styles.color_btn}>
                                            <img src={el.img.img } alt="color"/>
                                        </button>
                                    ))
                                }
                            </div>
                            <p className={styles.color_name}>{colorObj?.title}</p>
                            <p className={styles.item_price}>{(colorObj?.price===null ? product?.price : colorObj?.price)} сум</p>
                            <div className={styles.item_btns}>
                                <button className={styles.buy_btn}>Купить</button>
                                <button className={styles.in_stock}>В наличии</button>
                            </div>
                            <div className={styles.additional_info}>
                                {
                                    product?.characteristics?.map((el,i)=>{

                                         return(
                                                <div key={i} className={styles.additional_item}>
                                                    <p className={styles.item_sub}>{ el.title}</p>
                                                    <p className={styles.item_subtext}>{el.description}</p>
                                                </div>
                                            )
                                    })
                                }
                                <div className={styles.additional_item}>
                                    <p className={styles.item_sub}>Габариты (Д × Г × В)</p>
                                    <p className={styles.item_subtext}>{product.width} мм x {product.height} мм x {product.length} мм x {product.depth} мм</p>
                                </div>
                            </div>
                            <p className={styles.desc_title}>Описание</p>
                            <p className={styles.item_description}>
                                {product.description}
                            </p>
                        </div>
                    </div>

            </div>
        </div>
    );
}

export default ItemPage;
