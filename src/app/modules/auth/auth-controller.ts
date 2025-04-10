import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthService } from './auth-service';

// post request
const loginUser = catchAsync(async (req, res) => {
  const result = await AuthService.loginUser(req.body);
  //  send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in succesfully',
    data: result,
  });
});

export const AuthController = {
  loginUser,
};
