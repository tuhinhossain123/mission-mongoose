import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicDepartmentService } from './academic-department-service';

// post request
const createAcademicDepartment = catchAsync(async (req, res) => {
  const result = await AcademicDepartmentService.createAcademicDepartmentIntoDB(
    req.body,
  );
  //  send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Department is Created Successfully',
    data: result,
  });
});

// get all academic semester
const getAllAcademicDepartments = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentService.getAllAcademicDepartmentIntoDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Academic Department Get Successfully',
    data: result,
  });
});

// get single academic semester
const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result =
    await AcademicDepartmentService.getSingleAcademicDepartmentFromDB(
      departmentId,
    );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Department is retrived Successfully',
    data: result,
  });
});

//updated semester
const updaAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result = await AcademicDepartmentService.updateAcademicDepartmentIntoDB(
    departmentId,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Department is update Successfully',
    data: result,
  });
});

export const AcademicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updaAcademicDepartment,
};
