import express from 'express';
import { StudentController } from './student-controller';
import validateRequest from '../../middlewares/validateRequest';
import { studentValidations } from './student-validation-zod';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get(
  '/',
  auth('student', 'admin', 'faculty'),
  StudentController.getAllStudent,
);
router.get('/:id', StudentController.getSingleStudent);
router.patch(
  '/:id',
  validateRequest(studentValidations.updateStudentValidationSchema),
  StudentController.updateStudent,
);
router.delete('/:id', StudentController.deleteStudent);

export const StudentRoutes = router;
 