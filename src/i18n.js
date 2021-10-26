import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
 
import Backend from 'i18next-http-backend';
 
//based on browser language
const userLang = navigator.language || navigator.userLanguage; 
const defaultLocale = userLang.substring(0, 2);

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: defaultLocale,
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },

  });
 
export default i18n;