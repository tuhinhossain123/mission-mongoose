import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';

import { AuthController } from './auth-controller';
import { AuthValidation } from './auth-validation';
import { userRole } from '../user/user-const';
import auth from '../../middlewares/auth';

const router = Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthController.loginUser,
);
router.post(
  '/change-password',
  auth(userRole.admin, userRole.faculty, userRole.student),
  validateRequest(AuthValidation.changePasswordValidationSchema),
  AuthController.changePassword,
);
router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshTokenValidationSchema),
  AuthController.refreshToken,
);
router.post(
  '/forgate-password',
  validateRequest(AuthValidation.forgatePasswordValidationSchema),
  AuthController.forgatePassword,
);
router.post(
  '/reset-password',
  validateRequest(AuthValidation.resetPasswordValidationSchema),
  AuthController.resetPassword,
);


export const AuthRoute = router;
