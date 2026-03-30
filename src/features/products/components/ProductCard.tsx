import { useTranslation } from 'react-i18next';
import type { Product } from '../../../types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="group relative bg-white border border-secondary-100 rounded-[2rem] p-4 flex flex-col space-y-4 hover:shadow-2xl hover:border-primary-100 transition-all duration-500 transform hover:-translate-y-2">
      {/* Badge */}
      {product.inStock && (
        <span className="absolute top-6 right-6 z-10 px-3 py-1 bg-success/10 text-success text-[10px] font-bold uppercase rounded-full border border-success/20">
          {t('common.products.in_stock')}
        </span>
      )}

      {/* Image Container */}
      <div className="relative w-full aspect-square bg-secondary-50 rounded-[1.5rem] overflow-hidden flex items-center justify-center p-6 group-hover:bg-primary-50 transition-colors duration-500">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="max-w-[70%] max-h-[70%] object-contain drop-shadow-2xl group-hover:scale-125 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors duration-500"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-4 pb-4">
        <span className="text-[10px] font-bold text-primary-600 uppercase tracking-[0.2em] mb-1">{product.category}</span>
        <h3 className="text-lg font-bold text-secondary-800 leading-tight mb-2 min-h-[3rem] line-clamp-2">{product.name}</h3>
        
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-3.5 h-3.5 ${i < (product.rating || 0) ? 'text-accent fill-accent' : 'text-secondary-200 fill-secondary-200'}`} viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
          <span className="text-[10px] font-bold text-secondary-400 ml-2">({product.numReviews})</span>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-secondary-400 text-xs font-medium uppercase tracking-wider -mb-1">{product.currency}</span>
            <span className="text-xl font-black text-secondary-900 tracking-tighter">
              {product.price.toLocaleString()}
            </span>
          </div>
          
          <button className="w-12 h-12 rounded-2xl bg-secondary-900 text-white flex items-center justify-center hover:bg-primary-600 transition-all duration-300 shadow-xl shadow-secondary-900/10 hover:shadow-primary-600/20 group">
            <svg className="w-6 h-6 transform group-active:scale-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
