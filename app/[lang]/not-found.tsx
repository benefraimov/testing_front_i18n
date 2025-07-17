import { i18n } from '../../i18n/config';
import { getDictionary } from '../../i18n/dictionaries';
import ClientNotFound from '../../components/ClientNotFound';

export default async function LocalizedNotFound() {
	// Pre-load dictionaries for all locales
	const dictionaries: any = {};

	for (const locale of i18n.locales) {
		dictionaries[locale] = await getDictionary(locale);
	}

	return <ClientNotFound dictionaries={dictionaries} />;
}
