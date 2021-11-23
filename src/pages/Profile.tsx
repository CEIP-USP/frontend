import React from 'react';
import Table from '../components/Table';
import { FaRegUser } from 'react-icons/fa';

function Profile() {
  const imageUrl = null;
  const services = [
    'Ateliê Aberto',
    'Plano Institucional',
    ' Oficina de Jogos do LEDA: Programa de Intervenção para alunos da Escola Fundamental',
  ];
  return (
    <>
      <div className="bg-blue-700 h-1/4 md:h-1/2" />
      <div className="h-screen flex flex-col items-center">
        <div className="-mt-20 w-36 h-36 rounded-full bg-gray-300 border-2 border-gray-500 flex items-center justify-center">
          {imageUrl ? (
            <img src={imageUrl} alt="Profile" className="rounded-full" />
          ) : (
            <FaRegUser size={50} />
          )}
        </div>
        <p className="text-xl font-semibold">Olá, Erick Rodrigues!</p>
        <p className="text-gray-500">Supervisor geral</p>
        <div className="space-x-2 my-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded duration-300"
            onClick={() => alert('Em construção...')}
          >
            Editar dados
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded duration-300"
            onClick={() => alert('Em construção...')}
          >
            Excluir conta
          </button>
        </div>
        <Table values={services} />
      </div>
    </>
  );
}

export default Profile;
