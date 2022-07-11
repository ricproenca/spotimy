import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { SPOTIFY_LOGIN_ROUTE } from '@Config/spotify';
import { USER_ACCESS_TOKEN } from '@Config/storage';
import { loginUserSchema } from '@Schema/user';
import { storage } from '@Services/storage';

const LoginPage = () => {
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

        storage.setItem(USER_ACCESS_TOKEN, JSON.stringify(userData.data));

        window.location.assign(SPOTIFY_LOGIN_ROUTE);
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
