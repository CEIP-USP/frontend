export interface IHttpClient {
  put: (url: string, body: any) => Promise<any>;
}

export class LoginHandler {
  constructor(
    private readonly email: string[],
    private readonly password: string[]
  ) {}

  handleSubmit(httpClient: IHttpClient = new AxiosHttpClient()) {
    const requestBody = {
      email: this.email,
      password: this.password,
    };

    const url = process.env.BACKEND_URL || 'http://localhost:3333';

    return httpClient.put(`${url}/login`, requestBody);
  }
}
