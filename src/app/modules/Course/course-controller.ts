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
  const result = await CourseServices.getALlCourseIntoDB();
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
  const result =
    await CourseServices.getSingleCourseIntoDB(id);
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

export const AcademicFacultyControllers = {
  createCourse,
  getAllCourse,
  getSingleCourse,
  deletedCourse,
};
