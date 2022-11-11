import i18n, {use} from "i18next";
import {initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n.use(initReactI18next)
    use(Backend)
    .init({
        ns:['fpc', 'shared'],
        defaultNS: 'fpc',
        debug: true,
        lng: "en",
        fallbackLng: "en",
        react:{
            nsMode: 'default',
        }
    });