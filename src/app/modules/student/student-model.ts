import { Schema, model } from 'mongoose';
// import validator from 'validator';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student-interface';

// UserName Schema
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    trim: true, // trim hocche shame piche kono space thakle seta remove kore
    required: [true, 'First Name is Required'],
    // validate: {
    //   //mongoose custom validation eta
    //   validator: function (value: string) {
    //     const firstNameStr =
    //       value.charAt(0).toLocaleUpperCase() + value.slice(1);
    //     return firstNameStr === value;
    //   },
    //   message: '{VALUE} is no capitalize formate',
    // }, // validate kore name er first word boro r baki gula choto thakar jonne,,
  },
  middleName: { type: String, trim: true },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is Required'],
    // validate: {
    //   //3rd party libary validation
    //   validator: (value) => validator.isAlpha(value),
    //   message: '{VALUE} is not valid ',
    // },
  },
});

// Guardian Schema
const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    trim: true,
    required: [true, 'Father Name is Required'],
  },
  fatherOccupation: {
    type: String,
    trim: true,
    required: [true, 'Father Occupation is Required'],
  },
  fatherContactNo: {
    type: String,
    trim: true,
    required: [true, 'Father Contact NO  is Required'],
  },
  motherName: {
    type: String,
    trim: true,
    required: [true, 'Mother Name is Required'],
  },
  motherOccupation: {
    type: String,
    trim: true,
    required: [true, 'Mother Occuapation is Required'],
  },
  motherContactNo: {
    type: String,
    trim: true,
    required: [true, 'Mother Contact No is Required'],
  },
});

// Local Guardian Schema
const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    trim: true,
    required: [true, 'Local Guardian Name is Required'],
  },
  occupation: {
    type: String,
    trim: true,
    required: [true, 'Local Guardian Ocupation is Required'],
  },
  contactNo: {
    type: String,
    trim: true,
    required: [true, 'Local Guardian Contact No is Required'],
  },
  address: {
    type: String,
    trim: true,
    required: [true, 'Local Guardian Address is Required'],
  },
});

// Student Schema
const studentSchema = new Schema<Student>({
  id: {
    type: Number,
    trim: true,
    required: [true, 'Id is Required'],
    unique: true,
  },
  name: { type: userNameSchema, required: [true, 'Name Field is Required'] },
  email: {
    type: String,
    trim: true,
    required: [true, 'Email is Required'],
    unique: true,
    // validate: {
    //   //3rd party libary validation
    //   validator: (value) => validator.isEmail(value),
    //   message: '{VALUE} is not valid email',
    // },
  },
  gender: {
    type: String,
    trim: true,
    enum: {
      values: ['male', 'female', 'other'],
      message: "{VALUE} is Not Valid : 'male', 'female', 'other'",
    },
    required: true,
  },
  dateOfBirth: {
    type: String,
    trim: true,
    required: [true, 'Date Of Birth is Required'],
  },
  contactNo: {
    type: String,
    trim: true,
    required: [true, 'Contact No is Required'],
    minlength: [11, 'number min length 11'],
    maxlength: [11, 'Number more then longer 11 chearecters'],
  },
  emergencyContactNo: {
    type: String,
    trim: true,
    required: [true, 'Emargency Contact No is Required'],
  },
  bloodGroup: {
    type: String,
    trim: true,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
      message:
        "{VALUE} is Not Valid: 'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'",
    },
    required: true,
  },
  presentAddress: {
    type: String,
    trim: true,
    required: [true, 'Present Address is Required'],
  },
  permanentAddress: {
    type: String,
    trim: true,
    required: [true, 'Permanent Address is Required'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardin Field is Required'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local Guardian Field is Required'],
  },
  profileImg: {
    type: String,
    trim: true,
    required: [true, 'Student Profile Images is Required'],
  },
  isActive: {
    type: String,
    trim: true,
    enum: {
      values: ['active', 'block'],
      message: '{VALUE} is Valid',
    },
    default: 'active',
    required: true,
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
