import React from 'react';

import { UiButton } from '@/shared/ui';

import { useAuthState } from '../model/useAuthState';

export const SignOutButton: React.FC = () => {
  const signOut = useAuthState((state) => state.signOut);

  return <UiButton onClick={signOut}>Выйти</UiButton>;
};
