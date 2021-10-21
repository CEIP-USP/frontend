import React from 'react';
import { SetField } from '.';

const StepTwo = ({ setField }: { setField: SetField }): JSX.Element => {
  return (
    <div className="space-y-4">
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
          onChange={(e) => setField(e.target.id, e.target.value)}
        />
      </div>
    </div>
  );
};

export default StepTwo;
