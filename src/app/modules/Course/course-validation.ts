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
  }),
});

export const CoursValidation = {
  createCourseValidaationSchema,
};
