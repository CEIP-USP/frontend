import React, { FormEvent, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { FormHandler } from '../../services/pre-registration-form/Form';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

interface IFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  hasSecondShot: string;
  dayOfSecondShot: Date;
  cpf: string;
}

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

  const [step, setStep] = useState(0);

  const wrapperSetForm = (field: string, value: string | Date) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  function handleSubmit() {
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
      <form className="flex flex-col space-y-4 my-4 mx-3 lg:w-1/2 lg:mx-auto">
        {!step ? <StepOne /> : <StepTwo />}
        {step ? (
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => setStep(0)}
          >
            Voltar
          </button>
        ) : null}
        {!step ? (
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type="button"
            onClick={() => setStep(1)}
          >
            Próximo
          </button>
        ) : (
          <button
            type="button"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={handleSubmit}
          >
            Cadastrar
          </button>
        )}
      </form>
    </>
  );
}

export default PreRegistrationForm;
