import { z } from 'zod';
import {
  academicSemesterCode,
  academicSemesterName,
  Months,
} from './academic-semester-constant';

export const academicValidationSchema = z.object({
  body: z.object({
    name: z.enum([...academicSemesterName] as [string, ...string[]]),
    year: z.date(),
    code: z.enum([...academicSemesterCode] as [string, ...string[]]),
    startMonth: z.enum([...Months] as [string, ...string[]]),
    endMonth: z.enum([...Months] as [string, ...string[]]),
  }),
});
export const academicValidation = {
  academicValidationSchema,
};
