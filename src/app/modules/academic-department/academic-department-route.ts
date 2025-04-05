import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicDepartmentValidation } from './academic-department-validation';
import { AcademicDepartmentControllers } from './academic-department-controller';

const router = Router();

router.post(
  '/create-academic-department',
  // validateRequest(
  //   academicDepartmentValidation.createAcademicDepartmentValidationSchema,
  // ),
  AcademicDepartmentControllers.createAcademicDepartment,
);
router.get('/', AcademicDepartmentControllers.getAllAcademicDepartments);

router.get(
  '/:departmentId',
  AcademicDepartmentControllers.getSingleAcademicDepartment,
);

router.patch(
  '/:departmentId',
  validateRequest(
    academicDepartmentValidation.updateAcademicDepartValidationSchema,
  ),
  AcademicDepartmentControllers.updaAcademicDepartment,
);

export const AcademicDepartmentRoute = router;
