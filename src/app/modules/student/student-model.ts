import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student-interface';

// UserName Schema
const userNameSchema = new Schema<UserName>({
  firstName: { type: String },
  middleName: { type: String },
  lastName: { type: String },
});

// Guardian Schema
const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String },
  fatherOccupation: { type: String },
  fatherContactNo: { type: String },
  motherName: { type: String },
  motherOccupation: { type: String },
  motherContactNo: { type: String },
});

// Local Guardian Schema
const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String },
  occupation: { type: String },
  contactNo: { type: String },
  address: { type: String },
});

// Student Schema
const studentSchema = new Schema<Student>({
  id: { type: Number },
  name: userNameSchema,
  email: { type: String },
  gender: { type: String, enum: ['male', 'female'] },
  dateOfBirth: { type: String },
  contactNo: { type: String },
  emergencyContactNo: { type: String },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  },
  presentAddress: { type: String },
  permanentAddress: { type: String },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String },
  isActive: { type: String, enum: ['active', 'inActive'] },
});

export const StudentModel = model<Student>('Student', studentSchema);
