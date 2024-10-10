import {product} from "../../../apiex/baltichome";
import {useProductsStore} from "../../../store";
import {useEffect, useState} from "react";

export const useProductData =  (offset = 0) => {
    const [status, setStatus] = useState({loading: false, error: false});
    const {setProductData, addProductData, material_ids, category_id} = useProductsStore(state => state);
    useEffect( () => {
        const fetchProducts = async () => {
            try{
                console.log("CATEGORYID:", category_id);
                setStatus({...status, loading: true});
                const payload = await product({material_ids, category_id, offset});
                setStatus({...status, loading: false});
                if(offset > 0) addProductData(payload)
                else setProductData(payload);
            } catch (e){
                setStatus({...status, error: true});
            }
        }
        fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [material_ids, category_id, offset]);

    return {isLoading: status.loading, isError: status.error};

}