import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { HOME_ROUTE } from '@Config/routes';
import { createUserSchema } from '@Schema/user';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [registerError, setRegisterError] = useState();

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    resolver: zodResolver(createUserSchema)
  });

  const onSubmit = async values => {
    try {
      await axios.post(`${process.env.REACT_APP_SERVER_ENDPOINT}/api/v1/users`, values);

      navigate(HOME_ROUTE);
    } catch (err) {
      setRegisterError(err.message);
    }
  };

  return (
    <>
      <p>{registerError}</p>

      <form onSubmit={handleSubmit(data => onSubmit(data))}>
        <div>
          <p>
            <label htmlFor='name'>Name</label>
          </p>
          <input id='name' type='text' {...register('name')} />
          <p>{errors.name?.message}</p>
        </div>

        <div>
          <p>
            <label htmlFor='email'>Email</label>
          </p>
          <input id='email' type='email' {...register('email')} />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <p>
            <label htmlFor='password'>Password</label>
          </p>
          <input id='password' type='password' {...register('password')} />
          <p>{errors.password?.message}</p>
        </div>

        <div>
          <p>
            <label htmlFor='passwordConfirmation'>Confirm password</label>
          </p>
          <input id='passwordConfirmation' type='password' {...register('passwordConfirmation')} />
          <p>{errors.passwordConfirmation?.message}</p>
        </div>

        <button type='submit'>REGISTER</button>
      </form>
    </>
  );
};

export default RegisterPage;
