import React from 'react';
import { FormData, SetField } from './Forms.interface';

const OptionalDataForm = ({
  formData,
  setField,
}: {
  formData: FormData;
  setField: SetField;
}): JSX.Element => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <div className="my-2">
          <p className="text-lg">Contato</p>
          <hr />
        </div>

        <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 rounded p-1">
          <div className="-mt-3 absolute tracking-wider px-1 text-xs">
            <label htmlFor="phone" className="bg-white text-gray-600 px-1">
              Telefone
            </label>
          </div>
          <input
            id="phone"
            type="text"
            autoComplete="false"
            className="py-2 px-1 text-gray-900 outline-none block h-full w-full"
            value={formData.phone}
            onChange={(e) => setField(e.target.id, e.target.value)}
          />
        </div>

        <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 rounded p-1">
          <div className="-mt-3 absolute tracking-wider px-1 text-xs">
            <label htmlFor="address" className="bg-white text-gray-600 px-1">
              Endereço
            </label>
          </div>
          <input
            id="address"
            type="text"
            autoComplete="false"
            className="py-2 px-1 text-gray-900 outline-none block h-full w-full"
            value={formData.address}
            onChange={(e) => setField(e.target.id, e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default OptionalDataForm;
