import { TAcademicDepartment } from './academic-department-interface';
import { AcademicDepartment } from './academic-department-model';

const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
  // code semester validation eta

  const result = await AcademicDepartment.create(payload);
  return result;
};

// all academic get
const getAllAcademicDepartmentIntoDB = async () => {
  const result = await AcademicDepartment.find().populate('academicFaculty');
  return result;
};

const getSingleAcademicDepartmentFromDB = async (id: string) => {
  const result = await AcademicDepartment.findById(id).populate('academicFaculty');
  return result;
};
const updateAcademicDepartmentIntoDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartment.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const AcademicDepartmentService = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentIntoDB,
  getSingleAcademicDepartmentFromDB,
  updateAcademicDepartmentIntoDB,
};
