import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseValidations } from './offered-course-validation';
import { OfferedCourseController } from './offerd-course-controller';

const router = Router();

router.post(
  '/create-offered-course',
  validateRequest(OfferedCourseValidations.createOfferedCourseValidationSchema),
  OfferedCourseController.createOfferdCourse,
);
router.get('/', OfferedCourseController.getAllOfferdCourse);

router.get('/:id', OfferedCourseController.getSingleOfferdCourse);

router.patch(
  '/:id',
  validateRequest(OfferedCourseValidations.updateOfferedCourseValidationSchema),
  OfferedCourseController.updateOfferdCourse,
);

export const OfferCourseRoute = router;
