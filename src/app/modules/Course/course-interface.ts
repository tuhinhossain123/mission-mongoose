import { Types } from 'mongoose';

export type TPreRrquisiteCourses = {
  course: Types.ObjectId;
  isDeleted: boolean;
};

export type TCourse = {
  title: string;
  prefix: string;
  code: number;
  credits: number;
  preRequisiteCourses: [TPreRrquisiteCourses];
  isDeleted?: boolean;
};
