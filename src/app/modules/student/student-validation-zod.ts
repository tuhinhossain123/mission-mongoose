import { z } from 'zod';

// UserName Schema
const createUserNameValidationSchema = z.object({
  firstName: z.string().trim().min(1, 'First Name is Required'),
  middleName: z.string().trim().optional(),
  lastName: z.string().trim().min(1, 'Last Name is Required'),
});

// Guardian Schema
const createGuardianValidationSchema = z.object({
  fatherName: z.string().trim().min(1, 'Father Name is Required'),
  fatherOccupation: z.string().trim().min(1, 'Father Occupation is Required'),
  fatherContactNo: z.string().trim().min(1, 'Father Contact No is Required'),
  motherName: z.string().trim().min(1, 'Mother Name is Required'),
  motherOccupation: z.string().trim().min(1, 'Mother Occupation is Required'),
  motherContactNo: z.string().trim().min(1, 'Mother Contact No is Required'),
});

// Local Guardian Schema
const createLocalGuardianValidationSchema = z.object({
  name: z.string().trim().min(1, 'Local Guardian Name is Required'),
  occupation: z.string().trim().min(1, 'Local Guardian Occupation is Required'),
  contactNo: z.string().trim().min(1, 'Local Guardian Contact No is Required'),
  address: z.string().trim().min(1, 'Local Guardian Address is Required'),
});

// Student Schema
const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().trim(),
    student: z.object({
      name: createUserNameValidationSchema,
      email: z
        .string()
        .trim()
        .email('Invalid email format')
        .min(1, 'Email is Required'),
      gender: z.enum(['male', 'female', 'other'], {
        errorMap: () => ({
          message: "Gender must be 'male', 'female', or 'other'",
        }),
      }),
      dateOfBirth: z.string().optional(),
      contactNo: z
        .string()
        .trim()
        .length(11, 'Contact No must be exactly 11 characters'),
      emergencyContactNo: z
        .string()
        .trim()
        .min(1, 'Emergency Contact No is Required'),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'], {
        errorMap: () => ({ message: 'Invalid Blood Group' }),
      }),
      presentAddress: z.string().trim().min(1, 'Present Address is Required'),
      permanentAddress: z
        .string()
        .trim()
        .min(1, 'Permanent Address is Required'),
      guardian: createGuardianValidationSchema,
      localGuardian: createLocalGuardianValidationSchema,
      admissionSemester: z.string(),
      academicDepartment: z.string(),
      profileImg: z.string().trim().min(1, 'Student Profile Image is Required'),
    }),
  }),
});

// update UserName Schema
const updateUserNameValidationSchema = z.object({
  firstName: z.string().trim().min(1, 'First Name is Required').optional(),
  middleName: z.string().trim().optional().optional(),
  lastName: z.string().trim().min(1, 'Last Name is Required').optional(),
});

// update Guardian Schema
const updateGuardianValidationSchema = z.object({
  fatherName: z.string().trim().min(1, 'Father Name is Required').optional(),
  fatherOccupation: z
    .string()
    .trim()
    .min(1, 'Father Occupation is Required')
    .optional(),
  fatherContactNo: z
    .string()
    .trim()
    .min(1, 'Father Contact No is Required')
    .optional(),
  motherName: z.string().trim().min(1, 'Mother Name is Required').optional(),
  motherOccupation: z
    .string()
    .trim()
    .min(1, 'Mother Occupation is Required')
    .optional(),
  motherContactNo: z
    .string()
    .trim()
    .min(1, 'Mother Contact No is Required')
    .optional(),
});

// update Local Guardian Schema
const updateLocalGuardianValidationSchema = z.object({
  name: z.string().trim().min(1, 'Local Guardian Name is Required').optional(),
  occupation: z
    .string()
    .trim()
    .min(1, 'Local Guardian Occupation is Required')
    .optional(),
  contactNo: z
    .string()
    .trim()
    .min(1, 'Local Guardian Contact No is Required')
    .optional(),
  address: z
    .string()
    .trim()
    .min(1, 'Local Guardian Address is Required')
    .optional(),
});

// update Student Schema
const updateStudentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      name: updateUserNameValidationSchema,
      email: z
        .string()
        .trim()
        .email('Invalid email format')
        .min(1, 'Email is Required')
        .optional(),
      gender: z
        .enum(['male', 'female', 'other'], {
          errorMap: () => ({
            message: "Gender must be 'male', 'female', or 'other'",
          }),
        })
        .optional(),
      dateOfBirth: z.string().optional(),
      contactNo: z
        .string()
        .trim()
        .length(11, 'Contact No must be exactly 11 characters')
        .optional(),
      emergencyContactNo: z
        .string()
        .trim()
        .min(1, 'Emergency Contact No is Required')
        .optional(),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'], {
          errorMap: () => ({ message: 'Invalid Blood Group' }),
        })
        .optional(),
      presentAddress: z
        .string()
        .trim()
        .min(1, 'Present Address is Required')
        .optional(),
      permanentAddress: z
        .string()
        .trim()
        .min(1, 'Permanent Address is Required')
        .optional(),
      guardian: updateGuardianValidationSchema,
      localGuardian: updateLocalGuardianValidationSchema,
      admissionSemester: z.string().optional(),
      academicDepartment: z.string().optional(),
      profileImg: z
        .string()
        .trim()
        .min(1, 'Student Profile Image is Required')
        .optional(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
  updateStudentValidationSchema,
};
