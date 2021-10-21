import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { FormHandler } from '../../services/pre-registration-form/Form';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

type Document = {
  type: string;
  value?: string;
};

function PreRegistrationForm(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    hasSecondShot: '',
    dayOfSecondShot: new Date(),
    document: {
      type: '',
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

  // function handleSubmit() {
  //   const {
  //     name,
  //     email,
  //     phone,
  //     address,
  //     hasSecondShot,
  //     dayOfSecondShot,
  //     document,
  //   } = formData;

  //   const formHandler = new FormHandler(
  //     name,
  //     { email, phone: [phone], address },
  //     dayOfSecondShot,
  //     document
  //   );

  //   formHandler.handleSubmit();
  // }

  return (
    <>
      <h1 className="my-8 text-xl font-bold text-center">Cadastre-se</h1>
      <form className="flex flex-col space-y-4 my-4 mx-3 lg:w-1/2 lg:mx-auto">
        {isStepOne ? (
          <StepOne setField={setField} />
        ) : (
          <StepTwo setField={setField} />
        )}
        {isStepOne ? (
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => setIsStepOne(false)}
          >
            Voltar
          </button>
        ) : null}
        {!isStepOne ? (
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type="button"
            onClick={() => setIsStepOne(true)}
          >
            Próximo
          </button>
        ) : (
          <button
            type="button"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Cadastrar
          </button>
        )}
      </form>
    </>
  );
}

export type SetField = (field: string, value: string | Date | Document) => void;

export default PreRegistrationForm;
