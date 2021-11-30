import React from 'react';
import Table from '../components/Table';
import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Profile() {
  const services = [
    'Ateliê Aberto',
    'Plano Institucional',
    ' Oficina de Jogos do LEDA: Programa de Intervenção para alunos da Escola Fundamental',
  ];
  return (
    <>
      <div className="bg-blue-700 h-1/4" />
      <div className="h-screen flex flex-col items-center">
        <div className="-mt-20 md:-mt-24 w-36 h-36 md:w-48 md:h-48 rounded-full bg-gray-300 border-2 border-gray-500 flex items-center justify-center">
          <FaRegUser size={60} />
        </div>
        <p className="text-xl md:text-3xl font-semibold">
          Olá, Erick Rodrigues!
        </p>
        <p className="text-gray-500 md:text-xl">Supervisor geral</p>
        <div className="space-x-2 my-6">
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded duration-300"
            to="/profile/edit"
          >
            Editar dados
          </Link>
          <Link
            className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded duration-300"
            onClick={() => alert('Em construção...')}
            to="#"
          >
            Excluir conta
          </Link>
        </div>
        <Table values={services} />
      </div>
    </>
  );
}

export default Profile;
