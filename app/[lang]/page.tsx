// app/[lang]/page.tsx
import { Locale } from '../../i18n/config';
import { getDictionary } from '../../i18n/dictionaries';
import { LanguageSwitcher } from '../../components/LanguageSwitcher';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
	const dict = await getDictionary(lang);

	return (
		<div className='min-h-screen bg-gray-50 py-8'>
			<div className='max-w-4xl mx-auto px-4'>
				<LanguageSwitcher currentLocale={lang} />

				<main className='bg-white rounded-lg shadow-md p-8'>
					<h1 className='text-3xl font-bold text-gray-900 mb-6'>{dict.welcome}</h1>

					<p className='text-lg text-gray-700 mb-8'>{dict.hello.replace('{{name}}', 'בן')}</p>

					<nav className='space-y-4'>
						<h2 className='text-xl font-semibold text-gray-800 mb-4'>Navigation</h2>
						<div className='flex flex-col sm:flex-row gap-4'>
							<a href='#' className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center'>
								{dict.navigation.home}
							</a>
							<a href='#' className='px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-center'>
								{dict.navigation.about}
							</a>
							<a href='#' className='px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-center'>
								{dict.navigation.contact}
							</a>
						</div>
					</nav>
				</main>
			</div>
		</div>
	);
}
