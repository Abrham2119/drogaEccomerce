import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'am' : 'en');
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-[5%] py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center space-x-2 group">
          <span className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white text-xl transform group-hover:rotate-12 transition-transform duration-300">D</span>
          <span className="text-secondary-800 tracking-tight">Droga<span className="text-primary-600">Ecommerce</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-secondary-600 font-medium hover:text-primary-600 transition-colors uppercase text-sm tracking-wide">{t('common.nav.home')}</Link>
          <Link to="/products" className="text-secondary-600 font-medium hover:text-primary-600 transition-colors uppercase text-sm tracking-wide">{t('common.nav.products')}</Link>
          <button onClick={toggleLanguage} className="btn-secondary px-3 py-1 rounded text-xs font-semibold uppercase tracking-tighter">
            {i18n.language === 'en' ? 'አማርኛ' : 'English'}
          </button>
          <Link to="/login" className="btn btn-primary text-sm shadow-md hover:shadow-primary-600/20">{t('common.nav.login')}</Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleLanguage} className="text-xs font-semibold text-secondary-600">
            {i18n.language === 'en' ? 'አማርኛ' : 'English'}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-secondary-800 focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-4 animate-slideDown shadow-lg">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-secondary-600 font-medium hover:text-primary-600">{t('common.nav.home')}</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)} className="block text-secondary-600 font-medium hover:text-primary-600">{t('common.nav.products')}</Link>
          <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block btn btn-primary text-center">{t('common.nav.login')}</Link>
        </div>
      )}
    </nav>
  );
};
