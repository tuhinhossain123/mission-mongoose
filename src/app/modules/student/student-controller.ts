import { Request, Response } from 'express';
import { StudentServices } from './student-service';

// post request
const createStudent = async (req: Request, res: Response) => {
  try {
    const { students: studentData } = req.body;
    //  will call service function to send this data
    const result = await StudentServices.createStudentIntoDB(studentData);
    //  send response
    res.status(200).json({
      success: true,
      messagel: 'Student Created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// all student get
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      messagel: 'student are retrive successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
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
  } catch (err) {
    console.log(err);
  }
};
export const StudentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
