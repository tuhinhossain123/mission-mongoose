
export type Gurdian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}
export type UserName = {
  firstName: string
  middleName: string
  lastName: string
}

export type LocalGurdian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}

export type Student = {
  id: string
  name: UserName
  email: string
  gender: 'male' | 'female'
  dateOfBirth: string
  contactNo: string
  emargencyContactNo: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-'
  presentAddress: string
  permanetAddress: string
  gurdian: Gurdian
  localGurdian: LocalGurdian
  profileImg:string;
  isActive: "active"| "inActive"
}
