import { model, Schema } from 'mongoose';
import { TAcademicSemester } from './academic-semester-interface';
import {
  academicSemesterCode,
  academicSemesterName,
  Months,
} from './academic-semester-constant';

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: { type: String, required: true, enum: academicSemesterName },
    year: { type: String, required: true },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: Months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: Months,
    },
  },
  {
    timestamps: true,
  },
);

// academic semester check ekhane and semester code validation services a
academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExists = await AcademicSemesterModel.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExists) {
    throw new Error('Semester is already exists');
  }
  next();
});

export const AcademicSemesterModel = model<TAcademicSemester>(
  'academicSemester',
  academicSemesterSchema,
);
