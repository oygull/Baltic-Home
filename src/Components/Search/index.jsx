import React, {useEffect, useRef, useState} from "react";
import styles from "./index.module.scss"
import searchIcon from "./imgs/search.svg"
import closeIcon from "./imgs/close.svg"
import {fetchProductSearch} from "../../apiex/baltichome";
import {useOutside} from "../Header/useOutsideClick";

const Search = React.forwardRef(({setSearchWrap, searchWrap}, ref) => {

    const [search, setSearch] = useState('');
    const searchTargetRef = useRef(null);
    const [productsSearch, setProductsSearch] = useState({products: []})
    useOutside(ref, searchTargetRef, () => setSearchWrap(false));
    const getValue = e => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        fetchProductSearch({search}).then(response => setProductsSearch(response))
    },[ search])


    console.log(productsSearch.products)


    return (
        <div ref={searchTargetRef} className={`${styles.wrapper} ${searchWrap ? styles.open_search : ""}`}>
            <div className={styles.clean}>Очистить</div>
            <div className={styles.search}>
                <div className={styles.search_box}>
                    <img src={searchIcon} alt="searchIcon"/>
                    <input onChange={getValue} type="text" placeholder="Введите запрос"/>
                    <div className={styles.search_items}>
                        {
                            productsSearch.products?.map((el,i) =>{
                                return(
                                    <div key={i} className={styles.search_item}>
                                        <img className={styles.search_img} alt="img" src={el.img.img}/>
                                        <p className={styles.search_name}> {el.title} </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <button onClick={()=>setSearchWrap(false)} className={styles.close_btn}>
                    <img src={closeIcon} alt="closeIcon"/>
                </button>
            </div>
        </div>
    );
})

export default Search;