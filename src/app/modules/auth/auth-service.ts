import AppError from '../../errors/AppError';
import { User } from '../user/user-model';
import { TLoginUer } from './auth-interface';
import httpStatus from 'http-status';

const loginUser = async (payload: TLoginUer) => {
  const user = await User.isUserExistsByCustomId(payload.id);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found');
  }

  // // checking if the user is already deleted
  // const isDeleted = isUserExists?.isDeleted;
  // if (isDeleted) {
  //   throw new AppError(httpStatus.NOT_FOUND, 'This user is deleted');
  // }
  // // checking if the user is blocked
  // const userStatus = isUserExists?.status;
  // if (userStatus === 'blocked') {
  //   throw new AppError(httpStatus.FORBIDDEN, 'This user is already blocked!!');
  // }

  // // checking if the password is correct
  if (!(await User.isPasswordMatched(payload.password, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'password do not mathed');
  }
  return {};
};
export const AuthService = {
  loginUser,
};
