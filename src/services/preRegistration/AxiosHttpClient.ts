import axios from 'axios';
import { IHttpClient } from './Form';

export class AxiosHttpClient implements IHttpClient {
  public post<T>(url: string, body: T): Promise<T> {
    return axios.post(url, body);
  }
}
