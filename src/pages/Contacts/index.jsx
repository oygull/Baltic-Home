import React from "react";
import styles from "./index.module.scss"
import {Link} from "react-router-dom";
import { YMaps, Map, Placemark  } from "react-yandex-maps";

const addressArr = [
    {
        address: 'RU 440642, Новгородская область, город Истра, пл. Славы, 36',
        lat: 40.283652,
        lng: 67.780662
    },
    {
        address: 'RU 095135, Нижегородская область, город Озёры, шоссе Бухарестская, 35',
        lat: 40.313370,
        lng: 67.603631
    }
]

function Contacts() {

    return (
        <div className={styles.wrapper}>
            <div className="container">
                <h3 className={styles.contacts_title}>Служба поддержки клиентов</h3>
                <p className={styles.contacts_text}>Есть вопросы по вашему заказу?</p>
                <p className={styles.contacts_text}>Позвоните нам по телефону <Link className={styles.num_link} to={''}>+99899 927 44 44</Link> </p>
                <h3 className={styles.contacts_title}>Контакты для сотрудничества</h3>
                <p className={styles.contacts_text}>Если у вас есть вопросы о том, как стать нашим партнером, звоните нам по телефону <Link className={styles.num_link} to={''}>+99899 927 44 44</Link></p>
                {
                    addressArr.map((el,i)=>{
                        return(
                            <div  key={i}>
                                <h3 className={styles.contacts_title}>{el.address}</h3>
                            </div>
                        )
                    })
                }
                <div className={styles.map_wrap}>
                    <YMaps>
                        <Map
                            width={'100%'}
                            height={'100%'}
                            defaultState={{ center: [addressArr[0].lat, addressArr[0].lng], zoom: 12 }} >
                            {
                                addressArr.map((spot,i)=>(
                                    <Placemark
                                        key={i}
                                        geometry={ [spot.lat, spot.lng] }
                                        onClick={ () => {

                                        } }
                                    />
                                ))
                            }

                        </Map>
                    </YMaps>

                </div>
            </div>
        </div>
    );
}

export default Contacts;
