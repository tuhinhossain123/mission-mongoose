import { academicSemesterNameCodeMapper } from './academic-semester-constant';
import { TAcademicSemester } from './academic-semester-interface';
import { AcademicSemesterModel } from './academic-semester-model';


const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  // code semester validation eta
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }
  const result = await AcademicSemesterModel.create(payload);
  return result;
};

// all academic get
const getAllAcademicSemesterIntoDB = async () => {
  const result = await AcademicSemesterModel.find();
  return result;
};

const getSingleAcademicSemesterFromDB = async (id: string) => {
  const result = await AcademicSemesterModel.findById(id);
  return result;
};
const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid semester Code');
  }
  const result = await AcademicSemesterModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemesterIntoDB,
  getSingleAcademicSemesterFromDB,
  updateAcademicSemesterIntoDB
};
