import i18n from "i18next";
import {initReactI18next } from "react-i18next";

export const i18next = i18n
    .use(initReactI18next)
    .init({
         resources: {
            en: {
                translation: {
                    "newsletter.signup,title": "Successful newsletter signup"
                }
            }
        },
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });