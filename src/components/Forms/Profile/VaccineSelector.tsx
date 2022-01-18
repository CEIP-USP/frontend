import React, { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import { FormSection } from '../Utils/FormSection';
import { FormElement } from '../Utils/FormElement';

export const VaccineSelector: FC<{
  dayOfSecondShot?: Date;
  setDayOfSecondShot: (dayOfSecondShot: Date) => void;
  disabled?: boolean;
}> = ({ dayOfSecondShot, setDayOfSecondShot, disabled }) => {
  const [isVaccinated, setIsVaccinated] = useState(!!dayOfSecondShot);
  const handleIsVaccinated = () => setIsVaccinated(true);
  const handleIsNotVaccinated = () => setIsVaccinated(false);

  return (
    <FormSection label="Vacinação">
      <FormElement label="Já está vacinado contra COVID-19?">
        <form className="grid grid-cols-1 p-1">
          <label className="flex items-center space-x-1">
            <input
              name="isVaccinated"
              id="true"
              checked={isVaccinated}
              onChange={handleIsVaccinated}
              type="radio"
              disabled={disabled}
            />
            <span>Sim</span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              name="isVaccinated"
              id="false"
              checked={!isVaccinated}
              onChange={handleIsNotVaccinated}
              type="radio"
              disabled={disabled}
            />
            <span>Não</span>
          </label>
        </form>
      </FormElement>
      {isVaccinated && (
        <FormElement label="Data da última dose, segundo esquema vacinal">
          <DatePicker
            id="dayOfSecondShot"
            autoComplete="false"
            className="py-2 px-1 bg-transparent text-gray-900 outline-none block h-full w-full"
            selected={dayOfSecondShot}
            onChange={setDayOfSecondShot}
          />
        </FormElement>
      )}
    </FormSection>
  );
};
