import { Router } from 'express';
import { AcademicSemesterControllers } from './academic-semester-controller';
import validateRequest from '../../middlewares/validateRequest';
import { academicValidation } from './academic-semester-validation';

const router = Router();

router.post(
  '/create-academic-semester',
  validateRequest(academicValidation.academicValidationSchema),
  AcademicSemesterControllers.createAcademicSemester,
);
router.get('/', AcademicSemesterControllers.getAllAcademicSemester);

router.get(
  '/:semesterId',
  AcademicSemesterControllers.getSingleAcademicSemester,
);

router.patch(
  '/:semesterId',
  validateRequest(academicValidation.updateAcademicSemesterValidation),
  AcademicSemesterControllers.updaAcademicSemester,
);

export const AcademicSemesterRoute = router;
