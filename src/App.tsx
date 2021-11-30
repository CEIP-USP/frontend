import React from 'react';
import { AuthContextProvider } from './contexts/auth.context';
import Routes from './routes';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar links={[{ name: 'Página Principal', url: '/restricted' }]} />
          <div className="pt-16 h-screen">
            <Routes />
          </div>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
