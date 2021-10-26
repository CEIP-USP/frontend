export type Document = {
  type: string;
  value?: string;
};

export type FormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  phone: string;
  address: string;
  hasSecondShot: string;
  dayOfSecondShot: Date;
  document: Document;
};

export type SetField = (field: string, value: string | Date | Document) => void;
