import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthState } from '@/features/auth';
import { ROUTE_PATHS } from '@/shared/router/constants';
import { UiButton, UiInput } from '@/shared/ui';

type FormState = {
  email: string;
  password: string;
};

export const SignIn: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    email: '',
    password: '',
  });

  const [signIn, supabaseUse] = useAuthState((state) => [state.signIn, state.supabaseUser]);

  if (supabaseUse) {
    return <Navigate to={ROUTE_PATHS.chat} />;
  }

  const onChangeHadler = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { password, email } = formState;

    signIn({
      email,
      password,
    });
  };

  return (
    <div className="flex h-lvh w-lvw items-center justify-center bg-gray-950">
      <form onSubmit={onSubmitHandler} className="w-96">
        <h1 className="mb-5 text-3xl text-white">Авторизация</h1>

        <div className="mb-4">
          <UiInput id="email" name="email" labelText="Email" onChange={onChangeHadler} />
        </div>
        <div className="mb-4">
          <UiInput type="password" id="password" name="password" labelText="Пароль" onChange={onChangeHadler} />
        </div>
        <div className="flex justify-stretch">
          <UiButton type="submit">Войти</UiButton>
        </div>
      </form>
    </div>
  );
};
