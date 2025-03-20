import { TAcademicSemesterCode, TAcademicSemesterName, TAcademicSemesterNameCodeMapper, TMonths } from "./academic-semester-interface";

export const Months: TMonths[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
 export const academicSemesterName: TAcademicSemesterName[] = [
    'Autum',
    'Summar',
    'Fall',
  ];
 export const academicSemesterCode: TAcademicSemesterCode[] = ['01', '02', '03'];


  
 export const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
  Autum: '01',
  Summar: '02',
  Fall: '03',
};