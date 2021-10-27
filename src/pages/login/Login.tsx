import React, { useState } from 'react';
import { LoginHandler } from '../../services/Login/Login';

// import { Container } from './styles';

const Login = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    const loginHandler = new LoginHandler(email, password);
    loginHandler.handleSubmit();
  }

  return (
    <div className="m">
      <div>
        <h1 className="my-8 text-xl font-bold text-center">Entrar</h1>
      </div>
      <div>
        <form className="flex flex-col space-y-4 my-4 mx-3 lg:w-1/2 lg:mx-auto">
          <div className="-mt-3 absolute tracking-wider px-1 text-xs"></div>
          <input
            placeholder="Email"
            type="email"
            autoComplete="false"
            className="py-2 px-1 text-gray-900 border-b-2 outline-none block h-full w-full"
            required
            onBlur={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Senha"
            type="password"
            autoComplete="false"
            className="py-2 px-1 text-gray-900 border-b-2 outline-none block h-full w-full"
            required
            onBlur={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type="button"
            onClick={handleSubmit}
          >
            Próximo
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
