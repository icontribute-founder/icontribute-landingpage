import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_FR } from "./fr";
import { TRANSLATIONS_EN } from "./en";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    initImmediate: false,
    resources: {
      EN: {
        translation: TRANSLATIONS_EN,
      },
      FR: {
        translation: TRANSLATIONS_FR,
      },
    },
  });
