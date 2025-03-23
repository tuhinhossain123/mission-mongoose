import config from '../../config';
import { AcademicSemesterModel } from '../academic-semester/academic-semester-model';
import { TStudent } from '../student/student-interface';
import { Student } from '../student/student-model';
import { TUser } from './user-interface';
import { User } from './user-model';
import { generetdStudentId } from './user-utils';

// post request
const createStudentIntoDB = async (password: string, payload: TStudent) => {
  //------------for creating an static method----------- student service theke asce code eta
  //   if (await Student.isUserExists(studentData.id)) {
  //     throw new Error('User already exists');
  //   }

  //   ------ creat a user object
  const userData: Partial<TUser> = {};

  //  -------- if password is not given , use default password------
  userData.password = password || (config.default_pass as string);

  //   -------set student role-------
  userData.role = 'student';

  // find academic semester info
  const admisionSemester = await AcademicSemesterModel.findById(
    payload.admissionSemester,
  );

  //   set manually generated id
  userData.id = await generetdStudentId(admisionSemester);

  //------- create a user
  const NewUser = await User.create(userData); //built in static method

  //   ------ create a student
  if (Object.keys(NewUser).length) {
    //set id,_id as user
    payload.id = NewUser.id;
    payload.user = NewUser._id; //reference _id

    const newStudent = await Student.create(payload);
    return newStudent;
  }
  return NewUser;
  //---------------for creating an custom instance method--------------------------- student service theke asce code eta
  //   const student = new Student(studentData); // create an instance
  //   if (await student.isUserExists(studentData.id)) {
  //     throw new Error('User already exists');
  //   }
  //   const result = await student.save(); //bult in instance method
  //   return result;
};

export const UserService = {
  createStudentIntoDB,
};
