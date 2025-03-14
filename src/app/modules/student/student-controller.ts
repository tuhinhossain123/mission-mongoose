import { Request, Response } from 'express';
import { StudentServices } from './student-service';
import studentValidationSchema from './student-validation-zod';

// post request
const createStudent = async (req: Request, res: Response) => {
  try {
    const { students: studentData } = req.body;
    // zod validation code ekhane
    const zodParseData = studentValidationSchema.parse(studentData);
    const result = await StudentServices.createStudentIntoDB(zodParseData);

    // Joi validation code ekhane
    // const { error, value } = studentValidationSchema.validate(studentData);
    // const result = await StudentServices.createStudentIntoDB(value);
    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     messagel: 'Something Went Wrong',
    //     error: error.details,
    //   });
    // }

    //  send response
    res.status(200).json({
      success: true,
      messagel: 'Student Created successfully',
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
