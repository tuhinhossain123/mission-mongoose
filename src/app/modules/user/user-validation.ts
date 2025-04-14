import { z } from 'zod';
import { userStatus } from './user-const';

export const userValidationSchema = z.object({
  password: z
    .string({ invalid_type_error: 'Name must be a string' })
    .max(12, { message: 'password can not be more than 12 characters' })
    .optional(),
});

const changeStatusValidationSchema = z.object({
  body: z.enum([...userStatus] as [string, ...string[]]),
});

export const UserValidation = {
  userValidationSchema,
  changeStatusValidationSchema,
};
