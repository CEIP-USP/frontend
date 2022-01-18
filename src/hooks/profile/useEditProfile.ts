import { useProfile } from './useProfile';
import { useProfileService } from './useProfileService';
import { useEffect, useState } from 'react';
import { Document, FormData } from '../../components/Forms/Forms.interface';
import { deepCompareObjects } from '../../util/deepCompare';

export type EditProfileFormData = Omit<
  FormData,
  | 'currentPassword'
  | 'password'
  | 'passwordConfirmation'
  | 'hasSecondShot'
  | 'document'
  | 'dayOfSecondShot'
  | 'email'
> & {
  document?: Document;
  dayOfSecondShot?: Date;
};
const defaultProfileData: EditProfileFormData = {
  name: '',
  phone: '',
  address: '',
  dayOfSecondShot: new Date(),
  document: {
    type: 'CPF',
    value: '',
  },
};
const normalizeProfileData = ({
  name,
  phone,
  address,
  dayOfSecondShot,
  document,
}: EditProfileFormData) => {
  return {
    name: name.trim(),
    phone: phone.trim(),
    address: address.trim(),
    dayOfSecondShot,
    document:
      (!!document && {
        type: document.type,
        value: document.value?.trim(),
      }) ||
      undefined,
  };
};
const validateProfileData = ({ name, document }: EditProfileFormData) => {
  const errors: string[] = [];

  if (!name) errors.push('O nome é obrigatório');
  if (!!document && !!document.type && !document.value)
    errors.push('Preencha o documento ou indique que não possui');

  return errors;
};
export const useEditProfile = () => {
  const profile = useProfile();
  const profileService = useProfileService();

  const [apiProfile, setApiProfile] = useState<EditProfileFormData | undefined>(
    undefined
  );
  const [formData, setFormData] = useState(defaultProfileData);
  const [errors, setErrors] = useState<string[]>([]);

  const loadApiProfile = () => {
    const id = profile?._id;
    if (!id) return;
    profileService.getProfile(id).then((data) => setApiProfile(data));
  };

  const syncApiProfileWithFormData = () => {
    if (!apiProfile) return;
    setFormData({
      ...defaultProfileData,
      ...formData,
      ...apiProfile,
    });
  };

  const validateFormData = () => {
    if (!apiProfile) return;
    setErrors(validateProfileData(normalizeProfileData(formData)));
  };

  useEffect(loadApiProfile, [profile]);
  useEffect(syncApiProfileWithFormData, [apiProfile]);
  useEffect(validateFormData, [formData]);

  const submit = () => {
    const id = profile?._id;
    if (!id) return;

    const localNormalized = normalizeProfileData(formData);
    const apiNormalized =
      (apiProfile && normalizeProfileData(apiProfile)) || {};

    if (deepCompareObjects(localNormalized, apiNormalized)) return;

    profileService
      .editProfile(id, normalizeProfileData(formData))
      .then(loadApiProfile);
  };

  return { formData, setFormData, submit, errors };
};
