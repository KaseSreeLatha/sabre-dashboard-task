import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locals/en.json';
import es from './locals/es.json';
 
// Detect browser language
const detectBrowserLanguage = () => {
  const browserLang = navigator.language || navigator.languages[0];
 
  // Extract the language code (e.g., 'en' from 'en-US')
  const langCode = browserLang.split('-')[0];
 
  // Check if we support this language, otherwise fallback to English
  const supportedLanguages = ['en', 'es'];
  return supportedLanguages.includes(langCode) ? langCode : 'en';
};
 
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      es: {
        translation: es
      }
    },
    lng: detectBrowserLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });
 
export default i18n;