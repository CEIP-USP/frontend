import axios from 'axios';
import { IHttpClient } from './Form';

export class AxiosHttpClient implements IHttpClient {
  public post(url: string, body: any): Promise<any> {
    return axios.post(url, body);
  }
}
