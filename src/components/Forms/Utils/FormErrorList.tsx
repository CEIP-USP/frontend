import React from 'react';

export type FormErrorListProps = {
  errors: string[];
};

export const FormErrorList: React.FC<FormErrorListProps> = ({ errors }) => {
  return (
    <ul className="list-disc ml-4">
      {errors.map((error) => (
        <li key={error} className="text-red-500">
          {error}
        </li>
      ))}
    </ul>
  );
};
