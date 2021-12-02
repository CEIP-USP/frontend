export interface IHttpClient {
  post: <Request, Response>(url: string, body: Request) => Promise<Response>;
  put: <Request, Response>(url: string, body: Request) => Promise<Response>;
}
