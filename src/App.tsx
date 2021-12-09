import React from 'react';
import Routes from './routes';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { usePermissions } from './hooks/Permissions';

function App() {
  const { links } = usePermissions();

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
