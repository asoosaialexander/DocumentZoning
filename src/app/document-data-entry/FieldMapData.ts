import { FieldMap } from './FieldMap';

export const NonMedicalFieldMapping: FieldMap[] = [
    { name: "PurposeOfInsurance", page: 1, posA: 110, posB: 160, posC: 180, posD: 10 },
    { name: "Name", page: 1, posA: 110, posB: 170, posC: 190, posD: 45 }
]

export const MedicalFieldMapping: FieldMap[] = [
    { name: "PurposeOfInsurance", page: 2, posA: 110, posB: 160, posC: 180, posD: 10 },
    { name: "Name", page: 1, posA: 110, posB: 170, posC: 190, posD: 45 }
]