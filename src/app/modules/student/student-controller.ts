import { StudentServices } from './student-service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

// all student get
const getAllStudent = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Student Get Successfully',
    data: result,
  });
});
// single student get
const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is retrived Successfully',
    data: result,
  });
});
// deleted student from db
const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.deleteStudentFromDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is Deleted Successfully',
    data: result,
  });
});
export const StudentController = {
  getAllStudent,
  getSingleStudent,
  deleteStudent,
};
