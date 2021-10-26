import { IHttpClient } from './Form';
import { startAxios } from '../../hooks/Axios';

export class AxiosHttpClient implements IHttpClient {
  public post<T>(url: string, body: T): Promise<T> {
    const axios = startAxios();
    return axios.post(url, body);
  }
}
