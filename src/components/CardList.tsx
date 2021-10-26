import Card, { CardProps } from './Card';

import React from 'react';

export type CardListProps = {
  registrations: CardProps[];
};

const CardList = (props: CardListProps) => {
  return (
    <div className="flex flex-col space-y-4 items-strech">
      {props.registrations.map((registration, i) => (
        <Card key={i} {...registration} />
      ))}
    </div>
  );
};

export default CardList;
