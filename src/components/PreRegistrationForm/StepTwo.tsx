import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

const StepTwo = (): JSX.Element => {
  const [hasSecondShot, setHasSecondShot] = useState('');
  const [dayOfSecondShot, setDayOfSecondShot] = useState(new Date());

  return (
    <div className="space-y-4">
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
        />
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
        />
      </div>

      <div>
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
      </div>

      {hasSecondShot === 'sim' && (
        <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 rounded p-1">
          <div className="-mt-3 absolute tracking-wider px-1 text-xs">
            <label
              htmlFor="day_of_second_shot"
              className="bg-white text-gray-600 px-1"
            >
              Quando?
            </label>
          </div>
          <DatePicker
            id="day_of_second_shot"
            autoComplete="false"
            className="py-2 px-1 bg-transparent text-gray-900 outline-none block h-full w-full"
            selected={dayOfSecondShot}
            onChange={(data) => setDayOfSecondShot(data as Date)}
          />
        </div>
      )}
    </div>
  );
};

export default StepTwo;
