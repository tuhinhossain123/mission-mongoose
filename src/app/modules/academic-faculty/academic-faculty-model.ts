import { model, Schema } from 'mongoose';
import { TAcademicFaculty } from './academic-faculty-interface';

const academicFacultySchema = new Schema<TAcademicFaculty>(
  {
    name: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  },
);


// ekoi name a 2 ta department create na kora
academicFacultySchema.pre('save', async function (next) {
  const isDepartmentExists = await AcademicFaculty.findOne({
    name: this.name,
  });
  if (isDepartmentExists) {
    throw Error('This Department is already exist!');
  }
  next();
});

// data deleted kore dewar poreo update korle data update hye jay seta na hoyar
academicFacultySchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();

  const isDepartmentExists = await AcademicFaculty.findOne(query);
  if (!isDepartmentExists) {
    throw Error('This Department dose not exist!');
  }
  next();
});

export const AcademicFaculty = model<TAcademicFaculty>(
  'AcademicFaculty',
  academicFacultySchema,
);
