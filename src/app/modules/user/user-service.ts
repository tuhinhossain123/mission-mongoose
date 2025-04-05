import mongoose from 'mongoose';
import config from '../../config';
import { AcademicSemesterModel } from '../academic-semester/academic-semester-model';
import { TStudent } from '../student/student-interface';
import { Student } from '../student/student-model';
import { TUser } from './user-interface';
import { User } from './user-model';
import { generetdStudentId } from './user-utils';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
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
  console.log(admisionSemester);
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    //   set manually generated id
    userData.id = await generetdStudentId(admisionSemester);

    //------- create a user (transtion -1)
    const NewUser = await User.create([userData], { session }); //built in static method

    //   ------ create a student
    if (!NewUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }
    //set id,_id as user
    payload.id = NewUser[0].id;
    payload.user = NewUser[0]._id; //reference _id
    // create a student (transtion -2)
    const newStudent = await Student.create([payload], { session });
    if (!newStudent.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create student');
    }
    await session.commitTransaction();
    await session.endSession();
    return newStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession;
    throw new Error(err);
  }
};

export const UserService = {
  createStudentIntoDB,
};
