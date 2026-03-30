import axios from 'axios';
import { useAuthStore } from '../store/authStore';

const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL || ''}/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Auth Token and Business Unit ID
apiClient.interceptors.request.use(
  (config) => {
    const { token, selectedBusinessUnitId } = useAuthStore.getState();
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    if (selectedBusinessUnitId) {
      config.headers['X-Business-Unit-ID'] = selectedBusinessUnitId;
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handling 401 Unauthorized
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      window.location.href = '/login'; // Redirect to login on auth failure
    }
    return Promise.reject(error);
  }
);

export default apiClient;
