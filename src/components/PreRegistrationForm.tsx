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
    dayOfSecondShot: new Date(),
    cpf: '',
  });

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { name, email, phone, address, dayOfSecondShot, cpf } = formData;

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
      <h1>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Nome"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Telefone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="Endereço"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
        <DatePicker
          selected={formData.dayOfSecondShot}
          onChange={(date) =>
            setFormData({ ...formData, dayOfSecondShot: date as Date })
          }
        />
        <input
          type="text"
          placeholder="CPF"
          value={formData.cpf}
          onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}

export default PreRegistrationForm;
