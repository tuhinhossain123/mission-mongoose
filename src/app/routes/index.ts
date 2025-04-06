import { Router } from 'express';
import { UserRoutes } from '../modules/user/user-route';
import { StudentRoutes } from '../modules/student/student-route';
import { AcademicSemesterRoute } from '../modules/academic-semester/academic-semester-route';
import { AcademicFacultyRoute } from '../modules/academic-faculty/academic-faculty-route';
import { AcademicDepartmentRoute } from '../modules/academic-department/academic-department-route';
import { FacultyRoutes } from '../modules/Faculty/faculty-route';
import { AdminRoutes } from '../modules/Admin/admin-route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoute,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoute,
  },
  {
    path: '/academic-department',
    route: AcademicDepartmentRoute,
  },
  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
