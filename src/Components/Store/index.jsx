import React, { useState, useEffect } from "react";
import styles from "./index.module.scss"
import Item from "../Item";
import { useProductData } from "./lib/useProductData";
import { useProductsStore } from "../../store";
function Store() {
    const [offset, setOffset] = useState(0)
    const { isLoading } = useProductData(offset);
    const { productsData, material_ids, category_id, reset } = useProductsStore(state => state);
    console.log(productsData, material_ids, category_id)
    useEffect(() => {
        if (material_ids?.length || category_id !== null) {
            reset();
        }

    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.store_inner}>
                {isLoading ?
                    <div className={`${styles.loader_box} pdfprint`}> <div className={`${styles.loader} pdfprint`}></div> </div>
                    :
                    productsData?.map((el, i) => {
                        return (
                            <Item key={i} el={el} />
                        )
                    })
                }
            </div>
            <div className={`${styles.btn_box} pdfprint`}>
                <button className={styles.show_btn} onClick={() => setOffset(prev => prev += 16)}>Показать еще</button>
            </div>
        </div>
    );
}

export default Store;
