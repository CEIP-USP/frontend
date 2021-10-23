import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { FormHandler } from '../../services/pre-registration-form/Form';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

function PreRegistrationForm(): JSX.Element {
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    phone: '',
    address: '',
    hasSecondShot: '',
    dayOfSecondShot: new Date(),
    document: {
      type: 'CPF',
      value: '',
    },
  });

  const [isStepOne, setIsStepOne] = useState(true);

  const setField = (field: string, value: string | Date | Document) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  function handleSubmit() {
    const {
      name,
      email,
      password,
      passwordConfirmation,
      phone,
      address,
      hasSecondShot,
      dayOfSecondShot,
      document,
    } = formData;

    const formHandler = new FormHandler(
      name,
      email,
      password,
      passwordConfirmation,
      phone,
      address,
      hasSecondShot,
      dayOfSecondShot,
      document
    );

    formHandler.handleSubmit().catch((errors) => setErrors(errors));
  }

  return (
    <>
      <div className="m-5 lg:w-1/2 lg:mx-auto">
        <h1 className="mt-4 mb-2 text-3xl lg:text-center">
          {isStepOne ? 'Seja Bem Vindo(a)!' : 'Dados do perfil'}
        </h1>

        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>

        <div className="flex flex-col space-y-4">
          {isStepOne ? (
            <>
              <StepOne formData={formData} setField={setField} />
              <div className="flex justify-end">
                <button
                  className="w-1/2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  onClick={() => setIsStepOne(false)}
                >
                  Próximo
                </button>
              </div>
            </>
          ) : (
            <>
              <StepTwo formData={formData} setField={setField} />
              <div className="flex justify-between">
                <button
                  className="bg-transparent text-sm text-blue-700 font-semibold hover:text-blue-500 rounded duration-300"
                  onClick={() => setIsStepOne(true)}
                >
                  Voltar
                </button>
                <div className="w-1/4 flex items-center justify-end space-x-2">
                  <button
                    className="text-sm bg-transparent text-blue-700 font-semibold hover:text-blue-500 rounded duration-300"
                    onClick={() => alert('Em construção!')}
                  >
                    Preencher depois
                  </button>
                  <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded duration-300"
                    onClick={handleSubmit}
                  >
                    Cadastrar
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export type Document = {
  type: string;
  value?: string;
};

export type FormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  phone: string;
  address: string;
  hasSecondShot: string;
  dayOfSecondShot: Date;
  document: Document;
};

export type SetField = (field: string, value: string | Date | Document) => void;

export default PreRegistrationForm;
