import React, { useCallback, useState } from 'react';
import useSpotify from "@Services/Spotify/useSpotify";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const createPlaylistComponent = ({ playlists, tracks }) => {
  const spotifyApi = useSpotify();

  const [selectedPlaylist, setSelectedPlaylist] = useState(playlists[0].id);
  const [playlistCreationMessage, setPlaylistCreationMessage] = useState();

  const handlePlaylistChange = useCallback(event => setSelectedPlaylist(event.target.value));

  const onSubmit = async () => {
    if (!tracks.length) {
      setPlaylistCreationMessage(`No tracks added to Playlist.`);
      return;
    }

    const tracksIds = [];
    tracks.forEach(track => tracksIds.push(`spotify:track:${track.id}`));

    const playlistUpdated = await spotifyApi.addItemsToPlaylist(selectedPlaylist, tracksIds);
    setPlaylistCreationMessage(playlistUpdated);
  }

  console.log('selectedPlaylist: ', selectedPlaylist);

  return (
    <Stack spacing={2} direction="row">
      <div>
        <Select
          sx={{ minWidth: 220 }}
          labelId="name"
          id="name"
          label="Playlist"
          value={selectedPlaylist}
          onChange={handlePlaylistChange}
        >
          {
            playlists.map((playlist) => {
              return <MenuItem key={playlist.id} value={playlist.id}>{playlist.name}</MenuItem>
            })
          }
        </Select>
      </div>
      <div>
        <Button type='submit' variant="contained" size='large' onClick={onSubmit}>Add tracks</Button>
      </div>
      <div>
        <p>{playlistCreationMessage}</p>
      </div>
    </Stack>
  )
};

export default createPlaylistComponent;
