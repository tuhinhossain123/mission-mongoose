import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student-service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

// all student get
const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'All Student Get Successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
// single student get
const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is retrived Successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
// deleted student from db
const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is Deleted Successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
export const StudentController = {
  getAllStudent,
  getSingleStudent,
  deleteStudent,
};
