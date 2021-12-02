import React, { useEffect, useState } from 'react';
import Routes from './routes';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from './hooks/Auth';

type TypeLink = {
  name: string;
  url: string;
};

function App() {
  const { isAuthenticated } = useAuth();
  const [links, setLinks] = useState<TypeLink[]>([]);

  useEffect(() => {
    if (isAuthenticated) {
      setLinks([{ name: 'Meu perfil', url: '/profile' }]);
    } else setLinks([]);
  }, [isAuthenticated]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar links={links} />
        <div className="pt-16 h-screen">
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
