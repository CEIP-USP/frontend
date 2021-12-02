import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div
        className="h-screen w-screen bg-cover bg-center bg-opacity-80"
        style={{
          backgroundImage:
            'url(https://www.ip.usp.br/site/wp-content/uploads/2016/10/FOTO-NESSA-Biblioteca_site2-Copia.jpg)',
        }}
      >
        <div className="container flex items-center mx-auto px-6 md:px-12 relative z-10 py-24 xl:py-40">
          <div className="bg-white p-5 md:p-10 rounded-xl border flex flex-col items-center lg:w-3/5 xl:w-2/5 relative space-y-6">
            <h1 className="text-4xl text-red-400 mt-4 font-bold">CEIP-USP</h1>

            <div className="font-source-sans-pro max-w-max">
              <p className="text-md md:text-lg text-center">
                Se você já tem agendamento para algum serviço no CEIP, crie aqui
                seu cadastro para acesso ao prédio.
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <Link
                to="/login"
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded duration-300 text-center"
              >
                Login
              </Link>
              <Link
                to="/pre-registration"
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded duration-300 text-center"
              >
                Realize o seu cadastro
              </Link>
            </div>

            <div className="font-source-sans-pro max-w-max space-y-6">
              <p className="text-md md:text-lg text-center">
                <span className="font-bold">IMPORTANTE:</span> Este cadastro não
                garante atendimento. Para informações sobre os serviços
                prestados no CEIP e forma de inscrição &nbsp;
                <a
                  className="text-blue-900 font-bold"
                  href="https://www.ip.usp.br/site/servicos-a-comunidade/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  acesse aqui
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
