import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

// post request
const createAcademicSemester = catchAsync(async (req, res) => {
  const { password, students: studentData } = req.body;
  // zod validation code ekhane
  const result = await UserService.createStudentIntoDB(password, studentData);
  //  send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Created Successfully',
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
};
