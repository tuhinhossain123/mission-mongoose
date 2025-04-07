import mongoose from 'mongoose';
import { Student } from './student-model';
import AppError from '../../errors/AppError';
import { User } from '../user/user-model';
import httpStatus from 'http-status';
import { TStudent } from './student-interface';
import QueryBuilder from '../../builder/QueryBuilder';
import { studentSearchableFields } from './student-const';

// all student get  with refactor code
const getAllStudentFromDB = async (query: Record<string, unknown>) => {
  const studentQuery = new QueryBuilder(Student.find(), query)
    ?.search(studentSearchableFields)
    ?.filter()
    ?.sort()
    ?.paginate()
    ?.fields();

  const result = await studentQuery.modelQuery;
  return result;
};

// all student get  without refactor code
// const getAllStudentFromDB = async (query: Record<string, unknown>) => {
//   const studentSearchableFields = ['email', 'name.firstName', 'presentAddress'];
//   const queryObj = { ...query };

//   let searchTerm = '';
//   if (query?.searchTerm) {
//     searchTerm = query?.searchTerm as string;
//   }

//   const searchQuery = Student.find({
//     $or: studentSearchableFields.map((field) => ({
//       [field]: { $regex: searchTerm, $options: 'i' },
//     })),
//   });

//   // filtering   email query,sorting,limit,paginatio
//   const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];
//   excludeFields.forEach((el) => delete queryObj[el]);
//   console.log({ query }, { queryObj });

//   const filterQuery = searchQuery.find(queryObj);
//   // .populate('admissionSemester')
//   // .populate({
//   //   path: 'academicDepartment',
//   //   populate: { path: 'academicFaculty' },
//   // });

//   let sort = '-createdAt';
//   if (query.sort) {
//     sort = query.sort as string;
//   }
//   const sortQuery = filterQuery.sort(sort);

//   let page = 1;
//   let limit = 1;
//   let skip = 0;

//   if (query.limit) {
//     limit = Number(query.limit);
//   }

//   if (query.page) {
//     page = Number(query.page);
//     skip = (page - 1) * limit;
//   }
//   const paginateQuery = sortQuery.skip(skip);
//   const limitQuery = paginateQuery.limit(limit);

//   // fields
//   let fields = '-__v';
//   if (query.fields) {
//     fields = (query.fields as string).split(',').join(' ');
//   }

//   const fieldQuery =await limitQuery.select(fields);

//   return fieldQuery;
// };

// single student get
const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findById(id);
  // .populate('admissionSemester')
  // .populate({
  //   path: 'academicDepartment',
  //   populate: { path: 'academicFaculty' },
  // });
  return result;
};
// updated student
const updatedStudentFromDB = async (id: string, payload: Partial<TStudent>) => {
  const { name, guardian, localGuardian, ...remaingStudentData } = payload;
  const modifieUpdateData: Record<string, unknown> = { ...remaingStudentData };
  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifieUpdateData[`name.${key}`] = value;
    }
  }
  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifieUpdateData[`guardian.${key}`] = value;
    }
  }
  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifieUpdateData[`localGuardian.${key}`] = value;
    }
  }
  const result = await Student.findByIdAndUpdate(id, modifieUpdateData, {
    new: true,
    runValidators: true,
  });
  return result;
};

// deleted student from db
const deleteStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const deletedStudent = await Student.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true, session },
    );
    if (!deletedStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild to delete student');
    }
    const userId = deletedStudent.user;

    const deletedUser = await User.findByIdAndUpdate(
      userId,
      { isDeleted: true },
      { new: true, session },
    );
    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild to delete user');
    }
    await session.commitTransaction();
    await session.endSession();
    return deletedStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession;
    throw new Error('Faild to deleted user');
  }
};
export const StudentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  updatedStudentFromDB,
  deleteStudentFromDB,
};
