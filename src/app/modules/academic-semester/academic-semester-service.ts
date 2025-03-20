import { academicSemesterNameCodeMapper } from './academic-semester-constant';
import { TAcademicSemester } from './academic-semester-interface';
import { AcademicSemester } from './academic-semester-model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
 
  // code semester validation eta
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
};
