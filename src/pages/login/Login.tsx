import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useAuth } from '../../hooks/Auth';
import { BiError } from 'react-icons/bi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, isAuthenticated, isLoading, isError, isBadCredentials } =
    useAuth();
  const location = useLocation();
  const history = useHistory();

  function handleSubmit() {
    signIn(email, password);
  }

  useEffect(() => {
    const queryParams = Object.fromEntries(
      new URLSearchParams(location.search).entries()
    );
    if (isAuthenticated)
      queryParams.callback
        ? history.push(queryParams.callback)
        : history.push('/profile');
  }, [isAuthenticated]);

  return (
    <>
      <div>
        <h1 className="my-8 text-xl md:text-3xl font-bold text-center">
          Login
        </h1>
      </div>

      <div className="mx-3 md:mx-auto md:w-1/2 space-y-6">
        {isError && (
          <div className="flex items-center space-x-4 bg-red-500 p-4 rounded-md">
            <BiError size={50} color="white" />
            <div className="space-y-1 text-md">
              <h6 className="font-semibold text-white">Erro Interno</h6>
              <p className="font-regular text-red-100 leading-tight">
                O servidor não está disponível no momento. Tente mais tarde.
              </p>
            </div>
          </div>
        )}
        {isBadCredentials && (
          <div className="flex items-center space-x-4 bg-red-500 p-4 rounded-md">
            <BiError size={50} color="white" />
            <div className="space-y-1 text-md">
              <h6 className="font-semibold text-white">Erro</h6>
              <p className="font-regular text-red-100 leading-tight">
                Credenciais inválidas!
              </p>
            </div>
          </div>
        )}
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
            disabled={isLoading}
          >
            Entrar
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
