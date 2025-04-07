import QueryBuilder from '../../builder/QueryBuilder';
import { CourseSearchableFields } from './course-const';
import { TCourse } from './course-interface';
import { Course } from './course-model';

const createCourseIntoDB = async (payLoad: TCourse) => {
  const result = await Course.create(payLoad);
  return result;
};

const getALlCourseIntoDB = async (query: Record<string, unknown>) => {
  const courseQuery = new QueryBuilder(
    Course.find().populate('preRequisiteCourses.course'),
    query,
  )
    .search(CourseSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await courseQuery.modelQuery;
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
