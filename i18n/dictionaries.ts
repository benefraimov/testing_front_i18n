// i18n/dictionaries.ts
import 'server-only';
import { Locale } from './config';

const dictionaries = {
	en: () => import('./dictionaries/en.json').then((module) => module.default),
	he: () => import('./dictionaries/he.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]?.() ?? dictionaries.en();
