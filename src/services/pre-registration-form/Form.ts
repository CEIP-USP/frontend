import { AxiosHttpClient } from './AxiosHttpClient';
import { Document } from '../../components/PreRegistrationForm/index';

export interface IHttpClient {
  post: (url: string, body: any) => Promise<any>;
}

export class FormHandler {
  constructor(
    private readonly name: string,
    private readonly email: string,
    private readonly password: string,
    private readonly passwordConfirmation: string,
    private readonly phone: string,
    private readonly address: string,
    private readonly hasSecondShot: string,
    private readonly dayOfSecondShot: Date,
    private readonly document: Document
  ) {}

  public validateForm(): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!this.name.trim()) errors.push('Nome está vazio');

    if (!this.email.trim()) errors.push('Email está vazio');

    if (!this.password.trim()) errors.push('Senha está vazia');

    if (!this.passwordConfirmation.trim())
      errors.push('Confirmação de senha está vazia');

    if (this.document.type !== 'undocumented' && !this.document.value?.trim())
      errors.push(`${this.document.type} está vazio`);

    if (!this.hasSecondShot.trim())
      errors.push(
        'É necessário informar se tomou a segunda dose da vacina do COVID-19'
      );

    if (this.password !== this.passwordConfirmation)
      errors.push('As senhas não batem');

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

    const document = Object.assign({}, this.document);

    if (document.type === 'undocumented') {
      delete document.value;
    }

    const requestBody = {
      name: this.name,
      email: this.email,
      password: this.password,
      phone: this.phone,
      address: this.address,
      hasSecondShot: this.hasSecondShot === 'sim',
      dayOfSecondShot: this.dayOfSecondShot,
      document,
    };

    const url = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3333';

    return httpClient.post(`${url}/profiles`, requestBody);
  }
}
