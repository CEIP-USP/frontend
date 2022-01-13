import React, { ComponentType } from 'react';
import { RequireAuthN } from './hoc/RequireAuthN';

export const WrapRequireAuthN = <P,>(WrappedComponent: ComponentType<P>) => {
  const NewComponent = (props: P) => (
    <RequireAuthN>
      <WrappedComponent {...props} />
    </RequireAuthN>
  );
  NewComponent.displayName = `WrapRequireAuthN(${WrappedComponent.displayName})`;
  return NewComponent;
};
