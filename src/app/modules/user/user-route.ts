import express from 'express';
import { UserControllers } from './user-controller';
import { studentValidations } from '../student/student-validation-zod';
import validateRequest from '../../middlewares/validateRequest';
import { AdminValidations } from '../Admin/admin-validation';
import auth from '../../middlewares/auth';
import { userRole } from './user-const';
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
router.get(
  '/me',
  auth('student', 'faculty', 'admin'),
  // validateRequest(AdminValidations.createAdminValidationSchema),
  UserControllers.getMe,
);

export const UserRoutes = router;
