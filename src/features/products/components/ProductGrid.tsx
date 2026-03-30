import { ProductCard } from './ProductCard';
import { useProducts } from '../hooks/useProducts';
import { useTranslation } from 'react-i18next';
import type { Product } from '../../../types/product';

// Mock data for initial design demonstration
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Advanced Cardiology Stethoscope',
    description: 'High-sensitivity stethoscope for professional cardiologists.',
    price: 18500,
    currency: 'ETB',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png',
    category: 'Diagnostic Tools',
    inStock: true,
    rating: 4.8,
    numReviews: 124
  },
  {
    id: '2',
    name: 'Digital Sphygmomanometer',
    description: 'Automatic blood pressure monitor with large LCD display.',
    price: 4200,
    currency: 'ETB',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3063/3063825.png',
    category: 'Diagnostic Tools',
    inStock: true,
    rating: 4.5,
    numReviews: 89
  },
  {
    id: '3',
    name: 'N95 Protective Mask - Box of 50',
    description: 'High-filtration protective masks for medical environments.',
    price: 2500,
    currency: 'ETB',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3063/3063836.png',
    category: 'Personal Protection',
    inStock: true,
    rating: 4.9,
    numReviews: 256
  },
  {
    id: '4',
    name: 'Infrared No-Touch Thermometer',
    description: 'Fast and accurate temperature measurement from distance.',
    price: 3800,
    currency: 'ETB',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3063/3063842.png',
    category: 'Monitoring',
    inStock: false,
    rating: 4.7,
    numReviews: 67
  }
];

export const ProductGrid = ({ isFeatured = false }: { isFeatured?: boolean }) => {
  const { t } = useTranslation();
  const { data: products, isLoading, error } = useProducts();

  // For demonstration, use mock products if API fails or returns null/empty
  const displayProducts = Array.isArray(products) && products.length > 0 ? products : MOCK_PRODUCTS;
  
  // Safe slicing
  const limitedProducts = isFeatured ? displayProducts.slice(0, 4) : displayProducts;

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[5vw] py-12">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="animate-pulse bg-secondary-100 rounded-[2rem] aspect-[3/4]"></div>
        ))}
      </div>
    );
  }

  // Handle case where products might be missing entirely (unexpected result)
  if (error && !displayProducts) {
    return (
      <div className="text-center py-24 text-danger font-bold text-lg">
        {t('common.error_loading')}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[4vw]">
        {limitedProducts.map((product) => (
          <ProductCard key={product?.id || Math.random()} product={product} />
        ))}
      </div>
    </div>
  );
};
