import React, { FormEvent, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FormHandler } from '../services/pre-registration-form/Form';

function PreRegistrationForm(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    hasSecondShot: '',
    dayOfSecondShot: new Date(),
    cpf: '',
  });

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { name, email, phone, address, hasSecondShot, dayOfSecondShot, cpf } =
      formData;

    const formHandler = new FormHandler(
      name,
      { email, phone: [phone], address },
      dayOfSecondShot,
      cpf
    );

    formHandler.handleSubmit();
  }

  return (
    <>
      <h1 className="my-8 text-xl font-bold text-center">Cadastre-se</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 my-4 mx-3 lg:w-1/2 lg:mx-auto"
      >
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
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 rounded p-1">
          <div className="-mt-3 absolute tracking-wider px-1 text-xs">
            <label htmlFor="cpf" className="bg-white text-gray-600 px-1">
              CPF
            </label>
          </div>
          <input
            id="cpf"
            type="text"
            autoComplete="false"
            className="py-2 px-1 text-gray-900 outline-none block h-full w-full"
            value={formData.cpf}
            onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
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
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
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
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
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
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
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
                onChange={(e) =>
                  setFormData({ ...formData, hasSecondShot: e.target.value })
                }
              />
              <span>Sim</span>
            </label>
            <label className="flex items-center space-x-1">
              <input
                className="form-radio"
                name="second_shot"
                type="radio"
                value="nao"
                onChange={(e) =>
                  setFormData({ ...formData, hasSecondShot: e.target.value })
                }
              />
              <span>Não</span>
            </label>
          </div>
        </div>

        {formData.hasSecondShot === 'sim' && (
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
              selected={formData.dayOfSecondShot}
              onChange={(date) =>
                setFormData({ ...formData, dayOfSecondShot: date as Date })
              }
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Cadastrar
        </button>
      </form>
    </>
  );
}

export default PreRegistrationForm;
