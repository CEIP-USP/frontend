import React, { Ref, forwardRef } from 'react';

import TextInput from '../components/TextInput';

const SearchBar = forwardRef(
  (
    {
      className = '',
      ...textInputProps
    }: { className?: string } & React.ComponentProps<'input'>,
    ref?: Ref<HTMLInputElement>
  ) => {
    const _className = `w-full ${className}`;
    return (
      <TextInput
        placeholder="Digite o nome..."
        className={_className}
        {...textInputProps}
        ref={ref}
      />
    );
  }
);
SearchBar.displayName = 'SearchBar';

export default SearchBar;
