// app/[locale]/page.tsx - fixed version
import { getTranslations } from 'next-intl/server';
import { LanguageSwitcher } from '../../components/LanguageSwitcher';
import ClientPageContent from './ClientPageContent';

export default async function HomePage({ params }: { params: { locale: string } }) {
  // Use server-side translations
  const t = await getTranslations({ locale: params.locale });

  console.log('Page params.locale:', params.locale);
  console.log('Server-side translation for welcome:', t('welcome'));

  return (
    <div className='min-h-screen bg-gray-50 py-8'>
      <div className='max-w-4xl mx-auto px-4'>
        <LanguageSwitcher />

        {/* Debug info */}
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
          <p><strong>Debug Info:</strong></p>
          <p>Params locale: {params.locale}</p>
          <p>Server-side welcome text: {t('welcome')}</p>
        </div>

        <main className='bg-white rounded-lg shadow-md p-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-6'>{t('welcome')}</h1>

          <p className='text-lg text-gray-700 mb-8'>{t('hello', { name: 'בן' })}</p>

          <nav className='space-y-4'>
            <h2 className='text-xl font-semibold text-gray-800 mb-4'>Navigation</h2>
            <div className='flex flex-col sm:flex-row gap-4'>
              <a href='#' className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center'>
                {t('navigation.home')}
              </a>
              <a href='#' className='px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-center'>
                {t('navigation.about')}
              </a>
              <a href='#' className='px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-center'>
                {t('navigation.contact')}
              </a>
            </div>
          </nav>
        </main>

        {/* Client-side component for additional debugging */}
        <ClientPageContent />
      </div>
    </div>
  );
}