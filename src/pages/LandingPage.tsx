import { useTranslation } from 'react-i18next';
import { Hero } from '../features/products/components/Hero';
import { ProductGrid } from '../features/products/components/ProductGrid';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Categories Section */}
        <section className="max-w-[1280px] mx-auto px-[5%] py-[10vw]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 space-y-4 md:space-y-0">
            <div className="space-y-2">
              <h2 className="text-main tracking-tight">{t('common.products.title')}</h2>
              <p className="text-secondary font-medium max-w-[500px]">
                Explore our comprehensive range of high-quality medical equipment and supplies for healthcare professionals.
              </p>
            </div>
            <button className="btn btn-secondary px-8 py-4">
              Browse All
            </button>
          </div>

          <ProductGrid isFeatured={true} />
        </section>

        {/* Benefits Section */}
        <section className="bg-primary-600 text-white py-[10vw] mb-24 rounded-[3rem] mx-[5%] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative max-w-[1000px] mx-auto px-[5%] text-center space-y-12">
            <h2 className="text-white text-[8vw] md:text-[4vw]">Why Choose Droga?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-white">Certified Quality</h3>
                <p className="text-white/80">Every product undergoes rigorous quality control to meet international medical standards.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-white">Fast Delivery</h3>
                <p className="text-white/80">Our advanced logistics network ensures rapid delivery across Ethiopia, even to remote areas.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-white">24/7 Support</h3>
                <p className="text-white/80">Our dedicated support team is always available to help you with procurement and service needs.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
