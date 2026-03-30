import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden w-full min-h-[70vh] flex items-center bg-transparent">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-primary-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-[30vw] h-[30vw] bg-secondary-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none"></div>

      <div className="relative max-w-[1280px] mx-auto px-[5%] py-[10vw] flex flex-col items-center text-center space-y-8">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs font-bold uppercase tracking-widest shadow-sm">
          Leading Healthcare Platform
        </div>
        
        <h1 className="text-[12vw] md:text-[6vw] font-extrabold leading-tight tracking-tight text-main balance">
          {t('common.landing.hero_title')}
        </h1>
        
        <p className="max-w-[700px] text-lg md:text-xl text-secondary leading-relaxed font-medium">
          {t('common.landing.hero_subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
          <Link 
            to="/products" 
            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-primary-600 text-white font-bold text-lg shadow-xl shadow-primary-600/30 hover:bg-primary-700 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3 group"
          >
            <span>{t('common.landing.shop_now')}</span>
            <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          
          <Link 
            to="/about" 
            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-card border-2 border-secondary-100/10 text-main font-bold text-lg hover:bg-secondary-50/10 transition-all duration-300 flex items-center justify-center"
          >
            {t('common.landing.learn_more')}
          </Link>
        </div>
      </div>
    </section>
  );
};
