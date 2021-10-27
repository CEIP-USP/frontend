import { RegistrationsQuery } from './query';
import { startAxios } from '../../hooks/Axios';

type BackendResponse = {
  q: string;
  skip: number;
  take: number;
  data: Data[];
};

type Data = {
  name: string;
  _contact: {
    email: string;
    phone: string[];
  };
};

// Concretização da spec
export const useHttpRegistrationsQuery: () => RegistrationsQuery = () => {
  const axios = startAxios();
  return (params) =>
    axios
      .get('/profile', { params })
      .then((response) => response.data as BackendResponse)
      .then(({ data, ...params }) => ({
        ...params,
        data: data.map((item: Data) => ({
          name: item.name,
          contact: {
            email: item._contact.email,
            phone: item._contact.phone,
          },
        })),
      }));
};
