import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-secondary-900 text-white rounded-t-[3rem] mt-24">
      <div className="max-w-[1280px] mx-auto px-[5%] py-[10vw] md:py-[5vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[8vw] md:gap-[4vw]">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="text-2xl font-bold flex items-center space-x-2">
              <span className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white text-xl">D</span>
              <span className="text-white tracking-tight">Droga<span className="text-primary-600">Ecommerce</span></span>
            </div>
            <p className="text-secondary-400 leading-relaxed font-medium">
              Revolutionizing healthcare distribution across Ethiopia with technology-driven supply chain solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white tracking-wide">{t('common.nav.products')}</h3>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-secondary-400 hover:text-primary-400 transition-colors">Diagnostic Tools</Link></li>
              <li><Link to="/products" className="text-secondary-400 hover:text-primary-400 transition-colors">Hospital Furniture</Link></li>
              <li><Link to="/products" className="text-secondary-400 hover:text-primary-400 transition-colors">Surgical Instruments</Link></li>
              <li><Link to="/products" className="text-secondary-400 hover:text-primary-400 transition-colors">Personal Protection</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white tracking-wide">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-secondary-400 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-secondary-400 hover:text-primary-400 transition-colors">Contact</Link></li>
              <li><Link to="/terms" className="text-secondary-400 hover:text-primary-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-secondary-400 hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white tracking-wide">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-secondary-400">
                <svg className="w-6 h-6 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Addis Ababa, Ethiopia, Central Business District</span>
              </li>
              <li className="flex items-center space-x-3 text-secondary-400">
                <svg className="w-6 h-6 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>+251 911 234 567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-secondary-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-secondary-500 text-sm">© 2026 Droga Ecommerce. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center text-white hover:bg-primary-600 transition-colors"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center text-white hover:bg-primary-600 transition-colors"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
