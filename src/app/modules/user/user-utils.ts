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
  return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
};

// year semester code 4 digit number
export const generetdStudentId = async (payload: TAcademicSemester) => {
  //first time 0000
  const currentId = (await findLastStudent()) || (0).toString();
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementId = `${payload.year}${payload.code}${incrementId}`;
  return incrementId;
};
