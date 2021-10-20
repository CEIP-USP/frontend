// Query Spec

export type RegistrationsQueryRequest = {
  q: string;
  skip: number;
  take: number;
};

export type RegistrationsQueryResponse = {
  q: string;
  skip: number;
  take: number;
  data: {
    name: string;
    contact: {
      email: string;
      phone: string[];
    };
  }[];
};

export type RegistrationsQuery = (
  params: RegistrationsQueryRequest
) => Promise<RegistrationsQueryResponse>;
