import { AxiosHttpClient } from './AxiosHttpClient';
import {
  Document,
  FormData,
} from '../../pages/PreRegistration/PreRegistration.interface';

export interface IHttpClient {
  post: <T>(url: string, body: T) => Promise<T>;
}

type RequestData = Omit<FormData, 'passwordConfirmation' | 'hasSecondShot'> & {
  hasSecondShot: boolean;
};

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

    if (!this.name.trim()) errors.push('O campo Nome precisa estar preenchido');

    if (!this.email.trim())
      errors.push('O campo Email precisa estar preenchido');

    if (!this.password.trim())
      errors.push('O campo Senha precisa estar preenchido');

    if (!this.passwordConfirmation.trim())
      errors.push('O campo Confirmação de Senha precisa estar preenchido');

    if (this.document.type !== 'undocumented' && !this.document.value?.trim())
      errors.push(`O campo ${this.document.type} está vazio`);

    if (!this.hasSecondShot.trim())
      errors.push(
        'É necessário informar se tomou a segunda dose da vacina contra a Covid-19'
      );

    if (this.password !== this.passwordConfirmation)
      errors.push('As senhas digitadas precisam ser iguais');

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  handleSubmit(
    httpClient: IHttpClient = new AxiosHttpClient()
  ): Promise<RequestData> {
    const { isValid, errors } = this.validateForm();

    if (!isValid) {
      return new Promise((_, reject) => reject(errors));
    }

    const document = Object.assign({}, this.document);

    if (document.type === 'undocumented') {
      delete document.value;
    }

    const requestBody: RequestData = {
      name: this.name,
      email: this.email,
      password: this.password,
      phone: this.phone,
      address: this.address,
      hasSecondShot: this.hasSecondShot === 'sim',
      dayOfSecondShot: this.dayOfSecondShot,
      document,
    };

    return httpClient.post('/profiles', requestBody);
  }
}
