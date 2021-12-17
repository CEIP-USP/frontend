export interface IHttpClient {
  get: <Response>(url: string, id: string) => Promise<Response>;
  post: <Request, Response>(url: string, body: Request) => Promise<Response>;
  put: <Request, Response>(url: string, body: Request) => Promise<Response>;
}
