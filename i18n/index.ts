import NextI18Next from 'next-i18next';
import path from 'path';

const nextI18Next = new NextI18Next({
    otherLanguages: ['en', 'de', 'fr', 'se', 'ru'],
    defaultLanguage: 'en',
    localePath: path.resolve('./public/static/locales'),
    browserLanguageDetection: false,
});

export default nextI18Next;
