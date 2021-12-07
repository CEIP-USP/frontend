import React, { useEffect, useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { useParams } from 'react-router';
import { IJWTProfile } from '../contexts/auth.context';

const ManageProfile = () => {
  const { id }: { id: string } = useParams();
  const [profile, setProfile] = useState<IJWTProfile>({
    name: 'Erick',
    email: 'gostosa@gostosa.com',
    role: 'User',
  });

  useEffect(() => {
    //TODO: Fetch do profile
  }, [id]);

  return (
    <>
      {profile.role ? (
        <div className="bg-blue-700 h-1/4" />
      ) : (
        <div className="bg-red-700 h-1/4" />
      )}

      <div className="h-screen flex flex-col items-center">
        <div className="-mt-20 md:-mt-24 w-36 h-36 md:w-48 md:h-48 rounded-full bg-gray-300 border-2 border-gray-500 flex items-center justify-center">
          <FaRegUser size={60} />
        </div>
        <p className="text-xl md:text-3xl font-semibold">{profile.name}</p>
        {profile.role ? (
          <p className="text-blue-500 font-semibold md:text-xl">Confirmado</p>
        ) : (
          <p className="text-red-500 font-semibold md:text-xl">Pendente</p>
        )}
      </div>
    </>
  );
};

export default ManageProfile;
