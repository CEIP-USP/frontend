import React from 'react';

const TextInput: React.FunctionComponent<React.ComponentProps<'input'>> = ({
  className: _className,
  ...props
}) => {
  const defaultClasses =
    'bg-transparent border-b border-black rounded-none px-2 py-1';
  const className = `${defaultClasses} ${_className}`;
  return <input className={className} {...props} />;
};

export default TextInput;
