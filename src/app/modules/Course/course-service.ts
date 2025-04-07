import { TCourse } from './course-interface';
import { Course } from './course-model';

const createCourseIntoDB = async (payLoad: TCourse) => {
  const result = await Course.create(payLoad);
  return result;
};

const getALlCourseIntoDB = async () => {
  const result = await Course.find();
  return result;
};
const getSingleCourseIntoDB = async (id: string) => {
  const result = await Course.findById(id);
  return result;
};
const deletedCourseFromDB = async (id: string) => {
  const result = await Course.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};
export const CourseServices = {
  createCourseIntoDB,
  getALlCourseIntoDB,
  getSingleCourseIntoDB,
  deletedCourseFromDB,
};
