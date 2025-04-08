import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SemesterRegistrationValidationSchema } from './semester-registration-validation';
import { SemesterRegistrationControllers } from './semester-registration-controlller';

const router = Router();

router.post(
  '/create-semester-registration',
  validateRequest(
    SemesterRegistrationValidationSchema.createSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationControllers.createSemesterRegistration,
);
router.get('/', SemesterRegistrationControllers.getAllSemesterRegistration);

router.get(
  '/:facultyId',
  SemesterRegistrationControllers.getSingleSemesterRegistration,
);

router.patch(
  '/:facultyId',
  SemesterRegistrationControllers.updateSemesterRegistration,
);

export const SemesterRegistrationRoute = router;
