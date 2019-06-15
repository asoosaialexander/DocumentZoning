import { FieldMap } from './FieldMap';

export const NonMedicalFieldMapping: FieldMap[] = [
  { name: "PurposeOfInsurance", page: 1, posA: 110, posB: 160, posC: 180, posD: 10 },
  { name: "Name", page: 1, posA: 110, posB: 170, posC: 190, posD: 45 }
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



