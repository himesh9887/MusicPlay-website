import { useAuth as useAuthContext } from '../context/AuthContext';

// Re-export the auth hook for cleaner imports
export const useAuth = useAuthContext;