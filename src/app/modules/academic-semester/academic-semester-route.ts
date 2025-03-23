import { Router } from 'express';
import { AcademicSemesterControllers } from './academic-semester-controller';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterValidation } from './academic-semester-validation';

const router = Router();

router.post(
  '/create-academic-semester',
  validateRequest(academicSemesterValidation.createAcademicValidationSchema),
  AcademicSemesterControllers.createAcademicSemester,
);
router.get('/', AcademicSemesterControllers.getAllAcademicSemester);

router.get(
  '/:semesterId',
  AcademicSemesterControllers.getSingleAcademicSemester,
);

router.patch(
  '/:semesterId',
  validateRequest(academicSemesterValidation.updateAcademicSemesterValidation),
  AcademicSemesterControllers.updaAcademicSemester,
);

export const AcademicSemesterRoute = router;
