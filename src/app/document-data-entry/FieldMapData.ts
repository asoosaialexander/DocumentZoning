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
  { name: "gender", page: 1, posA: 90, posB: 208, posC: 120, posD: 10 },
  { name: "email", page: 1, posA: 0, posB: 278, posC: 300, posD: 10 },
  { name: "firstname", page: 1, posA: 0, posB: 167, posC: 300, posD: 10 },
  { name: "lastname", page: 1, posA: 0, posB: 195, posC: 300, posD: 10 },
  { name: "proposalType", page: 1, posA: 0, posB: 100, posC: 150, posD: 50 },
  { name: "addressType", page: 1, posA: 0, posB: 455, posC: 350, posD: 10 },
  { name: "village", page: 1, posA: 0, posB: 550, posC: 350, posD: 10 },
  { name: "pincode", page: 1, posA: 0, posB: 465, posC: 200, posD: 20 },
  { name: "state", page: 1, posA: 0, posB: 600, posC: 200, posD: 20 },

]



