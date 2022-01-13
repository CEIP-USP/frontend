import { ProfileService } from '../services/profile/profile.service';
import { startAxios } from './Axios';

export const useProfileService = () => {
  return new ProfileService(startAxios());
};
