import React from 'react';
import { WrapRequireAuthN } from '../components/WrapRequireAuthN';
import { ProfileBasicDataForm } from '../components/Forms/Profile/ProfileBasicDataForm';
import { ProfileOptionalDataForm } from '../components/Forms/Profile/ProfileOptionalDataForm';
import { FormErrorList } from '../components/Forms/Utils/FormErrorList';
import {
  EditProfileFormData,
  useEditProfile,
} from '../hooks/profile/useEditProfile';

function EditProfile() {
  const editProfile = useEditProfile();

  const setFormDataSpread = (
    data: Partial<React.SetStateAction<EditProfileFormData>>
  ) => editProfile.setFormData({ ...editProfile.formData, ...data });

  return (
    <div className="p-5 max-w-screen-md lg:mx-auto space-y-2">
      <h1 className="mt-4 mb-2 text-3xl lg:text-center">Editar dados</h1>
      <ProfileBasicDataForm
        formState={editProfile.formData}
        setFormState={setFormDataSpread}
      />
      <ProfileOptionalDataForm
        formState={editProfile.formData}
        setFormState={setFormDataSpread}
      />
      <FormErrorList errors={editProfile.errors} />
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded duration-300"
        onClick={editProfile.submit}
      >
        Atualizar
      </button>
    </div>
  );
}

export default WrapRequireAuthN(EditProfile);
