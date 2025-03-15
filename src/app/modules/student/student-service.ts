import { TStudent } from './student-interface';
import { Student } from './student-model';

// post request
const createStudentIntoDB = async (studentData: TStudent) => {
  //------------for creating an static method-----------
  if (await Student.isUserExists(studentData.id)) {
    throw new Error('User already exists');
  }
  const result = await Student.create(studentData); //built in static method
  return result;

  //---------------for creating an custom instance method---------------------------
  //   const student = new Student(studentData); // create an instance
  //   if (await student.isUserExists(studentData.id)) {
  //     throw new Error('User already exists');
  //   }
  //   const result = await student.save(); //bult in instance method
  //   return result;
};

// all student get
const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};
// single student get
const getSingleStudentFromDB = async (id: number) => {
  const result = await Student.findOne({ id });
  return result;
};
export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
