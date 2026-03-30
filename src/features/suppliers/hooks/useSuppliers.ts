import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { SupplierService } from '../../../services/SupplierService';
import type { CreateSupplierDto, QueryParams, UpdateSupplierDto } from '../../../types/supplier';

const SUPPLIER_QUERY_KEY = 'suppliers';

// Query Hooks
export const useSuppliers = (params?: QueryParams) => {
  return useQuery({
    queryKey: [SUPPLIER_QUERY_KEY, params],
    queryFn: () => SupplierService.getAll(params),
  });
};

export const useSupplier = (id: string) => {
  return useQuery({
    queryKey: [SUPPLIER_QUERY_KEY, id],
    queryFn: () => SupplierService.getById(id),
    enabled: !!id,
  });
};

// Mutation Hooks
export const useCreateSupplier = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: (data: CreateSupplierDto) => SupplierService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [SUPPLIER_QUERY_KEY] });
      toast.success(t('suppliers.success_create'));
    },
    onError: () => {
      toast.error(t('suppliers.error_create'));
    },
  });
};

export const useUpdateSupplier = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateSupplierDto }) => SupplierService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [SUPPLIER_QUERY_KEY] });
      toast.success(t('suppliers.success_update'));
    },
    onError: () => {
      toast.error(t('suppliers.error_update'));
    },
  });
};

export const useDeleteSupplier = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: (id: string) => SupplierService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [SUPPLIER_QUERY_KEY] });
      toast.success(t('suppliers.success_delete'));
    },
    onError: () => {
      toast.error(t('suppliers.error_delete'));
    },
  });
};
