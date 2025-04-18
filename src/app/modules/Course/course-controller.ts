import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { CourseServices } from './course-service';
import sendResponse from '../../utils/sendResponse';

// post request
const createCourse = catchAsync(async (req, res) => {
  const result = await CourseServices.createCourseIntoDB(req.body);
  //  send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'course created is Successfully',
    data: result,
  });
});

// get all academic semester
const getAllCourse = catchAsync(async (req, res) => {
  const result = await CourseServices.getALlCourseIntoDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Course Get Successfully',
    data: result,
  });
});

// get single academic semester
const getSingleCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.getSingleCourseIntoDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'course is retrived Successfully',
    data: result,
  });
});

// deleted course from db
const deletedCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.deletedCourseFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'course is Deleted Successfully',
    data: result,
  });
});
// update course faculties from db
const assignFacultiesWithCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const { faculties } = req.body;
  const result = await CourseServices.assignFacultiesWithCourseIntoDB(
    courseId,
    faculties,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'course faculties is updated Successfully',
    data: result,
  });
});


//remove faculties with course
const removeFacultiesFromCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const { faculties } = req.body;

  const result = await CourseServices.removeFacultiesFromCourseFromDB(
    courseId,
    faculties,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculties removed  succesfully',
    data: result,
  });
});

// update student from db
const updateCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.updateCorseIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course is updated Successfully',
    data: result,
  });
});

export const CourseController = {
  createCourse,
  getAllCourse,
  getSingleCourse,
  deletedCourse,
  updateCourse,
  assignFacultiesWithCourse,
  removeFacultiesFromCourse
};
