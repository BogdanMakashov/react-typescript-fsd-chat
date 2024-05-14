import { create } from 'zustand';

export type SignInPayload = {
  email: string;
  password: string;
};

type UseAuthState = {
  supabaseUser: Record<string, unknown>;
  session: Record<string, unknown>;
  isLoading: boolean;
  errorMessage: string;
  signIn: (payload: SignInPayload) => void;
  signUp: (payload: SignInPayload) => void;
  signOut: () => void;
};

export const useAuthState = create<UseAuthState>((set, get) => ({
  supabaseUser: {},
  session: {},
  isLoading: true,
  errorMessage: '',
  signIn: async (payload: SignInPayload) => {
    console.log('👻 -----------------------------------------------------------👻');
    console.log('👻 ~ file: useAuthState.ts:13 ~ signIn: ~ payload;', payload);
    console.log('👻 -----------------------------------------------------------👻');
  },
  signUp: async (payload: SignInPayload) => {
    console.log('👻 -----------------------------------------------------------👻');
    console.log('👻 ~ file: useAuthState.ts:13 ~ signIn: ~ payload;', payload);
    console.log('👻 -----------------------------------------------------------👻');
  },
  signOut: () => {},
}));
