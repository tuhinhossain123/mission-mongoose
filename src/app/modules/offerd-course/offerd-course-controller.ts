import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { OfferedCourseServices } from './offerd-course-service';

// create semester
const createOfferdCourse = catchAsync(async (req, res) => {
  const result = await OfferedCourseServices.createOfferdCourseIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offered Course is Created Successfully',
    data: result,
  });
});

// get all academic semester
const getAllOfferdCourse = catchAsync(async (req, res) => {
  const result = await OfferedCourseServices.getAllOfferdCourseFromDB(
    req.query,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offered Course  Get Successfully',
    data: result,
  });
});

// get single academic semester
const getSingleOfferdCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await OfferedCourseServices.getSingleOfferdCourseFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offered Course is retrived Successfully',
    data: result,
  });
});

//updated semester
const updateOfferdCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await OfferedCourseServices.updateOfferdCourseFromDB(
    id,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offered Course is update Successfully',
    data: result,
  });
});

export const OfferedCourseController = {
  createOfferdCourse,
  getAllOfferdCourse,
  getSingleOfferdCourse,
  updateOfferdCourse,
};
