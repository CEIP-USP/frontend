import CardList from '../components/CardList';
import React from 'react';
import SearchBar from '../components/SearchBar';

const Home: React.FC = () => {
  return (
    <main className="bg-background-default min-h-screen">
      <div className="p-4 container mx-auto max-w-screen-md">
        <SearchBar className="mb-4" />
        <CardList />
      </div>
    </main>
  );
};

export default Home;
