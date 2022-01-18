import React, { FC } from 'react';
import { Document } from '../Forms.interface';
import { VaccineSelector } from './VaccineSelector';
import { FormInput } from '../Utils/FormInput';
import { FormElement } from '../Utils/FormElement';
import { FormSection } from '../Utils/FormSection';
import { DocumentForm } from './DocumentForm';

type ProfileBasicDataFormState = {
  name: string;
  document?: Document;
  dayOfSecondShot?: Date;
};

export type ProfileBasicDataFormProps = {
  formState: ProfileBasicDataFormState;
  setFormState: (formState: ProfileBasicDataFormState) => void;
  disabled?: boolean;
};

export const ProfileBasicDataForm: FC<ProfileBasicDataFormProps> = ({
  formState,
  setFormState,
  disabled,
}) => {
  const mergeState = (partialState: Partial<ProfileBasicDataFormState>) => {
    setFormState({
      ...formState,
      ...partialState,
    });
  };

  const mergeStateFromEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    mergeState({
      [event.target.id]: event.target.value,
    });
  };

  const mergeDocumentState = (partialState: Partial<Document>) => {
    const docType = formState.document?.type || partialState.type;
    if (!docType) return;

    mergeState({
      document: {
        type: docType,
        ...formState.document,
        ...partialState,
      },
    });
  };

  const handleDayOfSecondShot = (date: Date | null | (Date | null)[]) => {
    let _date;
    if (Array.isArray(date)) _date = date.find((d) => !!d);
    else _date = date;
    if (!_date || isNaN(_date.getTime())) return;

    mergeState({
      dayOfSecondShot: _date,
    });
  };

  return (
    <div className="space-y-4">
      <FormSection label="Dados pessoais">
        <FormElement label="Nome">
          <FormInput
            id="name"
            type="text"
            value={formState.name}
            onChange={mergeStateFromEvent}
            required
            disabled={disabled}
            autoComplete="false"
          />
        </FormElement>
      </FormSection>
      <DocumentForm
        document={formState.document || { type: 'CPF' }}
        setDocument={mergeDocumentState}
      />
      <VaccineSelector
        dayOfSecondShot={formState.dayOfSecondShot}
        setDayOfSecondShot={handleDayOfSecondShot}
      />
    </div>
  );
};
