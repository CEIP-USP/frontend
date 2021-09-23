import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  padding: 0.75rem;
  background-color: red;
`;

function Card(): JSX.Element {
  return (
    <div className="Card">
      <div>
        <Box />
      </div>
    </div>
  );
}

export default Card;
