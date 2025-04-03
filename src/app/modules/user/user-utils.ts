import { TAcademicSemester } from '../academic-semester/academic-semester-interface';
import { User } from './user-model';

const findLastStudent = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({ createAt: -1 })
    .lean();
  return lastStudent?.id ? lastStudent.id : undefined;
};

// year semester code 4 digit number
export const generetdStudentId = async (payload: TAcademicSemester) => {
  //first time 0000
  let currentId = (0).toString(); //0000 by default
  const lastStudent = await findLastStudent();
  const lastStudentSemesterCode = lastStudent?.substring(4, 6);
  const lastStudentYear = lastStudent?.substring(0, 4);
  const currentSemesterCode = payload.code;
  const currentYear = payload.year;
  if (
    lastStudent &&
    lastStudentSemesterCode === currentSemesterCode &&
    lastStudentYear === currentYear
  ) {
    currentId = lastStudent.substring(6);
  }
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementId = `${payload.year}${payload.code}${incrementId}`;
  return incrementId;
};
