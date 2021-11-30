import { AxiosError } from 'axios';
import jwt, { JwtPayload, TokenExpiredError } from 'jsonwebtoken';
import { useContext } from 'react';
import {
  AuthContext,
  IAuthContextState,
  IJWTProfile,
} from '../contexts/auth.context';
import {
  AccessTokenResponse,
  AuthService,
} from '../services/auth/auth.service';
import { startAxios } from './Axios';

export const useAuth = (): IUseAuth => {
  const authService = useAuthService();

  const [state, setState] = useContext(AuthContext);

  const isAuthenticated = validateTokenContent(state.accessToken + '');

  const handleAccessTokenResponse = (
    response: AccessTokenResponse | string | undefined
  ) => {
    if (typeof response !== 'string' && response?.accessToken) {
      setState({
        ...state,
        accessToken: response.accessToken,
        isLoading: false,
        isError: false,
        isBadCredentials: false,
        profile: parseTokenToProfile(response.accessToken),
      });
      return response.accessToken;
    }
  };

  const handlers = makeHandlers(setState, state);

  const refresh = () => {
    setState({ ...state, isLoading: true, isError: false });
    return authService
      .refresh()
      .then(handleAccessTokenResponse)
      .catch((err: AxiosError) => {
        if (codeIsClientError(err.response?.status)) {
          handlers.couldntRefresh();
        } else handlers.serverError();
      });
  };

  const signIn = (email: string, password: string) => {
    setState({
      ...state,
      isLoading: true,
      isError: false,
      isBadCredentials: false,
    });
    return authService
      .login(email, password)
      .then(handleAccessTokenResponse)
      .catch((err: AxiosError) => {
        if (codeIsClientError(err?.response?.status)) {
          setState({
            ...state,
            isLoading: false,
            isBadCredentials: true,
          });
        } else handlers.serverError();
      });
  };

  const signOut = () =>
    authService.logout().then(() =>
      setState({
        ...state,
        accessToken: '',
        isLoading: false,
        isError: false,
        isBadCredentials: false,
      })
    );

  const getAccessToken = async () => {
    let accessToken = state.accessToken;

    if (!isAuthenticated) throw new Error('Not authenticated');

    if (!validateToken(accessToken + '')) accessToken = (await refresh()) + '';

    if (!accessToken || !validateToken(accessToken + ''))
      throw new Error('Invalid access token');

    const timeRemaining = decodeTokenAndReturnTimeRemaining(accessToken);
    if (timeRemaining < minimumTimeRemaining) {
      refresh();
    }

    return accessToken;
  };

  return {
    getAccessToken,
    isAuthenticated,
    isBadCredentials: state.isBadCredentials,
    isError: state.isError,
    isLoading: state.isLoading,
    signIn: (email, password) => signIn(email, password).then(() => undefined),
    signOut,
    tryAuthenticate: () => !isAuthenticated && refresh(),
  };
};

export interface IUseAuth {
  isAuthenticated: boolean;
  isLoading: boolean;
  isError: boolean;
  isBadCredentials: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  getAccessToken: () => Promise<string>;
  tryAuthenticate: () => void;
}

const validateTokenContent = (token: string) => {
  try {
    const result = jwt.decode(token);
    return !!result;
  } catch (err) {
    return (err as Error)?.name === TokenExpiredError.name;
  }
};

const validateToken = (token: string) => {
  try {
    jwt.decode(token);
    return true;
  } catch (err) {
    return false;
  }
};

const minimumTimeRemaining = 5 * 60;

const decodeTokenAndReturnTimeRemaining = (token: string) => {
  try {
    const decoded = jwt.decode(token);
    if (typeof decoded === 'string') return 0;
    if (!decoded?.exp) return 0;

    const now = Date.now() / 1000;
    return decoded.exp - now;
  } catch (err) {
    return 0;
  }
};

const useAuthService = () => new AuthService(startAxios());

const codeIsClientError = (code: number | undefined) =>
  !!code && code >= 400 && code < 500;

function makeHandlers(
  setState: (nextState: IAuthContextState) => void,
  state: IAuthContextState
) {
  return {
    badCredentials: () => {
      setState({
        ...state,
        isLoading: false,
        isError: false,
        isBadCredentials: true,
      });
    },
    couldntRefresh: () => {
      setState({
        ...state,
        isLoading: false,
        isError: false,
      });
    },
    serverError: () => {
      setState({
        ...state,
        isLoading: false,
        isError: true,
      });
    },
  };
}

const parseTokenToProfile = (token: string) => {
  const decoded: IJWTProfile & JwtPayload = jwt.decode(token) as IJWTProfile &
    JwtPayload;
  if (decoded) {
    return {
      name: decoded.name,
      email: decoded.email,
      role: decoded.role,
    };
  }
  return undefined;
};
