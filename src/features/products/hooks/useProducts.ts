import { useQuery } from '@tanstack/react-query';
import { ProductService } from '../../../services/ProductService';
import type { ProductQuery } from '../../../types/product';

const PRODUCT_QUERY_KEY = 'products';

export const useProducts = (params?: ProductQuery) => {
  return useQuery({
    queryKey: [PRODUCT_QUERY_KEY, params],
    queryFn: () => ProductService.getAll(params),
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: [PRODUCT_QUERY_KEY, id],
    queryFn: () => ProductService.getById(id),
    enabled: !!id,
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: [PRODUCT_QUERY_KEY, 'categories'],
    queryFn: () => ProductService.getCategories(),
  });
};
