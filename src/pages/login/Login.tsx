import React, { useState } from 'react';
import { LoginHandler } from '../../services/Login/Login';

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

          <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 rounded p-1">
            <div className="-mt-3 absolute tracking-wider px-1 text-xs">
              <label htmlFor="email" className="bg-white text-gray-600 px-1">
                Email
              </label>
            </div>
            <input
              id="email"
              type="email"
              autoComplete="false"
              className="py-2 px-1 text-gray-900 outline-none block h-full w-full"
              required
              onBlur={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 rounded p-1">
            <div className="-mt-3 absolute tracking-wider px-1 text-xs">
              <label htmlFor="password" className="bg-white text-gray-600 px-1">
                Senha
              </label>
            </div>
            <input
              id="password"
              type="password"
              autoComplete="false"
              className="py-2 px-1 text-gray-900 outline-none block h-full w-full"
              required
              onBlur={(e) => setPassword(e.target.value)}
            />
          </div>
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