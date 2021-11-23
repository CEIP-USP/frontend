import React from 'react';
import Routes from './routes';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar links={[{ name: 'Página Principal', url: '/' }]} />
        <div className="pt-16 h-screen">
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
