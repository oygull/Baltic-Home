import React from "react";
import styles from "./index.module.scss"
import aboutImg from "./imgs/aboutImg.jpg"

function About() {

    return (
        <div className={styles.wrapper}>
          <div className={styles.about_info}>
              <div>
                  <h3 className={styles.about_title}>IdealLux</h3>
                  <p className={styles.about_text}> Основанная в 1974 году, компания Ideal Lux родилась как маленькая реальность, которой руководила интуиция создания актуального, но в то же время доступного для широких слоев населения продукта - цель, которую мы преследуем и сегодня. </p>
                  <p className={styles.about_text}>   Наша цель - сохранить в рамках одного уникального бренда максимально широкое разнообразие стилей, адекватных тенденциям отрасли, которые могут варьироваться от классического декоративного стиля до современного, от продуктов для улицы до технических изделий. Внимание к людям занимает центральное место.</p>
                  <p className={styles.about_text}>   Мы слушаем, чтобы лучше понять их потребности, чтобы ответить не только на функцию, но и, что самое важное, на стиль жизни. Работа на пяти различных континентах придает нам международную особенность, которая не изменила наш образ существования и деятельности как компании: энтузиазм в отношении хорошо сделанных вещей, отношение к прозрачности и привычка к простоте</p>
              </div>
          </div>
            <div className={styles.about_img}>
                <img src={aboutImg} alt="aboutImg"/>
            </div>
            <h3 className={styles.about_title_mobile}>IdealLux</h3>
        </div>
    );
}

export default About;
