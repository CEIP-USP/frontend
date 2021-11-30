import { IHttpClient } from './IHttpClient';
import { startAxios } from '../../hooks/Axios';

export class AxiosHttpClient implements IHttpClient {
  public post<T>(url: string, body: T): Promise<T> {
    const axios = startAxios();
    return axios.post(url, body);
  }
  public put<T>(url: string, body: T): Promise<T> {
    const axios = startAxios();
    return axios.put(url, body);
  }
}
