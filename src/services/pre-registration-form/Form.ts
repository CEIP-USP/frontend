import { AxiosHttpClient } from './AxiosHttpClient';

interface IContact {
  email?: string;
  phone?: string[];
  address?: string;
  [key: string]: any;
}

export interface IHttpClient {
  post: (url: string, body: any) => Promise<any>;
}

export class FormHandler {
  constructor(
    private readonly name: string,
    private readonly contacts: IContact,
    private readonly dayOfSecondShot: Date,
    private readonly cpf: string
  ) {}

  private validateForm(): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!this.name.trim()) errors.push('Nome está vazio');

    const hasAtLeastOneContact = Object.keys(this.contacts).some(
      (key: string) => this.contacts[key]
    );

    if (!hasAtLeastOneContact)
      errors.push('É necessário informar ao menos uma forma de contato');

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  handleSubmit(httpClient: IHttpClient = new AxiosHttpClient()): Promise<void> {
    const { isValid, errors } = this.validateForm();

    if (!isValid) {
      return new Promise((_, reject) => reject(errors));
    }

    const requestBody = {
      name: this.name,
      cpf: this.cpf,
      dayOfSecondShot: this.dayOfSecondShot,
      contacts: this.contacts,
    };

    const url = process.env.BACKEND_URL || 'http://localhost:3333';

    return httpClient.post(`${url}/profiles`, requestBody);
  }
}
