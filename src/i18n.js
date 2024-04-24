import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";


i18n
.use(LanguageDetector)
.use(initReactI18next).init({
    debug:true,
    fallbackLng: "ar",
    returnObjects:true,
    resources: {
        en:{
            translation:{
                greeting : "Hello, Welcom!"
            }
        },
        ar:{
            translation:{
                greeting : "!أهلا, مرحبا"
        }
        },
        fr:{
            translation:{
                greeting : "Bonjour, Bienvenue!"
            }
        }
    } 
})