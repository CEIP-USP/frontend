import React, { useState } from 'react';

import { IoIosArrowDown } from 'react-icons/io';

export interface CardProps {
  status: string;
  statusColor: string;
  name: string;
  phoneNumber?: string;
  email?: string;
}

const Card = ({ status, statusColor, name, phoneNumber, email }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const classHidden = isOpen ? 'max-h-52' : 'max-h-0';
  const classRotate = isOpen ? 'rotate-180' : '';
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card bg-card-default rounded-lg p-4">
      <div
        onClick={toggle}
        className="flex flex-row justify-between items-center 
        cursor-pointer"
      >
        <h2 className="font-semibold">{name}</h2>
        <IoIosArrowDown
          className={`fill-current h-6 w-6 transform transition-transform duration-300 ${classRotate}`}
        />
      </div>
      <div
        className={`overflow-hidden ${classHidden} duration-300 transition-all`}
      >
        <div className="container h-full pt-2">
          <div className="flex flex-row">
            <div className="flex-1 flex flex-col">
              {phoneNumber && (
                <p className="text-gray-900 font-medium">{phoneNumber}</p>
              )}
              {email && <p className="text-gray-700 font-normal">{email}</p>}
            </div>
            <div className="flex-1 flex flex-col items-end justify-end">
              <button
                className={`py-1 px-4 bg-${statusColor} text-gray-100 text-sm rounded-lg focus:border-4 border-blue-300`}
              >
                {status}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
