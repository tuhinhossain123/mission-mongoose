import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicFacultyValidation } from './academic-faculty-validation';
import { AcademicFacultyControllers } from './academic-faculty-controller';

const router = Router();

router.post(
  '/create-academic-faculty',
  validateRequest(
    academicFacultyValidation.createAcademicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.createAcademicFaculty,
);
router.get('/', AcademicFacultyControllers.getAllAcademicFaculties);

router.get('/:facultyId', AcademicFacultyControllers.getSingleAcademicFaculty);

router.patch(
  '/:facultyId',
  validateRequest(
    academicFacultyValidation.updateAcademicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.updaAcademicFaculty,
);

export const AcademicFacultyRoute = router;
