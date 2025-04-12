import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CoursValidation } from './course-validation';
import { CourseController } from './course-controller';
import auth from '../../middlewares/auth';
import { userRole } from '../user/user-const';

const router = Router();

router.post(
  '/create-course',
  auth(userRole.admin),
  validateRequest(CoursValidation.createCourseValidaationSchema),
  CourseController.createCourse,
);
router.get('/', CourseController.getAllCourse);
router.get(
  '/:id',
  auth(userRole.admin, userRole.faculty, userRole.student),
  CourseController.getSingleCourse,
);
router.delete('/:id', CourseController.deletedCourse);
router.put(
  '/:courseId/assign-faculties',
  validateRequest(CoursValidation.FacultiesWithCourseValidationSchema),
  CourseController.assignFacultiesWithCourse,
);
router.delete(
  '/:courseId/remove-faculties',
  auth(userRole.admin),
  validateRequest(CoursValidation.FacultiesWithCourseValidationSchema),
  CourseController.removeFacultiesFromCourse,
);
router.patch(
  '/:facultyId',
  auth(userRole.admin),
  validateRequest(CoursValidation.updateCourseValidaationSchema),
  CourseController.updateCourse,
);

export const CourseRoute = router;
