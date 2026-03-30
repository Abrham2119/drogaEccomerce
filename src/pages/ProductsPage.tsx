import { useTranslation } from 'react-i18next';
import { ProductGrid } from '../features/products/components/ProductGrid';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export const ProductsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-neutral-50 px-[5%] py-[8vw]">
        <div className="max-w-[1280px] mx-auto space-y-12">
          {/* Page Header */}
          <div className="flex flex-col space-y-4">
            <nav className="flex items-center space-x-2 text-sm text-secondary-400 font-medium uppercase tracking-tighter">
              <span className="hover:text-primary-600 cursor-pointer">{t('common.nav.home')}</span>
              <span>/</span>
              <span className="text-secondary-800">{t('common.nav.products')}</span>
            </nav>
            <h1 className="text-secondary-900 text-[10vw] md:text-[5vw] tracking-tighter balance">
              {t('common.products.title')}
            </h1>
          </div>

          {/* Filters Placeholder (Mobile Friendly) */}
          <div className="flex flex-wrap gap-4 pb-8 border-b border-secondary-200">
            {['All', 'Diagnostics', 'Surgical', 'Protection', 'Hospital Furniture'].map(category => (
              <button key={category} className="px-6 py-2.5 rounded-full border border-secondary-200 text-secondary-600 text-sm font-bold hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300">
                {category}
              </button>
            ))}
          </div>

          <ProductGrid />
        </div>
      </main>

      <Footer />
    </div>
  );
};
