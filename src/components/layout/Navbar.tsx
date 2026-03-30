import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ColorPalette } from './ColorPalette';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-card border-b sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-[5%] py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center space-x-2 group">
          <span className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white text-xl transform group-hover:rotate-12 transition-transform duration-300">D</span>
          <span className="text-main tracking-tight">Droga<span className="text-primary-600">Ecommerce</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-secondary font-medium hover:text-primary-600 transition-colors uppercase text-sm tracking-wide">{t('common.nav.home')}</Link>
          <Link to="/products" className="text-secondary font-medium hover:text-primary-600 transition-colors uppercase text-sm tracking-wide">{t('common.nav.products')}</Link>
          <div className="relative">
            <select 
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="bg-card text-secondary font-bold text-xs uppercase tracking-tighter px-3 py-1.5 rounded-lg border border-secondary-100/20 cursor-pointer focus:outline-none hover:border-primary-500 transition-colors appearance-none pr-8"
            >
              <option value="en">EN</option>
              <option value="am">AM</option>
              <option value="ar">AR</option>
            </select>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-secondary-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
          <Link to="/login" className="btn btn-primary text-sm shadow-md hover:shadow-primary-600/20">{t('common.nav.login')}</Link>
          <ColorPalette />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <select 
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="bg-card text-secondary font-bold text-xs uppercase tracking-tighter px-2 py-1 rounded border border-secondary-100/20 focus:outline-none"
          >
            <option value="en">EN</option>
            <option value="am">AM</option>
            <option value="ar">AR</option>
          </select>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-main focus:outline-none"
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
        <div className="md:hidden bg-card border-t p-4 space-y-4 animate-slideDown shadow-lg">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-secondary font-medium hover:text-primary-600">{t('common.nav.home')}</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)} className="block text-secondary font-medium hover:text-primary-600">{t('common.nav.products')}</Link>
          <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block btn btn-primary text-center">{t('common.nav.login')}</Link>
          <div className="pb-2 border-b border-secondary-100/10">
            <ColorPalette />
          </div>
        </div>
      )}
    </nav>
  );
};
