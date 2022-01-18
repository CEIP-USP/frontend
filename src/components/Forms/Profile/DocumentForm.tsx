import { FormElement } from '../Utils/FormElement';
import { FormInput } from '../Utils/FormInput';
import { FormSection } from '../Utils/FormSection';
import React, { FC } from 'react';
import { Document, DocumentsTypesList } from '../Forms.interface';

export type DocumentFormProps = {
  document: Document;
  setDocument: (document: Document) => void;
  disabled?: boolean;
};
export const DocumentForm: FC<DocumentFormProps> = ({
  document,
  setDocument,
  disabled,
}) => {
  return (
    <FormSection label="Documentação">
      <FormElement label="Tipo de documento">
        <div className="grid grid-cols-1 space-y-1 p-1">
          {DocumentsTypesList.map(({ label, value }) => (
            <label className="flex items-center space-x-1" key={label}>
              <input
                className="form-radio"
                name="documentType"
                type="radio"
                value={value}
                checked={document?.type === value}
                disabled={disabled}
                onChange={(e) =>
                  setDocument({ ...document, type: e.target.value })
                }
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </FormElement>
      {!!document?.type && (
        <FormElement label={document.type}>
          <FormInput
            id="documentValue"
            type="text"
            value={document.value}
            onChange={(e) =>
              setDocument({ ...document, value: e.target.value + '' })
            }
            required
            disabled={disabled}
            autoComplete="false"
          />
        </FormElement>
      )}
    </FormSection>
  );
};
