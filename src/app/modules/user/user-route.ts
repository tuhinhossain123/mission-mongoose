import express from 'express';
import { UserControllers } from './user-controller';
import { studentValidations } from '../student/student-validation-zod';
import validateRequest from '../../middlewares/validateRequest';
import { AdminValidations } from '../Admin/admin-validation';
const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidations.createStudentValidationSchema),
  UserControllers.createStudent,
);
router.post(
  '/create-faculty',
  // validateRequest(studentValidations.createStudentValidationSchema),
  UserControllers.createFaculty,
);

router.post(
  '/create-admin',
  validateRequest(AdminValidations.createAdminValidationSchema),
  UserControllers.createAdmin,
);

export const UserRoutes = router;
