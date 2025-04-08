import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { AcademicSemester } from '../academic-semester/academic-semester-model';
import { TSemesterRegistration } from './semester-registration-interface';
import { SemesterRegistration } from './semester-registration-model';
import httpStatus from 'http-status';

const createSemesterregistrationIntoDB = async (
  payload: TSemesterRegistration,
) => {
  const academicSemester = payload?.academicSemester;

  // check if the any registered semester that is already 'UPCOMING'|"ONGOING"
  const isThereAnyUpComingOrOngoingSemester =
    await SemesterRegistration.findOne({
      $or: [{ status: 'UPCOMING' }, { status: 'ONGOING' }],
    });
  if (isThereAnyUpComingOrOngoingSemester) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `There is already a ${isThereAnyUpComingOrOngoingSemester.status} register semester !!`,
    );
  }

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

const getAllSemesterRegistrationIntoDB = async (
  query: Record<string, unknown>,
) => {
  const adminQuery = new QueryBuilder(
    SemesterRegistration.find().populate('academicSemester'),
    query,
  )
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await adminQuery.modelQuery;
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
  //check if the requested registerd semester is exists
  const isSemesterRegistrationExists = await SemesterRegistration.findById(id);

  if (!isSemesterRegistrationExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'This semester is no found');
  }

  // if the requested semester redisration is ended, we will not update anything
  const currenstSemesterStatus = isSemesterRegistrationExists?.status;
  if (currenstSemesterStatus === 'ENDED') {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `This semester is alredy ${currenstSemesterStatus}`,
    );
  }
};

export const SemesterRegistrationServices = {
  createSemesterregistrationIntoDB,
  getAllSemesterRegistrationIntoDB,
  getSingleSemesterRegistrationFromDB,
  updateSemesterRegistrationIntoDB,
};
