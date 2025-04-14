import express from 'express';
import { UserControllers } from './user-controller';
import { studentValidations } from '../student/student-validation-zod';
import validateRequest from '../../middlewares/validateRequest';
import { AdminValidations } from '../Admin/admin-validation';
import auth from '../../middlewares/auth';
import { userRole } from './user-const';
import { UserValidation, userValidationSchema } from './user-validation';
const router = express.Router();

router.post(
  '/create-student',
  auth(userRole.admin),
  validateRequest(studentValidations.createStudentValidationSchema),
  UserControllers.createStudent,
);
router.post(
  '/create-faculty',
  auth(userRole.admin),
  // validateRequest(studentValidations.createStudentValidationSchema),
  UserControllers.createFaculty,
);

router.post(
  '/create-admin',
  validateRequest(AdminValidations.createAdminValidationSchema),
  UserControllers.createAdmin,
);
router.post(
  '/change-status/:id',
  auth('admin'),
  validateRequest(UserValidation.changeStatusValidationSchema),
  UserControllers.changeStatus,
);

router.get(
  '/me',
  auth('student', 'faculty', 'admin'),
  // validateRequest(AdminValidations.createAdminValidationSchema),
  UserControllers.getMe,
);

export const UserRoutes = router;
