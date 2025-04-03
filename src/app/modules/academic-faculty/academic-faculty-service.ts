import { TAcademicFaculty } from './academic-faculty-interface';
import { AcademicFaculty } from './academic-faculty-model';

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  // code semester validation eta

  const result = await AcademicFaculty.create(payload);
  return result;
};

// all academic get
const getAllAcademicFacultiesIntoDB = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

const getSingleAcademicFacultyFromDB = async (id: string) => {
  const result = await AcademicFaculty.findById(id);
  return result;
};
const updateAcademicFacultyIntoDB = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicFaculty.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicFacultyServices = {
  createAcademicFacultyIntoDB,
  getAllAcademicFacultiesIntoDB,
  getSingleAcademicFacultyFromDB,
  updateAcademicFacultyIntoDB,
};
