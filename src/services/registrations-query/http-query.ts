import { RegistrationsQuery } from './query';
import { startAxios } from '../../hooks/Axios';

// Concretização da spec
export const useHttpRegistrationsQuery: () => RegistrationsQuery = () => {
  const axios = startAxios();
  return (params) =>
    axios
      .get('/profile', { params })
      .then((response) => response.data as any)
      .then(({ data, ...params }) => ({
        ...params,
        data: data.map((item: any) => ({
          name: item.name,
          contact: {
            email: item._contact.email,
            phone: item._contact.phone,
          },
        })),
      }));
};
