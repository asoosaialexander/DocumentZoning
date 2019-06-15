import { FieldMap } from './FieldMap';

export const NonMedicalFieldMapping: FieldMap[] = [
  { name: "PurposeOfInsurance", page: 1, posA: 110, posB: 160, posC: 180, posD: 10 },
  { name: "Name", page: 1, posA: 110, posB: 170, posC: 190, posD: 45 },
  { name: "applicationNumber", page: 1, posA: 295, posB: 38, posC: 90, posD: 30 },
  { name: "uin", page: 1, posA: 385, posB: 41, posC: 130, posD: 20 },
  { name: "gender", page: 1, posA: 440, posB: 196, posC: 90, posD: 15 },
  { name: "firstname", page: 1, posA: 90, posB: 170, posC: 200, posD: 20 },
  { name: "lastname", page: 1, posA: 100, posB: 195, posC: 200, posD: 20 },
  { name: "proposalType", page: 1, posA: 220, posB: 70, posC: 300, posD: 20 },
  { name: "addressType", page: 1, posA: 0, posB: 455, posC: 350, posD: 10 },
  { name: "village", page: 1, posA: 350, posB: 350, posC: 200, posD: 15 },
  { name: "pincode", page: 1, posA: 430, posB: 390, posC: 100, posD: 20 },
  { name: "state", page: 1, posA: 430, posB: 370, posC: 100, posD: 20 },
]

export const MedicalFieldMapping: FieldMap[] = [
  { name: "PurposeOfInsurance", page: 2, posA: 110, posB: 160, posC: 180, posD: 10 },
  { name: "Name", page: 1, posA: 110, posB: 170, posC: 190, posD: 45 },
  { name: "applicationNumber", page: 1, posA: 145, posB: 34, posC: 110, posD: 30 },
  { name: "uin", page: 1, posA: 20, posB: 79, posC: 105, posD: 10 },
  { name: "gender", page: 1, posA: 20, posB: 208, posC: 200, posD: 15 },
  { name: "email", page: 1, posA: 20, posB: 276, posC: 325, posD: 16 },
  { name: "firstname", page: 1, posA: 20, posB: 165, posC: 325, posD: 15 },
  { name: "lastname", page: 1, posA: 20, posB: 193, posC: 325, posD: 18 },
  { name: "proposalType", page: 1, posA: 20, posB: 100, posC: 135, posD: 45 },
  { name: "addressType", page: 1, posA: 20, posB: 453, posC: 325, posD: 14 },
  { name: "village", page: 1, posA: 20, posB: 548, posC: 325, posD: 14 },
  { name: "pincode", page: 1, posA: 20, posB: 466, posC: 200, posD: 20 },
  { name: "state", page: 1, posA: 20, posB: 602, posC: 207, posD: 15 },

]



