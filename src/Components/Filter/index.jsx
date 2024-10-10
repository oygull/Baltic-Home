import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { product_filter } from "../../apiex/baltichome/index.js";
import { useParams } from "react-router-dom";
import { useProductsStore } from "../../store";

function Main() {
    const { material_ids, setMaterialIds } = useProductsStore(state => state);
    const [filters, setFilter] = useState([]);
    let { id } = useParams();
    useEffect(() => {
        (async () => {
            setFilter(await product_filter({ category_id: id || null }));
        })()
    }, [id])
    const Logic = (id) =>{
        const index = material_ids.findIndex(i => i === id)
        if (index === -1){
            setMaterialIds([...material_ids.filter(i => i !== id), id])
        } else {
            setMaterialIds([...material_ids.filter(i => i !== id)])    
        }
    }
    return (
        <div className={`${styles.wrapper} pdfprint`}>
            <div className={styles.material_wrapper}>
                <h3 className={styles.subtitle}>{filters?.material?.filter_title}</h3>
                {
                    filters?.material?.items?.map(filter => {
                        return (
                            
                            <div className={styles.material_item}>
                                <label className={styles.check_box}>
                                    <input type="checkbox" onClick = {() => Logic(filter.id)} />
                                    <span className={styles.checkmark}></span>
                                    <p className={styles.label_text}>{filter.title}</p>
                                </label>
                            </div>

                        )
                    })


                }
            </div>


        </div>
    );
}
export default Main;
