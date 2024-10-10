import React, {useEffect, useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from "./index.module.scss"
import nextArrow from "./imgs/next-arrow.svg"
import prevArrow from "./imgs/prevIcon.svg"
import {slider} from "../../apiex/baltichome";

const Slider = () => {

    const [sliderArr, setSliderArr] = useState([]);

    useEffect(() => {
        slider({}).then(response => setSliderArr(response))
    },[])



        return (
            <Carousel
                infiniteLoop={true}
                autoPlay={true}
                loop={true}
                interval={5000}
                showThumbs={false}
                emulateTouch={true}
                className={`${styles.carusel_block} pdfprint`}
                showStatus={false}
                renderArrowNext={(nextElemFunc) => {
                    return (
                        <div onClick={nextElemFunc} className={styles.next_arrow}>
                            <img src={nextArrow} alt="Icon"/>
                        </div>
                    )
                }}
               renderArrowPrev={(prevElemFunc)=>{
                   return(
                      <div onClick={prevElemFunc} className={styles.prev_icon}>
                          <img src={prevArrow} alt="Icon"/>
                      </div>
                  )
               }} 
            >
                {
                    sliderArr.map((el,i)=>{
                        return(
                            <div className={styles.slider_item} key={i}>
                                <img src={el.img} alt="img1"/>
                                <div className="slider_content">
                                    <h3 className={styles.banner_title_main}>{el.title}</h3>
                                    <p className={styles.banner_text_main}> {el.description}</p>
                                    <button className={styles.banner_btn_main}>Открыть каталог</button>
                                </div>
                            </div>
                        )
                    })
                }

            </Carousel>
        );
    }


export  default Slider;

