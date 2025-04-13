import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthService } from './auth-service';
import config from '../../config';

// post request
const loginUser = catchAsync(async (req, res) => {
  const result = await AuthService.loginUser(req.body);
  const { refreshToken, accessToken, needsPasswordChange } = result;

  res.cookie('refreshToken', refreshToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
  });

  //  send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in succesfully',
    data: {
      accessToken,
      needsPasswordChange,
    },
  });
});

const changePassword = catchAsync(async (req, res) => {
  const { ...passwordData } = req.body;
  const result = await AuthService.changePassword(req.user, passwordData);
  //  send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'password is updated succesfully',
    data: result,
  });
});

const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;
  const result = await AuthService.refreshToken(refreshToken);
  //  send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Access token is retrived succesfully',
    data: result,
  });
});
const forgatePassword = catchAsync(async (req, res) => {
  const userId = req.body.id;
  const result = await AuthService.forgatePassword(userId);
  //  send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reset link is genereted succesfully',
    data: result,
  });
});
const resetPassword = catchAsync(async (req, res) => {
  const token = req.headers.authorization;
  const result = await AuthService.resetPassword(req.body, token);
  //  send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reset password succesfully',
    data: result,
  });
});

export const AuthController = {
  loginUser,
  changePassword,
  refreshToken,
  forgatePassword,
  resetPassword,
};
