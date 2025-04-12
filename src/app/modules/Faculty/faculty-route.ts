import express from 'express';

import { FacultyControllers } from './faculty-controller';
import validateRequest from '../../middlewares/validateRequest';
import { updateFacultyValidationSchema } from './faculty-validation';
import auth from '../../middlewares/auth';
import { userRole } from '../user/user-const';

const router = express.Router();

router.get('/:id', FacultyControllers.getSingleFaculty);

router.patch(
  '/:id',
  validateRequest(updateFacultyValidationSchema),
  FacultyControllers.updateFaculty,
);

router.delete('/:id', FacultyControllers.deleteFaculty);

router.get(
  '/',
  auth(userRole.admin, userRole.faculty, userRole.student),
  FacultyControllers.getAllFaculties,
);

export const FacultyRoutes = router;
