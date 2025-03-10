import { Student } from './student-interface';
import { StudentModel } from './student-model';

// post request
const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
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
