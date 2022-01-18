import React, { FC } from 'react';

export const FormElement: FC<{
  label: string;
}> = ({ label, children }) => {
  return (
    <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 rounded p-1">
      <div className="-mt-3 absolute tracking-wider px-1 text-xs">
        <label htmlFor="name" className="bg-white text-gray-600 px-1">
          {label}
        </label>
      </div>
      {children}
    </div>
  );
};
