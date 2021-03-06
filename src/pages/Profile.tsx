import React from 'react';
import Table from '../components/Table';
import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useProfile } from '../hooks/Profile';
import { useProfileService } from '../hooks/ProfileService';
import { WrapRequireAuthN } from '../components/WrapRequireAuthN';

function Profile() {
  const profile = useProfile();
  const profileService = useProfileService();

  function removeProfile() {
    // TODO: Adicionar modal para confirmar a remoção do perfil
    if (!profile?._id) return;
    profileService.deleteProfile(profile._id).then(() => {
      window.location.href = '/';
    });
  }

  return (
    <>
      <div className="bg-blue-700 h-1/4" />
      <div className="min-h-screen flex flex-col items-center">
        <div className="-mt-20 md:-mt-24 w-36 h-36 md:w-48 md:h-48 rounded-full bg-gray-300 border-2 border-gray-500 flex items-center justify-center">
          <FaRegUser size={60} />
        </div>
        <p className="text-xl md:text-3xl font-semibold">
          Olá, {profile?.name}!
        </p>
        <p className="text-gray-500 md:text-xl">{profile?.roles?.join(', ')}</p>
        <div className="space-x-2 my-6">
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded duration-300"
            to="/profile/edit"
          >
            Editar dados
          </Link>
          <Link
            to="#"
            className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded duration-300"
            onClick={removeProfile}
          >
            Excluir conta
          </Link>
        </div>
        {/* TODO: Passar os serviços utilizados pelo usuário */}
        <Table values={[]} />
      </div>
    </>
  );
}

export default WrapRequireAuthN(Profile);
