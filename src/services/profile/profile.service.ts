import { AxiosInstance } from 'axios';

export class ProfileService {
  constructor(private _axios: AxiosInstance) {}

  public deleteProfile(id: string) {
    return this._axios.delete(`/profiles/${id}`);
  }
}
