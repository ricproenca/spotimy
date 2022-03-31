import { createHash } from '@Utils/crypto';
import { getAccessToken } from '@Utils/spotify';
import SpotifyWebApi from 'spotify-web-api-js';

import invalidGenres from './invalidGenres';

const spotifyApi = new SpotifyWebApi();
const accessToken = getAccessToken();
spotifyApi.setAccessToken(accessToken);

const createHashFromArrayProperty = (arr = [], prop = 'id') => {
  let arrayHash = '';

  arr.map(item => {
    arrayHash = `${arrayHash}${item[prop]}`;
  });

  return createHash(arrayHash);
};

const getValidGenres = genres => {
  const validGenres = [];

  genres.map(genre => {
    if (invalidGenres.indexOf(genre) < 0) {
      validGenres.push(genre);
    }
  });

  return validGenres;
};

const useSpotify = () => {
  const initSpotify = async () => {
    try {
      let tracksFound = [];
      let artistsFound = [];
      let genresFound = [];

      /**
       * GET TRACKS
       */

      let totalSavedTracks = Number.MAX_SAFE_INTEGER;
      let offsetCalled = 0;

      while (tracksFound.length < totalSavedTracks) {
        const tracksData = await spotifyApi.getMySavedTracks({
          limit: 50,
          offset: offsetCalled
        });

        let artistsIdsArray = [];

        tracksData.items.map(({ track }) => {
          const newTrack = {
            id: track.id,
            name: track.name,
            duration: track.duration_ms,
            artistId: track.artists[0].id,
            artistName: track.artists[0].name,
            albumId: track.album.id,
            albumName: track.album.name,
            albumImg: track.album.images[0].url
          };
          tracksFound.push(newTrack);

          if (
            artistsIdsArray.indexOf(newTrack.artistId) < 0 &&
            !artistsFound.find(artist => artist.id === newTrack.artistId)
          ) {
            artistsIdsArray.push(newTrack.artistId);
          }
        });

        totalSavedTracks = tracksData.total;
        offsetCalled += tracksData.limit;

        /**
         * GET ARTISTS
         */
        if (artistsIdsArray.length) {
          const artistsData = await spotifyApi.getArtists(artistsIdsArray.sort());
          artistsData.artists.map(artist => {
            artistsFound.push({
              id: artist.id,
              name: artist.name,
              genres: getValidGenres(artist.genres),
              images: artist.images[0].url
            });
          });
        }
      }
      artistsFound.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });

      /**
       * GET GENRES
       */
      artistsFound.map(({ genres }) => {
        genres.map(genre => {
          const isGenreAlreadyFound = genresFound.indexOf(genre) < 0;
          const isGenreInvalid = invalidGenres.indexOf(genre) < 0;
          if (isGenreAlreadyFound && isGenreInvalid) {
            genresFound.push(genre);
          }
        });
      });
      genresFound.sort();

      /**
       * PUT GENRES INTO TRACKS
       */
      tracksFound.forEach(t => (t.genres = artistsFound.find(a => a.id === t.artistId).genres));

      /**
       * BUILD HASHES
       */
      const tracksHash = createHashFromArrayProperty(tracksFound);
      const artistsHash = createHashFromArrayProperty(artistsFound);
      const genresHash = createHashFromArrayProperty(genresFound);

      return {
        tracks: {
          id: tracksHash.toString(),
          items: tracksFound
        },
        artists: {
          id: artistsHash.toString(),
          items: artistsFound
        },
        genres: {
          id: genresHash.toString(),
          items: genresFound
        }
      };
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  return {
    initSpotify
  };
};

export default useSpotify;
