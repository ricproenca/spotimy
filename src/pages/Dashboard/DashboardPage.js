import React, { useEffect, useState } from 'react';

import Header from "@Components/header/Header"

import useSpotify from "@Services/Spotify/useSpotify";
import { useSpotifyContextState, useSpotifyContextUpdater } from '@Providers/Spotify';

import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import { millisecondsToTime } from '@Utils/time'

/**
 * Dashboard page
 */
const DashboardPage = () => {
  const spotifyApi = useSpotify();
  const { saveArtists, saveGenres, saveTracks } = useSpotifyContextUpdater();
  const { artists, genres, tracks } = useSpotifyContextState()

  const [tracksSelected, setSelectedTracks] = useState([]);

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const initSpotifyData = async () => {
      const { artists, genres, tracks } = await spotifyApi.initSpotify();

      saveArtists(artists.items);
      saveGenres(genres.items);
      saveTracks(tracks.items);
    }

    initSpotifyData().catch(console.error);
  }, []);

  useEffect(() => {
    if (artists.length && genres.length && tracks.length) {
      setLoading(false);
      setSelectedTracks(tracks);
      // console.log("artists", artists)
      console.log("genres", genres)
      console.log(genres.join(","))
      // console.log('tracks', tracks)
    }
   }, [artists, genres, tracks]);

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
      valueFormatter: ({ value }) => value.length ? genres.join(", ") : "N/A"
    },
    {
      field: 'duration', headerName: 'duration', headerAlign: 'right', align: 'right',
      valueFormatter: ({ value }) => millisecondsToTime(value)
    },
  ];

  const hasGenre = (genres, genreFilter) => genres.indexOf(genreFilter) >= 0

  const onChange = (event, genresSelected) => {
    if (!genresSelected.length) {
      setSelectedTracks(tracks);
      return;
    }

    const tracksSelected = [];
    tracks.map((t) => {
      let alreadyAdded = false;
      t.genres.map((tg) => {
        if (hasGenre(genresSelected, tg) && !alreadyAdded) {
          tracksSelected.push(t);
          alreadyAdded = true;
        }
      })
    })

    setSelectedTracks(tracksSelected);
  };


  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;

  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const renderOption = (props, option, { selected }) => (
    <li {...props}>
      <Checkbox
        icon={icon}
        checkedIcon={checkedIcon}
        style={{ marginRight: 8 }}
        checked={selected}
      />
      {option}
    </li>
  );

  const renderInput = (params) => (<TextField {...params} label="Choose your genres" placeholder="Genres" />);

  const filterOptions = createFilterOptions({ matchFrom: 'any', trim: true });

  return (
    <>
      <Header />
      <div>
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={genres}
          // disableCloseOnSelect
          // getOptionLabel={(option) => option.title}
          renderOption={renderOption}
          filterOptions={filterOptions}
          style={{ width: 800 }}
          renderInput={renderInput}
          onChange={onChange}
          disabled={loading}
        />
      </div>
      <div style={{ height: 700, width: '100%' }}>
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
