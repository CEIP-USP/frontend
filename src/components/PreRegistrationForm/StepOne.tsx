import React, { useState } from 'react';
import { SetField } from '.';

const StepOne = ({ setField }: { setField: SetField }): JSX.Element => {
  const [documentType, setDocumentType] = useState('CPF');

  return (
    <div className="space-y-4">
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

      <div>
        <p>Tipo de Documento</p>
        <hr className="my-2" />
        <div className="mt-1 space-y-1">
          <label className="flex items-center space-x-1">
            <input
              className="form-radio"
              name="documentType"
              type="radio"
              value="CPF"
              defaultChecked
              onClick={() => setDocumentType('CPF')}
            />
            <span>CPF</span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              className="form-radio"
              name="documentType"
              type="radio"
              value="RG"
              onClick={() => setDocumentType('RG')}
            />
            <span>RG</span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              className="form-radio"
              name="documentType"
              type="radio"
              value=""
              onClick={() => setField('document', { type: 'undocumented' })}
            />
            <span>Não tenho documento</span>
          </label>
        </div>
      </div>

      {documentType && (
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
  );
};

export default StepOne;
