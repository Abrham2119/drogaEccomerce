export const PRODUCT_ENDPOINTS = {
  GET_ALL: '/products',
  GET_ONE: (id: string) => `/products/${id}`,
  GET_CATEGORIES: '/products/categories',
} as const;
