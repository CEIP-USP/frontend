import React from 'react';
import DatePicker from 'react-datepicker';
import { FormData, SetField } from '../../pages/PreRegistration.interface';

const StepOne = ({
  formData,
  setField,
}: {
  formData: FormData;
  setField: SetField;
}): JSX.Element => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="my-2">
          <p className="text-lg">Dados pessoais</p>
          <hr />
        </div>
        <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 rounded p-1">
          <div className="-mt-3 absolute tracking-wider px-1 text-xs">
            <label htmlFor="name" className="bg-white text-gray-600 px-1">
              Nome
            </label>
          </div>
          <input
            id="name"
            type="text"
            value={formData.name}
            autoComplete="false"
            className="py-2 px-1 text-gray-900 outline-none block h-full w-full"
            required
            onChange={(e) => setField(e.target.id, e.target.value)}
          />
        </div>

        <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 rounded p-1">
          <div className="-mt-3 absolute tracking-wider px-1 text-xs">
            <label htmlFor="email" className="bg-white text-gray-600 px-1">
              Email
            </label>
          </div>
          <input
            id="email"
            type="email"
            value={formData.email}
            autoComplete="false"
            className="py-2 px-1 text-gray-900 outline-none block h-full w-full"
            onChange={(e) => setField(e.target.id, e.target.value)}
          />
        </div>

        <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 rounded p-1">
          <div className="-mt-3 absolute tracking-wider px-1 text-xs">
            <label htmlFor="password" className="bg-white text-gray-600 px-1">
              Senha
            </label>
          </div>
          <input
            id="password"
            type="password"
            value={formData.password}
            autoComplete="false"
            className="py-2 px-1 text-gray-900 outline-none block h-full w-full"
            onChange={(e) => setField(e.target.id, e.target.value)}
          />
        </div>

        <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 rounded p-1">
          <div className="-mt-3 absolute tracking-wider px-1 text-xs">
            <label
              htmlFor="password_confirmation"
              className="bg-white text-gray-600 px-1"
            >
              Confirmar senha
            </label>
          </div>
          <input
            id="passwordConfirmation"
            type="password"
            value={formData.passwordConfirmation}
            autoComplete="false"
            className="py-2 px-1 text-gray-900 outline-none block h-full w-full"
            onChange={(e) => setField(e.target.id, e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="my-2">
          <p className="text-lg">Tipo de Documento</p>
          <hr />
        </div>
        <div className="mt-1 space-y-1">
          <label className="flex items-center space-x-1">
            <input
              className="form-radio"
              name="documentType"
              type="radio"
              value="CPF"
              checked={formData.document.type === 'CPF'}
              onChange={(e) =>
                setField('document', { type: e.currentTarget.value, value: '' })
              }
            />
            <span>CPF</span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              className="form-radio"
              name="documentType"
              type="radio"
              value="RG"
              checked={formData.document.type === 'RG'}
              onChange={(e) =>
                setField('document', { type: e.currentTarget.value, value: '' })
              }
            />
            <span>RG</span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              className="form-radio"
              name="documentType"
              type="radio"
              value="undocumented"
              checked={formData.document.type === 'undocumented'}
              onChange={(e) =>
                setField('document', { type: e.currentTarget.value, value: '' })
              }
            />
            <span>Não tenho documento</span>
          </label>
        </div>

        {formData.document.type !== 'undocumented' && (
          <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 rounded p-1">
            <div className="-mt-3 absolute tracking-wider px-1 text-xs">
              <label htmlFor="document" className="bg-white text-gray-600 px-1">
                {formData.document.type}
              </label>
            </div>
            <input
              id="document"
              type="text"
              autoComplete="false"
              className="py-2 px-1 text-gray-900 outline-none block h-full w-full"
              value={formData.document.value}
              onChange={(e) =>
                setField(e.target.id, {
                  type: formData.document.type,
                  value: e.target.value,
                })
              }
            />
          </div>
        )}
      </div>

      <div className="space-y-4">
        <p>Já tomei a segunda dose da vacina da Covid-19</p>
        <div className="mt-1 flex space-x-4">
          <label className="flex items-center space-x-1">
            <input
              className="form-radio"
              name="second_shot"
              type="radio"
              value="sim"
              checked={formData.hasSecondShot === 'sim'}
              onChange={(e) => setField('hasSecondShot', e.currentTarget.value)}
            />
            <span>Sim</span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              className="form-radio"
              name="second_shot"
              type="radio"
              value="nao"
              checked={formData.hasSecondShot === 'nao'}
              onChange={(e) => setField('hasSecondShot', e.currentTarget.value)}
            />
            <span>Não</span>
          </label>
        </div>
        {formData.hasSecondShot === 'sim' && (
          <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 rounded p-1">
            <div className="-mt-3 absolute tracking-wider px-1 text-xs">
              <label
                htmlFor="dayOfSecondShot"
                className="bg-white text-gray-600 px-1"
              >
                Quando?
              </label>
            </div>
            <DatePicker
              id="dayOfSecondShot"
              autoComplete="false"
              className="py-2 px-1 bg-transparent text-gray-900 outline-none block h-full w-full"
              selected={formData.dayOfSecondShot}
              onChange={(data) => setField('dayOfSecondShot', data as Date)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StepOne;
