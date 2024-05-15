import { createBrowserRouter } from 'react-router-dom';

import { Chat } from '@/pages/chat';
import { SignIn } from '@/pages/sign-in';
import { ROUTE_PATHS } from '@/shared/router/constants';

import { App } from './App';

export const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.default,
    element: <App />,
    children: [
      {
        path: ROUTE_PATHS.signIn,
        element: <SignIn />,
      },
      {
        path: ROUTE_PATHS.signUp,
        element: <div>Sign Up</div>,
      },
      {
        path: ROUTE_PATHS.chat,
        element: <Chat />,
      },
      {
        path: ROUTE_PATHS.profile,
        element: <div>Profile</div>,
      },
    ],
  },
]);
