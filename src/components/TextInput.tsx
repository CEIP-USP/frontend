import React from 'react';

const TextInput = ({
  className: _className,
  ...props
}: React.ComponentProps<'input'>) => {
  const defaultClasses =
    'bg-transparent border-b border-black rounded-none px-2 py-1';
  const className = `${defaultClasses} ${_className}`;
  return <input className={className} {...props} />;
};

export default TextInput;
