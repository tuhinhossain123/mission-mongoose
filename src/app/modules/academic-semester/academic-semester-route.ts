import { Router } from 'express';
import { AcademicSemesterControllers } from './academic-semester-controller';

const router = Router();

router.post(
  '/create-academic-semester',
  AcademicSemesterControllers.createAcademicSemester,
);

export const AcademicSemesterRoute = router;
