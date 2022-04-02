import React, { useEffect, useState } from 'react';

import Header from "@Components/header/Header"

import useSpotify from "@Services/Spotify/useSpotify";
import { useSpotifyContextState, useSpotifyContextUpdater } from '@Providers/Spotify';

import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import { millisecondsToTime } from '@Utils/time'

import CheckboxGroup from "./CheckboxGroup/CheckboxGroup"
import CreatePlaylistForm from "./createPlaylistForm/CreatePlaylistForm";

/**
 * Dashboard page
 */
const DashboardPage = () => {
  const spotifyApi = useSpotify();
  const { saveArtists, saveGenres, saveTracks, savePlaylists } = useSpotifyContextUpdater();
  const { artists, genres, tracks, playlists } = useSpotifyContextState()

  const [artistsSelected, setSelectedArtists] = useState([]);
  const [genresSelected, setSelectedGenres] = useState([]);
  const [tracksSelected, setSelectedTracks] = useState([]);

  const mapGenresToCheckboxes = (genres) => {
    const checkboxes = [];

    genres.map((genre) => {
      checkboxes.push({
        value: genre,
        label: genre,
        checked: false
      })
    })

    return checkboxes;
  };

  const isGenreChecked = (genresMap, genre) => {
    let isChecked = false;

    genresMap.map((g) => {
      if (genre === g.value && g.checked) {
        isChecked = true
      }
    })

    return isChecked;
  }

  const filterTracksByGenres = (tracks, genresMap) => {
    const tracksToSelect = [];

    tracks.map(track => {
      let alreadyAdded = false;
      track.genres.map((trackGenre) => {
        if (!alreadyAdded && isGenreChecked(genresMap, trackGenre)) {
          tracksToSelect.push(track)
          alreadyAdded = true;
        }
      })
    })

    return tracksToSelect;
  }

  useEffect(() => {
    const initSpotifyData = async () => {
      const { artists, genres, tracks, playlists } = await spotifyApi.initSpotify();
      saveArtists(artists.items);
      saveGenres(genres.items);
      saveTracks(tracks.items);
      savePlaylists(playlists.items)
    }

    initSpotifyData().catch(console.error);
  }, []);

  useEffect(() => {
    if (artists.length && genres.length && tracks.length && playlists.length) {
      const genresAsCheckboxes = mapGenresToCheckboxes(genres);
      setSelectedGenres(genresAsCheckboxes);

      const filteredTracks = filterTracksByGenres(tracks, genresAsCheckboxes)
      setSelectedTracks(filteredTracks);

      setSelectedArtists(artists);
    }
   }, [artists, genres, tracks, playlists]);

  const handleCheckboxGenres = (genresMap) => {
    setSelectedGenres(genresMap)

    const filteredTracks = filterTracksByGenres(tracks, genresMap)
    setSelectedTracks(filteredTracks);
  };

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'artistId', headerName: 'artistId', flex: 1},
    { field: 'artistName', headerName: 'Artist', flex: 1},
    { field: 'albumId', headerName: 'albumId', flex: 1},
    { field: 'albumName', headerName: 'Album', flex: 1},
    { field: 'albumImg', headerName: 'albumImg', flex: 1},
    {
      field: 'genres', headerName: 'Genres', flex: 2,
      valueFormatter: ({ value }) => value.length ? value.join(", ") : "N/A"
    },
    {
      field: 'duration', headerName: 'duration', headerAlign: 'right', align: 'right',
      valueFormatter: ({ value }) => millisecondsToTime(value)
    },
  ];

  if (!artists.length, !genres.length || !tracks.length || !playlists.length) {
    return null
  }

  console.log('tracksSelected', tracksSelected);
  console.log('playlists', playlists);

  return (
    <>
      <Header />

      <CheckboxGroup
        checkboxes={genresSelected}
        onCheckboxGroupChange={handleCheckboxGenres}
      />

      <CreatePlaylistForm playlists={playlists} tracks={tracksSelected}   />

      <div style={{ height: 700, width: '100%', paddingTop: '40px' }}>
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid
              rows={tracksSelected}
              columns={columns}
              columnVisibilityModel={{ id: false, artistId: false, albumId: false, albumImg: false, name: false, albumName: false, duration: false }}
              components={{ Toolbar: GridToolbar }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
