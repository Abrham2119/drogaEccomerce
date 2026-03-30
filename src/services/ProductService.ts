import apiClient from '../core/apiClient';
import { PRODUCT_ENDPOINTS } from '../api/endpoints/productEndpoints';
import type { Product, ProductQuery } from '../types/product';

export class ProductService {
  static async getAll(params?: ProductQuery): Promise<Product[]> {
    const response = await apiClient.get<Product[]>(PRODUCT_ENDPOINTS.GET_ALL, { params });
    return response.data;
  }

  static async getById(id: string): Promise<Product> {
    const response = await apiClient.get<Product>(PRODUCT_ENDPOINTS.GET_ONE(id));
    return response.data;
  }

  static async getCategories(): Promise<string[]> {
    const response = await apiClient.get<string[]>(PRODUCT_ENDPOINTS.GET_CATEGORIES);
    return response.data;
  }
}
