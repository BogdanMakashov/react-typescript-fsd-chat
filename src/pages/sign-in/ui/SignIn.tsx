import React, { ChangeEvent, FormEvent, useState } from 'react';

import { SignOutButton, useAuthState } from '@/features/auth';
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

  const signIn = useAuthState((state) => state.signIn);

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
    <form onSubmit={onSubmitHandler}>
      <h1>Авторизация</h1>

      <div>
        <UiInput id="email" name="email" labelText="Email" onChange={onChangeHadler} />
      </div>
      <div>
        <UiInput type="password" id="password" name="password" labelText="Пароль" onChange={onChangeHadler} />
      </div>
      <div>
        <UiButton type="submit">Войти</UiButton>

        <SignOutButton />
      </div>
    </form>
  );
};
