import { z } from 'zod';

export const academicFacultyValidationSchema = z.object({
  name: z
    .string({ invalid_type_error: 'Academic Faculty must be a string' })
   
});
export const academicFacultyValidation = {
  academicFacultyValidationSchema,
};
