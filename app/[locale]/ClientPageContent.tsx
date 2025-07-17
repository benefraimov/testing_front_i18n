// app/[locale]/ClientPageContent.tsx
'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function ClientPageContent() {
  const t = useTranslations();
  const locale = useLocale();

  console.log('Client-side locale from useLocale():', locale);
  console.log('Client-side translation for welcome:', t('welcome'));

  return (
    <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mt-4">
      <p><strong>Client-side Debug Info:</strong></p>
      <p>Client locale: {locale}</p>
      <p>Client welcome text: {t('welcome')}</p>
    </div>
  );
}