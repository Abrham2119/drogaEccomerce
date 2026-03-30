export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export interface CreateSupplierDto {
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
}

export interface UpdateSupplierDto extends Partial<CreateSupplierDto> {
  id: string;
}

export interface QueryParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  order?: 'asc' | 'desc';
}
