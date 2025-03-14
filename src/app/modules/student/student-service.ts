import { TStudent } from './student-interface';
import { Student } from './student-model';

// post request
const createStudentIntoDB = async (studentData: TStudent) => {
  // const result = await StudentModel.create(studentData); //built in static method
  const student = new Student(studentData); // create an instance
  if (await student.isUserExits(studentData.id)) {
    throw new Error('User Already exists!');
  }
  const result = await student.save(); //bult in instance method
  return result;
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
