import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CoursValidation } from './course-validation';
import { CourseController } from './course-controller';

const router = Router();

router.post(
  '/create-course',
  validateRequest(CoursValidation.createCourseValidaationSchema),
  CourseController.createCourse,
);
router.get('/', CourseController.getAllCourse);
router.get('/:id', CourseController.getSingleCourse);
router.delete('/:id', CourseController.deletedCourse);
router.put(
  '/:courseId/assign-faculties',
  validateRequest(CoursValidation.FacultiesWithCourseValidationSchema),
  CourseController.assignFacultiesWithCourse,
);
router.delete(
  '/:courseId/remove-faculties',
  validateRequest(CoursValidation.FacultiesWithCourseValidationSchema),
  CourseController.removeFacultiesFromCourse,
);
router.patch(
  '/:facultyId',
  validateRequest(CoursValidation.updateCourseValidaationSchema),
  CourseController.updateCourse,
);

export const CourseRoute = router;
