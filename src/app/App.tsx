import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useAuthState } from '@/features/auth/model/useAuthState';

export const App = () => {
  const [subscribeToAuthChange, unsubscribeFromAuthChange] = useAuthState((state) => [
    state.subscribeToAuthChange,
    state.unsubscribeFromAuthChange,
  ]);

  useEffect(() => {
    subscribeToAuthChange();

    return unsubscribeFromAuthChange();
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};
