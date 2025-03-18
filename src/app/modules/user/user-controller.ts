import { Request, Response } from 'express';
import { UserService } from './user-service';

// post request
const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, students: studentData } = req.body;
    // zod validation code ekhane
    // const zodParseData = studentValidationSchema.parse(studentData);
    const result = await UserService.createStudentIntoDB(password, studentData);

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

export const UserControllers = {
  createStudent,
};
