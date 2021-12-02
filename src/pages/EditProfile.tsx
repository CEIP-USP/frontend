import React, { useEffect, useState } from 'react';
import MainDataForm from '../components/Forms/MainDataForm';
import OptionalDataForm from '../components/Forms/OptionalDataForm';
import { Document } from '../components/Forms/Forms.interface';
import { RequireAuthN } from '../components/hoc/RequireAuthN';

function EditProfile() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    currentPassword: '',
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

  useEffect(() => {
    //TODO: buscar dados do perfil no back
  }, []);

  function handleSubmit() {
    alert('Em construção...');
  }

  const setField = (field: string, value: string | Date | Document) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <RequireAuthN>
      <div className="m-5 lg:w-1/2 lg:mx-auto space-y-2">
        <h1 className="mt-4 mb-2 text-3xl lg:text-center">Editar dados</h1>
        <MainDataForm formData={formData} setField={setField} edit={true} />
        <OptionalDataForm formData={formData} setField={setField} />
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded duration-300"
          onClick={handleSubmit}
        >
          Atualizar
        </button>
      </div>
    </RequireAuthN>
  );
}

export default EditProfile;
