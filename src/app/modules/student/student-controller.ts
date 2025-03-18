import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student-service';

// all student get
const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      messagel: 'student are retrive successfully',
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
    res.status(200).json({
      success: true,
      messagel: 'student is retrive successfully',
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
    res.status(200).json({
      success: true,
      messagel: 'student is deleted successfully',
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
