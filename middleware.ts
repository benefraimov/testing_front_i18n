// middleware.ts (in root directory)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './i18n/config';

function getLocale(request: NextRequest): string {
	// Check if locale is in pathname
	const pathname = request.nextUrl.pathname;
	const pathnameIsMissingLocale = i18n.locales.every((locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);

	if (pathnameIsMissingLocale) {
		// Get locale from Accept-Language header
		const acceptLanguage = request.headers.get('accept-language');
		if (acceptLanguage) {
			const preferredLocale = acceptLanguage.split(',')[0].split('-')[0].toLowerCase();

			if (i18n.locales.includes(preferredLocale as any)) {
				return preferredLocale;
			}
		}
	}

	return i18n.defaultLocale;
}

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;
	const pathnameIsMissingLocale = i18n.locales.every((locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);

	if (pathnameIsMissingLocale) {
		const locale = getLocale(request);
		return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
	}
}

export const config = {
	matcher: [
		// Skip all internal paths (_next)
		'/((?!_next|api|favicon.ico).*)',
	],
};
