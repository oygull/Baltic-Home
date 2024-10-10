import create from 'zustand';
import ruIcon from "../../Components/Header/img/ru.svg";
import uzIcon from "../../Components/Header/img/uz.svg";
import enIcon from "../../Components/Header/img/en.svg";


export const useLanguageStore = create((set, get) => ({
    languages: [
        {
            id: 1,
            language: 'Русский',
            img: ruIcon,
            translationLang: "Ру",
            viewLang: "ru"
        },
        {
            id: 2,
            language: 'O’zbekcha',
            img: uzIcon,
            translationLang: "O’z",
            viewLang: "uz"
        },
        {
            id: 3,
            language: 'English',
            img: enIcon,
            translationLang: "En",
            viewLang: "en"
        },
    ],
    selectedLanguage: 'ru',
    setSelectedLanguage: lang => {
        set({language: lang});
    }
}))