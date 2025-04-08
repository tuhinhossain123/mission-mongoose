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
router.put('/:courseId/assign-faculties', CourseController.assignFacultiesWithCourse);
router.patch(
  '/:facultyId',
  validateRequest(CoursValidation.updateCourseValidaationSchema),
  CourseController.updateCourse,
);

export const CourseRoute = router;
