import React, {useState} from "react";
import styles from "./index.module.scss";
import { Link } from 'react-router-dom'
import Form from "../Form";
import image from "../../assets/imgs/item2.png"

function Item({el}) {

    const [openModal, setOpenModal] = useState(false);

    const openModalFunc = () => {
        setOpenModal(true);
        document.getElementsByClassName('dark-bg').classList.add('dark-bg');
    }

    return (
        <div className={styles.item_wrap}>
            <Link className={styles.wrapper} to={`/itempage/${el.id}`}>
                    <div className={styles.img_box}>
                        {/*<img alt="img" src={el.img.img}/>*/}
                        <img alt="img" src={image}/>
                    </div>
                    <h3 className={styles.item_title}>{el.title}</h3>

                    <p className={styles.item_price}>{el.price} сум</p>

            </Link>
            <button onClick={openModalFunc} className={styles.add_btn}>В корзину</button>
            {
                openModal && <Form openModal={openModal} setOpenModal={setOpenModal}/>
            }
        </div>
    );
}

export default Item;
