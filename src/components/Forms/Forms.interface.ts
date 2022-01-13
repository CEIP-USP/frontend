export type Document = {
  type: string;
  value?: string;
};

export enum DocumentTypes {
  CPF = 'CPF',
  RG = 'RG',
}

export const DocumentsTypesList = [
  {
    label: 'CPF',
    value: DocumentTypes.CPF,
  },
  {
    label: 'RG',
    value: DocumentTypes.RG,
  },
  {
    label: 'Não tenho documento',
    value: '',
  },
];

export type FormData = {
  name: string;
  email: string;
  currentPassword?: string;
  password: string;
  passwordConfirmation: string;
  phone: string;
  address: string;
  hasSecondShot: string;
  dayOfSecondShot: Date;
  document: Document;
};

export type SetField = (field: string, value: string | Date | Document) => void;
