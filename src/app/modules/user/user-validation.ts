import { z } from 'zod';

export const userValidationSchema = z.object({
  id: z.string(),
  password: z
    .string()
    .max(12, { message: 'password can not be more than 12 characters' }),
  needsPasswordChange: z.boolean().optional().default(true),
  role: z.enum(['admin', 'student', 'faculty']),
  status: z.enum(['in-progress', 'blocked']).default('in-progress'),
  isDeleted: z.boolean().optional().default(false),
});
export const UserValidation = {
  userValidationSchema,
};
