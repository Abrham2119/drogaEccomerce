import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  token: string | null;
  selectedBusinessUnitId: string | null;
  setToken: (token: string | null) => void;
  setBusinessUnitId: (id: string | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      selectedBusinessUnitId: null,
      setToken: (token) => set({ token }),
      setBusinessUnitId: (selectedBusinessUnitId) => set({ selectedBusinessUnitId }),
      logout: () => set({ token: null, selectedBusinessUnitId: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
