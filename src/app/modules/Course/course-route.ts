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

// router.patch(
//   '/:facultyId',
//   validateRequest(
//     academicFacultyValidation.updateAcademicFacultyValidationSchema,
//   ),
//   AcademicFacultyControllers.updaAcademicFaculty,
// );

export const CourseRoute = router;
