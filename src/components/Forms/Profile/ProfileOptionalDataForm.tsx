import { FormSection } from '../Utils/FormSection';
import { FormElement } from '../Utils/FormElement';
import React, { FC } from 'react';
import { FormInput } from '../Utils/FormInput';

type ProfileOptionalDataFormState = {
  phone?: string;
  address?: string;
};
export type ProfileOptionalDataFormProps = {
  formState: ProfileOptionalDataFormState;
  setFormState: (formState: ProfileOptionalDataFormState) => void;
  disabled?: boolean;
};
export const ProfileOptionalDataForm: FC<ProfileOptionalDataFormProps> = ({
  formState,
  setFormState,
  disabled,
}) => {
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, phone: e.target.value + '' });
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, address: e.target.value + '' });
  };

  return (
    <FormSection label="Dados opcionais">
      <FormElement label="Telefone de contato">
        <FormInput
          type="text"
          autoComplete="false"
          value={formState.phone}
          disabled={disabled}
          onChange={handlePhoneChange}
        />
      </FormElement>
      <FormElement label="Endereço">
        <FormInput
          type="text"
          autoComplete="false"
          value={formState.address}
          disabled={disabled}
          onChange={handleAddressChange}
        />
      </FormElement>
    </FormSection>
  );
};
