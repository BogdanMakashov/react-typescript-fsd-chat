import { create } from 'zustand';

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatarUrl: string;
  lastSeen: Date;
};

type UseUsersState = {
  currentUser: User | null;
  getUserById: (id: string) => void;
};

export const useUsersState = create<UseUsersState>((set, get) => ({
  currentUser: null,
  getUserById: (id: string) => {
    console.log('👻 ----------------------------------------------👻');
    console.log('👻 ~ file: useUsers.ts:16 ~ useUsers ~ id;', id);
    console.log('👻 ----------------------------------------------👻');
  },
}));
