import { RequestHandler } from 'express';
import { UserService } from './user-service';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';

// post request
const createStudent: RequestHandler = async (req, res, next) => {
  try {
    const { password, student: studentData } = req.body;
    // zod validation code ekhane
    const result = await UserService.createStudentIntoDB(password, studentData);

    //  send response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student Created Successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
  createStudent,
};
