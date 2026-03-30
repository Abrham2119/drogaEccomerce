import apiClient from '../core/apiClient';
import { SUPPLIER_ENDPOINTS } from '../api/endpoints/supplierEndpoints';
import type { CreateSupplierDto, QueryParams, Supplier, UpdateSupplierDto } from '../types/supplier';

export class SupplierService {
  static async getAll(params?: QueryParams): Promise<Supplier[]> {
    const response = await apiClient.get<Supplier[]>(SUPPLIER_ENDPOINTS.GET_ALL, { params });
    return response.data;
  }

  static async getById(id: string): Promise<Supplier> {
    const response = await apiClient.get<Supplier>(SUPPLIER_ENDPOINTS.GET_ONE(id));
    return response.data;
  }

  static async create(data: CreateSupplierDto): Promise<Supplier> {
    const response = await apiClient.post<Supplier>(SUPPLIER_ENDPOINTS.CREATE, data);
    return response.data;
  }

  static async update(id: string, data: UpdateSupplierDto): Promise<Supplier> {
    const response = await apiClient.put<Supplier>(SUPPLIER_ENDPOINTS.UPDATE(id), data);
    return response.data;
  }

  static async delete(id: string): Promise<void> {
    await apiClient.delete(SUPPLIER_ENDPOINTS.DELETE(id));
  }
}
