import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import uk from './translation/ukraine'
import en from './translation/english'
import LANGS from './constans.js'

const resources = {
  [LANGS.EN]: {
    translation: en
  },
  [LANGS.UK]: {
    translation: uk
  }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: LANGS.EN,
    // lng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;