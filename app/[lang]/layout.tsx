// app/[lang]/layout.tsx
import { Inter } from 'next/font/google';
import { i18n, type Locale } from '../../i18n/config';
import { getDictionary } from '../../i18n/dictionaries';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({ children, params: { lang } }: { children: React.ReactNode; params: { lang: Locale } }) {
	return (
		<html lang={lang}>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
