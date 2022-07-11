import React, { useCallback, useContext, useState, createContext } from 'react';

/**
 * Contexts
 */
const SpotifyContextState = createContext();
const SpotifyContextUpdater = createContext();

/**
 * Context State Consumer Hook
 */
const useSpotifyContextState = () => {
  const context = useContext(SpotifyContextState);

  if (context === undefined) {
    throw new Error("useSpotifyContextState was used outside of its Provider");
  }

  return context;
};

/**
 * Context State Consumer Hook
 */
 const useSpotifyContextUpdater = () => {
  const context = useContext(SpotifyContextUpdater);

  if (context === undefined) {
    throw new Error("useSpotifyContextUpdater was used outside of its Provider");
  }

  return context;
};

/**
 * Context Provider
 */
const SpotifyContextProvider = ({ children }) => {
  const [tracks, setTracks] = useState([]);
  const [artists, setArtists] = useState([]);
  const [genres, setGenres] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  const getTracks = useCallback(() => tracks, []);
  const getArtists = useCallback(() => artists, []);
  const getGenres = useCallback(() => genres, []);
  const getPlaylists = useCallback(() => playlists, []);

  const saveTracks = useCallback(newTracks => setTracks(newTracks), []);
  const saveArtists = useCallback(newArtists => setArtists(newArtists), []);
  const saveGenres = useCallback(newGenres => setGenres(newGenres), []);
  const savePlaylists = useCallback(newPlaylists => setPlaylists(newPlaylists), []);

  const stateValues = { tracks, artists, genres, playlists }

  const updaterValues = {
    getArtists,
    getGenres,
    getTracks,
    getPlaylists,
    saveArtists,
    saveGenres,
    saveTracks,
    savePlaylists
  }

  return (
    <SpotifyContextState.Provider value={stateValues}>
      <SpotifyContextUpdater.Provider value={updaterValues}>
        {children}
      </SpotifyContextUpdater.Provider>
    </SpotifyContextState.Provider>
  );
}

export {
  SpotifyContextProvider,
  SpotifyContextState,
  SpotifyContextUpdater,
  useSpotifyContextState,
  useSpotifyContextUpdater
};

