// components/LanguageSwitcher.tsx
'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18n, type Locale } from '../i18n/config';
export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
	const pathname = usePathname();
	const router = useRouter();

	const switchLocale = (locale: Locale) => {
		const segments = pathname.split('/');
		segments[1] = locale;
		router.push(segments.join('/'));
	};

	return (
		<div className='flex gap-2 mb-4'>
			{i18n.locales.map((locale) => (
				<button
					key={locale}
					onClick={() => switchLocale(locale)}
					className={`px-4 py-2 text-sm font-medium rounded-md border transition-all duration-200 ${
						currentLocale === locale ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
					}`}>
					{locale.toUpperCase()}
				</button>
			))}
		</div>
	);
}
