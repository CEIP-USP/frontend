import { RegistrationsQuery } from './query';
import { useBackendAxios } from '../../hooks/useBackendAxios';

// Concretização da spec
export const useHttpRegistrationsQuery: () => RegistrationsQuery = () => {
  const http = useBackendAxios();
  return (params) =>
    http
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
