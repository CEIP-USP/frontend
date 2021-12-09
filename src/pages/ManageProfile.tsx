import React, { useEffect, useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { useParams } from 'react-router';
import { IJWTProfile } from '../contexts/auth.context';
import Switch from '../components/Switch';
import MainDataForm from '../components/Forms/MainDataForm';
import OptionalDataForm from '../components/Forms/OptionalDataForm';
import { Document } from '../components/Forms/Forms.interface';
import ChipsDropdown from '../components/ChipsDropdown';

const ManageProfile = () => {
  const { id }: { id: string } = useParams();
  const [checked, setChecked] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [profile, setProfile] = useState<IJWTProfile>({
    name: 'Erick',
    email: 'gostosa@gostosa.com',
    role: 'User',
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    currentPassword: '',
    password: '',
    passwordConfirmation: '',
    phone: '',
    address: '',
    hasSecondShot: '',
    dayOfSecondShot: new Date(),
    document: {
      type: 'CPF',
      value: '',
    },
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const services: string[] = [
    'APOIAR',
    'Ateliê Aberto',
    'Centro de Psicologia Aplicada no Trabalho (CPAT)',
    'Clínica Psicológica Durval Marcondes',
    'Grupo Reflexivo de Apoio e Permanência da USP',
    'Grupo vivencial com danças circulares',
    'Núcleo de Educação Terapêutica (NET)',
    'Núcleo de Orientação Profissional para alunos USP (NOP)',
    'Oficina de Jogos do LEDA: Programa de Intervenção para alunos da Escola Fundamental',
    'Plantão Institucional',
    'Plantão Psicológico LEFE',
    'Serviço de Orientação à Queixa Escolar',
    'Serviço de Orientação Profissional (SOP)',
    'Serviço de Psicologia Escolar (SePE)',
    'Serviço Rede de Atenção à Pessoa Indígena',
  ];

  useEffect(() => {
    setConfirmed(profile.role ? true : false);
  }, []);

  useEffect(() => {
    //TODO: Fetch do profile
  }, [id]);

  const setField = (field: string, value: string | Date | Document) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  function handleSubmit() {
    const {
      name,
      email,
      password,
      passwordConfirmation,
      phone,
      address,
      hasSecondShot,
      dayOfSecondShot,
      document,
    } = formData;
  }

  function handleUpdate() {
    const {
      name,
      email,
      password,
      passwordConfirmation,
      phone,
      address,
      hasSecondShot,
      dayOfSecondShot,
      document,
    } = formData;
  }

  return (
    <>
      {confirmed ? (
        <div className="bg-blue-700 h-1/4" />
      ) : (
        <div className="bg-red-700 h-1/4" />
      )}

      <div className="min-h-screen flex flex-col items-center">
        <div className="-mt-20 md:-mt-24 w-36 h-36 md:w-48 md:h-48 rounded-full bg-gray-300 border-2 border-gray-500 flex items-center justify-center">
          <FaRegUser size={60} />
        </div>
        <p className="text-xl md:text-3xl font-semibold">{profile.name}</p>
        {confirmed ? (
          <p className="text-blue-500 font-semibold md:text-xl">Confirmado</p>
        ) : (
          <p className="text-red-500 font-semibold md:text-xl">Pendente</p>
        )}

        <div className="my-10 lg:w-1/2 lg:mx-auto space-y-2">
          <div className="flex justify-end">
            <Switch checked={checked} setChecked={setChecked} />
          </div>

          <MainDataForm
            formData={formData}
            setField={setField}
            disabled={!checked}
          />
          <OptionalDataForm
            formData={formData}
            setField={setField}
            disabled={!checked}
          />

          <ChipsDropdown
            label="Serviços Utilizados"
            options={services}
            selected={selectedServices}
            setSelected={setSelectedServices}
            disabled={!checked}
          />

          <div className="py-8 flex flex-col w-full space-y-2">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded duration-300"
              onClick={() => alert('Em construção...')}
            >
              {confirmed ? 'Alterar dados' : 'Confirmar pré-cadastro'}
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded duration-300"
              onClick={() => alert('Em construção...')}
            >
              {confirmed ? 'Remover usuário' : 'Remover pré-cadastro'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageProfile;
