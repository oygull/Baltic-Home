import axios from "axios";
import i18n from 'i18next';

const URL = process.env.REACT_APP_API_URL || "https://baltichome-backend-dev.ssd.uz/api";

const instance = axios.create({
    baseURL: URL,
    timeout: 30000,
})

instance.interceptors.request.use((config) => {
    config.headers['Accept-Language'] = i18n?.language || "ru";
    return config;  
});

function isOk(status) {
    if (status >= 200 && status <= 299) return true;
    return false;
}

// Addresses  ** soon will be updated **

export const address = async () => {
    const { status, data } = await instance.get('/addresses', {
       
    });

    if (!isOk(status)) throw new Error(`HTTP status code ${status}`);
    return data?.data;
}

// Categories

export const category = async () => {
    const { status, data } = await instance.get('/categories', {
       
    });
    if (!isOk(status)) throw new Error(`HTTP status code ${status}`);
    return data?.data;
}

// Products API

export const product = async ({  limit = 16, offset= 0, category_id = null, material_ids = [], search = '' }) => {
    const { status, data } = await instance.get('/products', {
        params: {
            limit,
            offset,
            category_id,
            material_ids,
            search
        },
    });
    if (!isOk(status)) throw new Error(`HTTP status code ${status}`);
    return data?.data;
}
// Product filter
export const product_filter = async ({ category_id = null }) => {
    const { status, data } = await instance.get('/products/filters', {
        params: {
            category_id
        }
    });

    if (!isOk(status)) throw new Error(`HTTP status code ${status}`);
    return data?.data;
}

//Product ID
export const fetchProductId = async ({ id = null }) => {
    const { status, data } = await instance.get('/products/' + id, {
        params: {
            id
        }
    });

    if (!isOk(status)) throw new Error(`HTTP status code ${status}`);
    return data?.data;
}

//products Search
export const fetchProductSearch = async ({ search = ''}) => {
   try {
       const { data } = await instance.get('/products/context/search?search=' + search, {
         
       });
       return data?.data;
   }
   catch (e){
       return []
   }

    // if (!isOk(status)) throw new Error(`HTTP status code ${status}`);

}

export const notification = async ({ telephone, product_id = null }) => {
    if (!telephone) throw new Error("Phone is required!!!");
    const { status, data } = await instance.post('/telegram/notification/send', {
        params: {
            product_id,
            telephone
        }
    });

    if (!isOk(status)) throw new Error(`HTTP status code ${status}`);
    return data;
}

//Settings

export const setting = async () => {
    const { status, data } = await instance.get('/settings', {});
    if (!isOk(status)) throw new Error(`HTTP status code ${status}`);
    return data?.data;
}

//Slider

export const slider = async ({ lang = 'ru' }) => {
    const { status, data } = await instance.get('/sliders', {
        headers: {
            'Accept-Language': lang
        }
    });
    if (!isOk(status)) throw new Error(`HTTP status code ${status}`);
    return data?.data;
}