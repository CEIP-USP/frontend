import React from 'react';
import { AuthContextProvider } from './contexts/auth.context';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </div>
  );
}

export default App;
