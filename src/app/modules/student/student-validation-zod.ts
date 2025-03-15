import { z } from 'zod';

// UserName Schema
const userNameValidationSchema = z.object({
  firstName: z.string().trim().min(1, 'First Name is Required'),
  middleName: z.string().trim().optional(),
  lastName: z.string().trim().min(1, 'Last Name is Required'),
});

// Guardian Schema
const guardianValidationSchema = z.object({
  fatherName: z.string().trim().min(1, 'Father Name is Required'),
  fatherOccupation: z.string().trim().min(1, 'Father Occupation is Required'),
  fatherContactNo: z.string().trim().min(1, 'Father Contact No is Required'),
  motherName: z.string().trim().min(1, 'Mother Name is Required'),
  motherOccupation: z.string().trim().min(1, 'Mother Occupation is Required'),
  motherContactNo: z.string().trim().min(1, 'Mother Contact No is Required'),
});

// Local Guardian Schema
const localGuardianValidationSchema = z.object({
  name: z.string().trim().min(1, 'Local Guardian Name is Required'),
  occupation: z.string().trim().min(1, 'Local Guardian Occupation is Required'),
  contactNo: z.string().trim().min(1, 'Local Guardian Contact No is Required'),
  address: z.string().trim().min(1, 'Local Guardian Address is Required'),
});

// Student Schema
const studentValidationSchema = z.object({
  id: z.string().min(1, 'Id is Required'),
  password: z.string().trim(),
  name: userNameValidationSchema,
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
  dateOfBirth: z.string().trim().min(1, 'Date Of Birth is Required'),
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
  permanentAddress: z.string().trim().min(1, 'Permanent Address is Required'),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().trim().min(1, 'Student Profile Image is Required'),
  isActive: z.enum(['active', 'block']).default('active'),
  isDeleted: z.boolean(),
});

export default studentValidationSchema;
