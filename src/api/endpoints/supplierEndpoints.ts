export const SUPPLIER_ENDPOINTS = {
  GET_ALL: '/suppliers',
  GET_ONE: (id: string) => `/suppliers/${id}`,
  CREATE: '/suppliers',
  UPDATE: (id: string) => `/suppliers/${id}`,
  DELETE: (id: string) => `/suppliers/${id}`,
} as const;
