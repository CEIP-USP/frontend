import React from 'react';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';

const Home: React.FC = () => {
  return (
    <main className="bg-background-default min-h-screen">
      <div className="p-4 container mx-auto max-w-screen-md">
        <SearchBar />
        <CardList />
      </div>
    </main>
  );
};

export default Home;
