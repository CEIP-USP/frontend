import React from 'react';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

const Home = () => {
  return (
    <main className="bg-background-default min-h-screen">
      <div className="p-4 container mx-auto max-w-screen-md">
        <SearchBar />
        <Card />
      </div>
    </main>
  );
};

export default Home;
