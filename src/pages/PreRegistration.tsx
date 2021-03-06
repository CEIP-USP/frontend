import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { FormHandler } from '../services/Forms/Form';
import MainDataForm from '../components/Forms/MainDataForm';
import OptionalDataForm from '../components/Forms/OptionalDataForm';
import { Document } from '../components/Forms/Forms.interface';
import { useHistory } from 'react-router';

function PreRegistration(): JSX.Element {
  const history = useHistory();
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

    formHandler
      .handleSubmit()
      .then(() => {
        alert('Conta criada com sucesso!');
        history.push('/login');
      })
      .catch((errors) => setErrors(errors));
  }

  function handleSubmitWithoutOptionalData() {
    setFormData({
      ...formData,
      phone: '',
      address: '',
    });

    handleSubmit();
  }

  return (
    <>
      <div className="m-5 lg:w-1/2 lg:mx-auto">
        <h1 className="mt-4 mb-2 text-3xl lg:text-center">
          {isStepOne ? 'Seja Bem Vindo(a)!' : 'Dados do perfil'}
        </h1>

        {errors.length > 0 && (
          <div className="my-5">
            <h1 className="mt-4 mb-2 text-2xl lg:text-center">
              Erros encontrados
            </h1>
            <ul className="list-disc list-inside ">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col space-y-4">
          {isStepOne ? (
            <>
              <MainDataForm formData={formData} setField={setField} />
              <div className="flex justify-end">
                <button
                  className="w-1/2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  onClick={() => setIsStepOne(false)}
                >
                  Pr??ximo
                </button>
              </div>
            </>
          ) : (
            <>
              <OptionalDataForm formData={formData} setField={setField} />
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
                    onClick={handleSubmitWithoutOptionalData}
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

export default PreRegistration;
