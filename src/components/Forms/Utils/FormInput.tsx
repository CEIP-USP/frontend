import React, { ComponentPropsWithRef, FC } from 'react';

const mergeClassNames = (_c1?: string, _c2?: string) => {
  const c1 = (_c1 || '').split(' ');
  const c2 = (_c2 || '').split(' ');
  return c1
    .concat(c2)
    .filter((c) => c)
    .join(' ');
};
export const FormInput: FC<ComponentPropsWithRef<'input'>> = ({
  className,
  ...props
}) => (
  <input
    {...props}
    className={mergeClassNames(
      className,
      'py-2 px-1 text-gray-900 outline-none block h-full w-full'
    )}
  />
);
