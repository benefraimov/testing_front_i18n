// components/ClientNotFound.tsx
'use client';

import { usePathname } from 'next/navigation';
import { i18n, type Locale } from '../i18n/config';

interface ClientNotFoundProps {
	dictionaries: {
		[key: string]: any;
	};
}

export default function ClientNotFound({ dictionaries }: ClientNotFoundProps) {
	const pathname = usePathname();

	// Extract locale from pathname
	const segments = pathname.split('/');
	const localeFromPath = segments[1] as Locale;
	const locale = i18n.locales.includes(localeFromPath) ? localeFromPath : i18n.defaultLocale;

	const dict = dictionaries[locale];

	return (
		<div className='min-h-screen bg-gray-50 flex items-center justify-center'>
			<div className='max-w-md mx-auto text-center px-4'>
				<div className='bg-white rounded-lg shadow-md p-8'>
					<div className='mb-6'>
						<h1 className='text-6xl font-bold text-gray-300 mb-2'>404</h1>
						<h2 className='text-2xl font-semibold text-gray-800 mb-4'>{dict.errors.notFound}</h2>
						<p className='text-gray-600 mb-8'>{dict.errors.notFoundDescription}</p>
					</div>

					<a href={`/${locale}`} className='inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium'>
						{dict.errors.goBack}
					</a>
				</div>
			</div>
		</div>
	);
}
