import { Document, FormData } from '../../components/Forms/Forms.interface';
import { IHttpClient } from '../Http/HttpClient.interface';
import { AxiosHttpClient } from '../Http/AxiosHttpClient';

type RequestData = Omit<FormData, 'passwordConfirmation' | 'hasSecondShot'> & {
  hasSecondShot: boolean;
};

type ResponseData<T> = {
  data: T;
  status: number;
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

    if (this.password.length < 8)
      errors.push('O campo Senha precisa ter pelo menos 8 caracteres');

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

  async handleSubmit(
    httpClient: IHttpClient = new AxiosHttpClient()
  ): Promise<RequestData> {
    const { isValid, errors } = this.validateForm();

    if (!isValid) return Promise.reject(errors);

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

    try {
      const response: ResponseData<RequestData> = await httpClient.post(
        '/profiles',
        requestBody
      );
      return Promise.resolve(response.data);
    } catch (e) {
      const error = e as Record<string, unknown>;
      const response = error.response as ResponseData<RequestData>;

      switch (response?.status) {
        case 400:
          return Promise.reject(['Valores inválidos']);
        case 422:
          return Promise.reject([
            'A data de vacinação não pode ser uma data futura',
          ]);
        case 500:
          return Promise.reject([
            'O servidor não está disponível no momento. Tente mais tarde.',
          ]);
        default:
          return Promise.reject(['Erro inesperado aconteceu :(']);
      }
    }
  }
}
