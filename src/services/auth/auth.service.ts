import { AxiosInstance, AxiosResponse } from 'axios';

export interface AccessTokenResponse {
  accessToken: string;
}

export class AuthService {
  constructor(private readonly axios: AxiosInstance) {}

  refresh() {
    return this.axios
      .post<void, AxiosResponse<AccessTokenResponse>>(
        '/auth/refresh',
        {},
        { withCredentials: true }
      )
      .then(({ data }) => data);
  }

  login(username: string, password: string) {
    return this.axios
      .post<void, AxiosResponse<AccessTokenResponse>>(
        '/auth/login',
        { username, password },
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => data);
  }

  logout() {
    return this.axios.post<void, AxiosResponse<void>>(
      '/auth/logout',
      {},
      { withCredentials: true }
    );
  }
}
