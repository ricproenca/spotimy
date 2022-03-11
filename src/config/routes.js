/**
 * Local Routes
 */
export const HOST = 'http://localhost:3000/';
export const SPOTIFY_REDIRECT_ROUTE = '/redirect';
export const USER_REGISTER_ROUTE = '/register';
export const USER_LOGIN_ROUTE = '/login';
export const HOME_ROUTE = '/';
export const DASHBOARD_ROUTE = '/dashboard';

/**
 * Api Routes
 */
const spotifyBaseRoute = 'http://localhost:5000';
export const SPOTIFY_ME_ROUTE = `${spotifyBaseRoute}/api/v1/spotify/me`;
export const SPOTIFY_LOGIN_ROUTE = `${spotifyBaseRoute}/api/v1/spotify/login`;
export const SPOTIFY_REFRESH_ROUTE = `${spotifyBaseRoute}/api/v1/spotify/refresh`;
