import React, { ChangeEvent, FormEvent, useState } from 'react';

import { useAuthState } from '@/features/auth/model/useAuthState';
import { UiButton, UiInput } from '@/shared/ui';

type FormState = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignUp: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const signIn = useAuthState((state) => state.signUp);

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
      <h1>Регистрация</h1>

      <div>
        <UiInput id="email" name="email" labelText="Email" onChange={onChangeHadler} />
      </div>
      <div>
        <UiInput type="password" id="password" name="password" labelText="Пароль" onChange={onChangeHadler} />
      </div>
      <div>
        <UiInput
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          labelText="Повторите пароль"
          onChange={onChangeHadler}
        />
      </div>
      <div>
        <UiButton type="submit">Зарегистрироваться</UiButton>
      </div>
    </form>
  );
};
