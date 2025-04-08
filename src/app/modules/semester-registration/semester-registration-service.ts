import AppError from '../../errors/AppError';
import { AcademicSemester } from '../academic-semester/academic-semester-model';
import { TSemesterRegistration } from './semester-registration-interface';
import { SemesterRegistration } from './semester-registration-model';
import httpStatus from 'http-status';

const createSemesterregistrationIntoDB = async (
  payload: TSemesterRegistration,
) => {
  const academicSemester = payload?.academicSemester;

  //   check if the semester is exist
  const isAcademicSemesterExist =
    await AcademicSemester.findById(academicSemester);
  if (!isAcademicSemesterExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'This semester not found');
  }

  //   check if the semester already registerd
  const isSemesterRegistrationExists = await SemesterRegistration.findOne({
    academicSemester,
  });

  if (isSemesterRegistrationExists) {
    throw new AppError(
      httpStatus.CONFLICT,
      'This semester is already registerd',
    );
  }

  const result = await SemesterRegistration.create(payload);
  return result;
};

// all academic get
const getAllSemesterRegistrationIntoDB = async () => {
  const result = await SemesterRegistration.find();
  return result;
};

const getSingleSemesterRegistrationFromDB = async (id: string) => {
  const result = await SemesterRegistration.findById(id);
  return result;
};

const updateSemesterRegistrationIntoDB = async (
  id: string,
  payload: Partial<TSemesterRegistration>,
) => {
  const result = await SemesterRegistration.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const SemesterRegistrationServices = {
  createSemesterregistrationIntoDB,
  getAllSemesterRegistrationIntoDB,
  getSingleSemesterRegistrationFromDB,
  updateSemesterRegistrationIntoDB,
};
