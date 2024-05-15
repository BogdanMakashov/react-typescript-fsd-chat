import { create } from 'zustand';

import supabase from '@/shared/api/supaBaseClient';
import { SupabaseSession, SupabaseSubscriptionListener, SupabaseUser } from '@/shared/api/types';

export type AuthPayload = {
  email: string;
  password: string;
};

type UseAuthState = {
  supabaseUser: SupabaseUser | null;
  supabaseSession: SupabaseSession | null;
  isLoading: boolean;
  errorMessage: string;
  signIn: (payload: AuthPayload) => void;
  signUp: (payload: AuthPayload) => void;
  subscribtionListener: SupabaseSubscriptionListener | null;
  subscribeToAuthChange: () => void;
  unsubscribeFromAuthChange: () => void;
  signOut: () => void;
};

export const useAuthState = create<UseAuthState>((set, get) => ({
  supabaseUser: null,
  supabaseSession: null,
  isLoading: true,
  errorMessage: '',
  subscribtionListener: null,
  subscribeToAuthChange: () => {
    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      set(() => ({ supabaseUser: session?.user || null }));
      set(() => ({ supabaseSession: session }));
      set(() => ({ isLoading: false }));
      set(() => ({ subscribtionListener: listener }));
    });
  },
  unsubscribeFromAuthChange: () => {
    const subscribtionListener = get().subscribtionListener;

    subscribtionListener?.subscription.unsubscribe();
  },
  signIn: async (payload: AuthPayload) => {
    try {
      set(() => ({ isLoading: true }));
      const { error } = await supabase.auth.signInWithPassword(payload);

      if (error) {
        throw new Error(error.message || 'Unknown error');
      }
    } catch (error) {
      console.error(error);

      if (typeof error === 'string') {
        set(() => ({ errorMessage: error }));
      }
    } finally {
      set(() => ({ isLoading: false }));
    }
  },
  signUp: async (payload: AuthPayload) => {
    try {
      set(() => ({ isLoading: true }));
      const { error } = await supabase.auth.signUp(payload);

      if (error) {
        throw new Error(error?.message || 'Unknown error');
      }
    } catch (error) {
      console.error(error);

      if (typeof error === 'string') {
        set(() => ({ errorMessage: error }));
      }
    } finally {
      set(() => ({ isLoading: false }));
    }
  },
  signOut: async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        throw new Error(error?.message || 'Unknown error');
      }
    } catch (error) {
      console.error(error);

      if (typeof error === 'string') {
        set(() => ({ errorMessage: error }));
      }
    }
  },
}));
