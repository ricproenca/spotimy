// Permissions https://developer.spotify.com/documentation/general/guides/authorization/scopes/
const scopes = {
  appRemoteControl: 'app-remote-control',
  playlistModifyPrivate: 'playlist-modify-private',
  playlistModifyPublic: 'playlist-modify-public',
  playlistReadCollaborative: 'playlist-read-collaborative',
  playlistReadPrivate: 'playlist-read-private',
  streaming: 'streaming',
  ugcImageUpload: 'ugc-image-upload',
  userFollowModify: 'user-follow-modify',
  userFollowRead: 'user-follow-read',
  userLibraryModify: 'user-library-modify',
  userLibraryRead: 'user-library-read',
  userModifyPlaybackState: 'user-modify-playback-state',
  userReadCurrentlyPlaying: 'user-read-currently-playing',
  userReadEmail: 'user-read-email',
  userReadPlaybackPosition: 'user-read-playback-position',
  userReadPlaybackState: 'user-read-playback-state',
  userReadPrivate: 'user-read-private',
  userReadRecentlyPlayed: 'user-read-recently-played',
  userTopRead: 'user-top-read'
};

const allScopes = (() =>
  Object.keys(scopes)
    .reduce((sum, scope) => sum.concat(scopes[scope], '%20'), '')
    .slice(0, -3))();

//URL where we need to authenticate using Spotify
const endpoint = 'https://accounts.spotify.com/authorize';

// Spotify Web API (where to take back the user if the Spotify login was successful)
const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

// Spotify Web API
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

// URL to call to authorize a user
export const SPOTIFY_LOGIN_ROUTE = `${endpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${allScopes}`;
