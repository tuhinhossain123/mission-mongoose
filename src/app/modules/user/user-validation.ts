import { z } from 'zod';

export const userValidationSchema = z.object({
  password: z
    .string({ invalid_type_error: 'Name must be a string' })
    .max(12, { message: 'password can not be more than 12 characters' })
    .optional(),
});
export const UserValidation = {
  userValidationSchema,
};
