import { object, string } from 'zod';

export const createUserSchema = object({
  name: string().nonempty('Name is required'),
  email: string().nonempty('Email is required').email('Not a valid email'),
  password: string().nonempty('Password is required').min(6, 'Password should be 6 chars minimum'),
  passwordConfirmation: string().nonempty('Password Confirmation is required')
}).refine(data => data.password === data.passwordConfirmation, {
  message: 'Passwords do not match',
  path: ['passwordConfirmation']
});

export const loginUserSchema = object({
  email: string().nonempty('Email is required').email('Not a valid email'),
  password: string().nonempty('Password is required').min(6, 'Password should be 6 chars minimum')
});

/**
 * Jane Doe
 * jane.doe@example.com
 * Password.123!
 * Password.123!
 */
