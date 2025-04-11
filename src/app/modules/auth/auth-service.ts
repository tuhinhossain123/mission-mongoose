import AppError from '../../errors/AppError';
import { User } from '../user/user-model';
import { TLoginUer } from './auth-interface';
import httpStatus from 'http-status';
import bcrypt from 'bcrypt';

const loginUser = async (payload: TLoginUer) => {
  const isUserExists = await User.findOne({ id: payload.id });
  if (!isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found');
  }

  // checking if the user is already deleted
  const isDeleted = isUserExists?.isDeleted;
  if (isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is deleted');
  }
  // checking if the user is blocked
  const userStatus = isUserExists?.status;
  if (userStatus === 'blocked') {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is already blocked!!');
  }

  // checking if the password is correct
  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    isUserExists.password,
  );
  return {};
};
export const AuthService = {
  loginUser,
};
