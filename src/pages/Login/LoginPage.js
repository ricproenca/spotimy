import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { HOME_ROUTE } from '@Config/routes';
import { loginUserSchema } from '@Schema/user';
import { LOCAL_USER_DATA, storage } from '@Utils/storage';

const LoginPage = () => {
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState();

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    resolver: zodResolver(loginUserSchema)
  });

  const onSubmit = async values => {
    try {
      const userSession = await axios.post(`${process.env.REACT_APP_SERVER_ENDPOINT}/api/v1/sessions`, values, {
        withCredentials: true
      });

      if (userSession?.data) {
        const userData = await axios.get(`${process.env.REACT_APP_SERVER_ENDPOINT}/api/v1/me`, {
          withCredentials: true
        });

        storage.setItem(LOCAL_USER_DATA, JSON.stringify(userData.data));

        navigate(HOME_ROUTE, { replace: true, validSession: true });
      }
    } catch (err) {
      setLoginError(err.message);
    }
  };

  return (
    <>
      <p>{loginError}</p>

      <form onSubmit={handleSubmit(data => onSubmit(data))}>
        <div>
          <p>
            <label htmlFor='email'>Email</label>
          </p>
          <input id='email' type='email' value='ricproenca@gmail.com' {...register('email')} />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <p>
            <label htmlFor='password'>Password</label>
          </p>
          <input id='password' type='password' value='123456' {...register('password')} />
          <p>{errors.password?.message}</p>
        </div>

        <button type='submit'>LOGIN</button>
      </form>
    </>
  );
};

export default LoginPage;
