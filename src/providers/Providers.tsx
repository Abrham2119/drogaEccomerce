import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import { Toaster } from 'react-hot-toast';
import i18n from '../i18n/i18n';
import type { ReactNode } from 'react';
import { TeamProvider } from './TeamContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <TeamProvider>
          {children}
          <Toaster position="top-right" reverseOrder={false} />
        </TeamProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
};
