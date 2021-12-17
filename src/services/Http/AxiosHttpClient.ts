import { IHttpClient } from './HttpClient.interface';
import { startAxios } from '../../hooks/Axios';
import { AxiosInstance } from 'axios';

export class AxiosHttpClient implements IHttpClient {
  private axios: AxiosInstance;
  constructor() {
    this.axios = startAxios();
  }

  public get<Response>(url: string, id: string): Promise<Response> {
    return this.axios.get(`${url}/${id}`);
  }

  public post<Request, Response>(
    url: string,
    body: Request
  ): Promise<Response> {
    return this.axios.post(url, body);
  }

  public put<Request, Response>(url: string, body: Request): Promise<Response> {
    return this.axios.put(url, body);
  }
}
