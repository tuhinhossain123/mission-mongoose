import { z } from 'zod';

const PreRequisiteValidationSchema = z.object({
  course: z.string(),
  isDeleted: z.boolean().optional(),
});

const createCourseValidaationSchema = z.object({
  body: z.object({
    title: z.string(),
    prefix: z.string(),
    code: z.number(),
    credits: z.number(),
    preRequisiteCourses: z.array(PreRequisiteValidationSchema).optional(),
    isDeleted: z.boolean().optional(),
  }),
});
const updatePreRequisiteValidationSchema = z.object({
  course: z.string(),
  isDeleted: z.boolean().optional(),
});

const updateCourseValidaationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    prefix: z.string().optional(),
    code: z.number().optional(),
    credits: z.number().optional(),
    preRequisiteCourses: z.array(updatePreRequisiteValidationSchema).optional(),
    isDeleted: z.boolean().optional(),
  }),
});



export const CoursValidation = {
  createCourseValidaationSchema,
  updateCourseValidaationSchema,
  
};
