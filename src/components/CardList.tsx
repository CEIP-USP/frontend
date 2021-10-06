import React from 'react';

import Card from './Card';

import { CardProps } from './Card';

const mockCards: [CardProps] = [
  {
    name: 'Josefino Pinto',
    email: 'josefino@gmail.com',
    phoneNumber: '(11) 99144-3505',
    status: 'Confirmado',
    statusColor: 'button-confirmed',
  },
];

const CardList = () => {
  return (
    <Card
      name="Josefino Pinto"
      email="josefino@gmail.com"
      phoneNumber="(11) 99144-3505"
      status="Confirmado"
      statusColor="button-confirmed"
    />
  );
};

export default CardList;
