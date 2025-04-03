import { z } from 'zod';

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Departmrnt must be a string',
      required_error: 'Name is required',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic Departmrnt must be string',
      required_error: 'Faculty is required',
    }),
  }),
});
const updateAcademicDepartValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Academic Departmrnt must be a string',
        required_error: 'Name is required',
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: 'Academic Departmrnt must be string',
        required_error: 'Faculty is required',
      })
      .optional(),
  }),
});
export const academicDepartmentValidation = {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartValidationSchema,
};
