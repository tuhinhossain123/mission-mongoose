import { Student } from './student-interface';
import { StudentModel } from './student-model';

// post request
const createStudentIntoDB = async (studentData: Student) => {
  // const result = await StudentModel.create(studentData); //built in static method
  const student = new StudentModel(studentData);
  const result = await student.save(); //bult in instance method
  return result;
};

// all student get
const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
// single student get
const getSingleStudentFromDB = async (id: number) => {
  const result = await StudentModel.findOne({ id });
  return result;
};
export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
