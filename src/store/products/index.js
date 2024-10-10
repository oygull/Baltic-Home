import create from 'zustand';


const initialState = {
    material_ids: [],
    category_id: null

}

export const useProductsStore = create((set, get) => ({
    ...initialState,
    productsData: [],
    limit: 16,
    lang: 'ru',
    offset: 0,
    category_id: null,
    material_ids: [],
    search: '',
    setProductData: payload => {
        set({productsData: payload});
        
    },
    addProductData: payload => {
        console.log(payload, 'payload')
        if(payload!==[]){
            set({productsData: [...get().productsData, ...payload]});
        }

    },
    setMaterialIds: payload => {
        set({ material_ids: payload });
        
    },
    setCategoryId: payload => {
        set({category_id: payload})
    } ,
    reset: () =>{
        set(initialState)
    }

}))