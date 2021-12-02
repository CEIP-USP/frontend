import { IHttpClient } from './HttpClient.interface';
import { startAxios } from '../../hooks/Axios';

export class AxiosHttpClient implements IHttpClient {
  public post<Request, Response>(
    url: string,
    body: Request
  ): Promise<Response> {
    const axios = startAxios();
    return axios.post(url, body);
  }
  public put<Request, Response>(url: string, body: Request): Promise<Response> {
    const axios = startAxios();
    return axios.put(url, body);
  }
}
