import { TLoginUer } from './auth-interface';

const loginUser = async (payload: TLoginUer) => {
  console.log(payload);
  return {};
};
export const AuthService = {
  loginUser,
};
