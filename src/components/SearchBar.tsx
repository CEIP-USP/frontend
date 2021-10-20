import React from 'react';
import TextInput from '../components/TextInput';

const SearchBar = ({ className = '' }: { className?: string }) => {
  const _className = `w-full ${className}`;
  return <TextInput placeholder="Digite o nome..." className={_className} />;
};

export default SearchBar;
