import AppError from '../../errors/AppError';
import { AcademicDepartment } from '../academic-department/academic-department-model';
import { AcademicFaculty } from '../academic-faculty/academic-faculty-model';
import { Course } from '../Course/course-model';
import { Faculty } from '../Faculty/faculty-model';
import { SemesterRegistration } from '../semester-registration/semester-registration-model';
import { TOfferedCourse } from './offerd-course-interface';
import { OfferedCourse } from './offerd-course-model';
import httpStatus from 'http-status';

const createOfferdCourseIntoDB = async (payload: TOfferedCourse) => {
  const {
    semesterRegistration,
    academicSemester,
    academicFaculty,
    academicDepartment,
    course,
    faculty,
  } = payload;

  //   check if the semester registration id is exists
  const isSemesterRegistrationExits =
    await SemesterRegistration.findById(semesterRegistration);

  if (!isSemesterRegistrationExits) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Semester registration not found !',
    );
  }

  const academicSemesterr = isSemesterRegistrationExits.academicSemester;

  const isAcademicFacultyExits =
    await AcademicFaculty.findById(academicFaculty);

  if (!isAcademicFacultyExits) {
    throw new AppError(httpStatus.NOT_FOUND, 'Academic Faculty not found !');
  }

  const isAcademicDepartmentExits =
    await AcademicDepartment.findById(academicDepartment);

  if (!isAcademicDepartmentExits) {
    throw new AppError(httpStatus.NOT_FOUND, 'Academic Department not found !');
  }

  const isCourseExits = await Course.findById(course);

  if (!isCourseExits) {
    throw new AppError(httpStatus.NOT_FOUND, 'Course not found !');
  }

  const isFacultyExits = await Faculty.findById(faculty);

  if (!isFacultyExits) {
    throw new AppError(httpStatus.NOT_FOUND, 'Faculty not found !');
  }

  const result = await OfferedCourse.create({ ...payload, academicSemesterr });
  return result;
};

// all academic get
const getAllOfferdCourseFromDB = async () => {
  const result = await OfferedCourse.find();
  return result;
};

const getSingleOfferdCourseFromDB = async (id: string) => {
  const result = await OfferedCourse.findById(id);
  return result;
};
const updateOfferdCourseFromDB = async (
  id: string,
  payload: Partial<TOfferedCourse>,
) => {
  const result = await OfferedCourse.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const OfferedCourseServices = {
  createOfferdCourseIntoDB,
  getAllOfferdCourseFromDB,
  getSingleOfferdCourseFromDB,
  updateOfferdCourseFromDB,
};
