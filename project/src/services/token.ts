const AUTH_TOKEN_KEY = 'universal-token';

export const createToken = (): string => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  return token ?? '';
};

export const saveToken = (token: string): void => {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
};
