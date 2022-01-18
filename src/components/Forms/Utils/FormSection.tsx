import React, { FC } from 'react';

export const FormSection: FC<{ label: string }> = ({ label, children }) => {
  return (
    <div className="space-y-4">
      <div className="my-2">
        <p className="text-lg">{label}</p>
        <hr />
      </div>
      {children}
    </div>
  );
};
