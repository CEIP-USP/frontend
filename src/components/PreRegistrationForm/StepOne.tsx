import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { SetField } from '.';

const StepOne = ({
  currentDate,
  setField,
}: {
  currentDate: Date;
  setField: SetField;
}): JSX.Element => {
  const [documentType, setDocumentType] = useState('CPF');
  const [hasSecondShot, setHasSecondShot] = useState('');

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
            id="passwordonfirmation"
            type="password"
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
              defaultChecked
              onClick={(e) => setDocumentType(e.currentTarget.value)}
            />
            <span>CPF</span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              className="form-radio"
              name="documentType"
              type="radio"
              value="RG"
              onClick={(e) => setDocumentType(e.currentTarget.value)}
            />
            <span>RG</span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              className="form-radio"
              name="documentType"
              type="radio"
              value="undocumented"
              onClick={(e) => {
                setDocumentType(e.currentTarget.value);
                setField('document', { type: e.currentTarget.value });
              }}
            />
            <span>Não tenho documento</span>
          </label>
        </div>

        {documentType !== 'undocumented' && (
          <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 rounded p-1">
            <div className="-mt-3 absolute tracking-wider px-1 text-xs">
              <label htmlFor="document" className="bg-white text-gray-600 px-1">
                {documentType}
              </label>
            </div>
            <input
              id="document"
              type="text"
              autoComplete="false"
              className="py-2 px-1 text-gray-900 outline-none block h-full w-full"
              onChange={(e) =>
                setField(e.target.id, {
                  type: documentType,
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
              onClick={() => setHasSecondShot('sim')}
            />
            <span>Sim</span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              className="form-radio"
              name="second_shot"
              type="radio"
              value="nao"
              onClick={() => setHasSecondShot('nao')}
            />
            <span>Não</span>
          </label>
        </div>
        {hasSecondShot === 'sim' && (
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
              selected={currentDate}
              onChange={(data) => setField('dayOfSecondShot', data as Date)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StepOne;
