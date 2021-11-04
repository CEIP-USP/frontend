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

  login(email: string, password: string) {
    const credentialsOnBase64 = btoa(`${email}:${password}`);
    return this.axios
      .post<void, AxiosResponse<AccessTokenResponse>>(
        '/auth/login',
        undefined,
        {
          headers: { authorization: `Basic ${credentialsOnBase64}` },
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
