import { AxiosInstance } from 'axios';
import { Document } from '../../components/Forms/Forms.interface';

export type EditProfilePayload = {
  name?: string;
  email?: string;
  document?: Document;
  phone?: string;
  address?: string;
  dayOfSecondShot?: Date;
};

export class ProfileService {
  constructor(private _axios: AxiosInstance) {}

  public getProfile(id: string) {
    return this._axios
      .get<{
        _id: string;
        name: string;
        email: string;
        document?: {
          type: string;
          value?: string;
        };
        phone: string;
        address: string;
        dayOfSecondShot: string;
      }>(`/profiles/${id}`)
      .then(({ data }) => ({
        ...data,
        dayOfSecondShot: new Date(data.dayOfSecondShot),
      }));
  }

  public deleteProfile(id: string) {
    return this._axios.delete(`/profiles/${id}`);
  }

  public editProfile(id: string, payload: EditProfilePayload) {
    return this._axios.put(`/profiles/${id}`, payload);
  }
}
