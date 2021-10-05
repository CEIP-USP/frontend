import { IHttpClient } from './Form';

export class FetchHttpClient implements IHttpClient {
  public async post(url: string, body: any): Promise<any> {
    const resp = await fetch(url, { method: 'POST', body });
    return resp.json();
  }
}
