import item1 from "../imgs/item1.png";
import item2 from "../imgs/item2.png";
import item3 from "../imgs/item3.png";
import item4 from "../imgs/item4.png";
import mint from "../imgs/mint.svg";
import beige from "../imgs/beige.svg";

const storeArr = [
    {
        id: 1,
        category: {
            id: 1,
            title: "Cadegory Name"
        },
        brand: {
            id: 1,
            title: "Brand Name"
        },
        material: {
            id: 1,
            title: "Material Name"
        },
        title: 'Грета,Известность Бежевый',
        price: 11230000,
        oldPrice: 1230000,
        width: 2130,
        height: 1030,
        length: 1040,
        depth: 355,
        description: `Всегда приятно окунуться в домашний уют и спокойствие. Если вы ищите диван, который будет соответствовать данному аспекту, то LUKA станет идеальным кандидатом. Силиконизированные гранулы в подушках и спинке. Пружины типа Pocket в посадочной части и древесина бука в качестве основы конструкции.`,
        characteristics:[
            {
                title: 'Наполнение',
                desc: 'Силиконизированные гранулы'
            },
            {
                title: 'Каркас',
                desc: 'Древесина бука, фанерные доски'
            }
        ],
        imgsArr: [item1, item4, item2],
        colors: [
            {
                price: 12230000,
                title: 'Verdura Mint',
                url: mint,
                is_available: true
            },
            {
                price: 10230000,
                title: 'Light Beige',
                url: beige,
                is_available: false
            }
        ]
    },
    {
        id: 2,
        category: {
            id: 2,
            title: "Cadegory Name"
        },
        brand: {
            id: 2,
            title: "Brand Name"
        },
        material: {
            id: 2,
            title: "Material Name"
        },
        title: 'Грета,Известность Бежевый',
        price: 11230000,
        oldPrice: 1230000,
        width: 2130,
        height: 1030,
        length: 1040,
        depth: 355,
        description: `Всегда приятно окунуться в домашний уют и спокойствие. Если вы ищите диван, который будет соответствовать данному аспекту, то LUKA станет идеальным кандидатом. Силиконизированные гранулы в подушках и спинке. Пружины типа Pocket в посадочной части и древесина бука в качестве основы конструкции.`,
        characteristics:[
            {
                title: 'Наполнение',
                desc: 'Силиконизированные гранулы'
            },
            {
                title: 'Каркас',
                desc: 'Древесина бука, фанерные доски'
            }
        ],
        imgsArr: [item2, item4, item3],
        colors: [
            {
                price: 12230000,
                title: 'Verdura Mint',
                url: mint,
                is_available: true
            },
            {
                price: 10230000,
                title: 'Light Beige',
                url: beige,
                is_available: false
            }
        ]
    },
    {
        id: 3,
        category: {
            id: 3,
            title: "Cadegory Name"
        },
        brand: {
            id: 3,
            title: "Brand Name"
        },
        material: {
            id: 3,
            title: "Material Name"
        },
        title: 'Грета,Известность Бежевый',
        price: 11230000,
        oldPrice: 1230000,
        width: 2130,
        height: 1030,
        length: 1040,
        depth: 355,
        description: `Всегда приятно окунуться в домашний уют и спокойствие. Если вы ищите диван, который будет соответствовать данному аспекту, то LUKA станет идеальным кандидатом. Силиконизированные гранулы в подушках и спинке. Пружины типа Pocket в посадочной части и древесина бука в качестве основы конструкции.`,
        characteristics:[
            {
                title: 'Наполнение',
                desc: 'Силиконизированные гранулы'
            },
            {
                title: 'Каркас',
                desc: 'Древесина бука, фанерные доски'
            }
        ],
        imgsArr: [item3, item4, item2],
        colors: [
            {
                price: 12230000,
                title: 'Verdura Mint',
                url: mint,
                is_available: true
            },
            {
                price: 10230000,
                title: 'Light Beige',
                url: beige,
                is_available: false
            }
        ]
    },
    {
        id: 4,
        category: {
            id: 4,
            title: "Cadegory Name"
        },
        brand: {
            id: 4,
            title: "Brand Name"
        },
        material: {
            id: 4,
            title: "Material Name"
        },
        title: 'Грета,Известность Бежевый',
        price: 11230000,
        oldPrice: 1230000,
        width: 2130,
        height: 1030,
        length: 1040,
        depth: 355,
        description: `Всегда приятно окунуться в домашний уют и спокойствие. Если вы ищите диван, который будет соответствовать данному аспекту, то LUKA станет идеальным кандидатом. Силиконизированные гранулы в подушках и спинке. Пружины типа Pocket в посадочной части и древесина бука в качестве основы конструкции.`,
        characteristics:[
            {
                title: 'Наполнение',
                desc: 'Силиконизированные гранулы'
            },
            {
                title: 'Каркас',
                desc: 'Древесина бука, фанерные доски'
            }
        ],
        imgsArr: [item4, item2, item3],
        colors: [
            {
                price: 12230000,
                title: 'Verdura Mint',
                url: mint,
                is_available: true
            },
            {
                price: 10230000,
                title: 'Light Beige',
                url: beige,
                is_available: false
            }
        ]
    },
]


export default storeArr;