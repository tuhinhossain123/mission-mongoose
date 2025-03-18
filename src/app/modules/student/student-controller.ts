import { Request, Response } from 'express';
import { StudentServices } from './student-service';

// all student get
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      messagel: 'student are retrive successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      messagel: err.message || 'Something Went Wrong',
      error: err,
    });
  }
};
// single student get
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      messagel: 'student is retrive successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      messagel: err.message || 'Something Went Wrong',
      error: err,
    });
  }
};
// deleted student from db
const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      messagel: 'student is deleted successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      messagel: err.message || 'Something Went Wrong',
      error: err,
    });
  }
};
export const StudentController = {
  getAllStudent,
  getSingleStudent,
  deleteStudent,
};
