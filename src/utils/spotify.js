import { SPOTIFY_ACCESS_TOKEN, SPOTIFY_EXPIRE_TIME, SPOTIFY_REFRESH_TOKEN } from '@Config/storage';
import { storage } from '@Services/storage';

export const saveAccessToken = accessToken => storage.setItem(SPOTIFY_ACCESS_TOKEN, accessToken);
export const getAccessToken = () => storage.getItem(SPOTIFY_ACCESS_TOKEN);
export const deleteAccessToken = () => storage.removeItem(SPOTIFY_ACCESS_TOKEN);

export const saveRefreshToken = refreshToken => storage.setItem(SPOTIFY_REFRESH_TOKEN, refreshToken);
export const getRefreshToken = () => storage.getItem(SPOTIFY_REFRESH_TOKEN);
export const deleteRefreshToken = () => storage.removeItem(SPOTIFY_REFRESH_TOKEN);

export const saveExpireTime = expirationTime => storage.setItem(SPOTIFY_EXPIRE_TIME, expirationTime);
export const getExpireTime = () => storage.getItem(SPOTIFY_EXPIRE_TIME);
export const deleteExpireTime = () => storage.removeItem(SPOTIFY_EXPIRE_TIME);
