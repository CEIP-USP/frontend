export interface IHttpClient {
  post: <T>(url: string, body: T) => Promise<T>;
  put: <T>(url: string, body: T) => Promise<T>;
}
