import express from 'express';
import { StudentController } from './student-controller';
import validateRequest from '../../middlewares/validateRequest';
import { studentValidations } from './student-validation-zod';

const router = express.Router();

// router.post('/create-student', StudentController.createStudent);
router.get('/', StudentController.getAllStudent);
router.get('/:id', StudentController.getSingleStudent);
router.patch(
  '/:id',
  validateRequest(studentValidations.updateStudentValidationSchema),
  StudentController.updateStudent,
);
router.delete('/:id', StudentController.deleteStudent);

export const StudentRoutes = router;
