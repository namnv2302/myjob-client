export const LocalStorageAccessTokenKey = "accessToken" as const;
export const LocalStorageRefreshTokenKey = "refreshToken" as const;

export const getAccessToken = (): string | null =>
  localStorage.getItem(LocalStorageAccessTokenKey);
export const getRefreshToken = (): string | null =>
  localStorage.getItem(LocalStorageRefreshTokenKey);
export const saveAccessToken = (value: string) =>
  localStorage.setItem(LocalStorageAccessTokenKey, value);
export const saveRefreshToken = (value: string) =>
  localStorage.setItem(LocalStorageRefreshTokenKey, value);
export const clearAuthorizationToken = () => {
  localStorage.removeItem(LocalStorageAccessTokenKey);
  localStorage.removeItem(LocalStorageRefreshTokenKey);
};
