import config from '../../config';
import { TStudent } from '../student/student-interface';
import { Student } from '../student/student-model';
import { TUser } from './user-interface';
import { User } from './user-model';

// post request
const createStudentIntoDB = async (password: string, studentData: TStudent) => {
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

  //   set manually generated id
  userData.id = '2030100001';

  //------- create a user
  const NewUser = await User.create(userData); //built in static method

  //   ------ create a student
  if (Object.keys(NewUser).length) {
    //set id,_id as user
    studentData.id = NewUser.id;
    studentData.user = NewUser._id; //reference _id

    const newStudent = await Student.create(studentData);
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
