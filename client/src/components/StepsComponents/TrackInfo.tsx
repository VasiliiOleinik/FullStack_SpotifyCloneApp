import React, { useEffect } from 'react';
import { Grid, TextField } from '@mui/material';

const TrackInfo = ({ setTrackInfo }: any) => {

  return (
    <Grid container direction={'column'} sx={{ padding: '20px' }}>
      <TextField
        onChange={e => setTrackInfo((prev: any) => ({ ...prev, name: e.target.value }))}
        id="trackName"
        label="Track name"
      />
      <TextField
        onChange={e => setTrackInfo((prev: any) => ({ ...prev, artist: e.target.value }))}
        id="artist"
        label="Author"
        sx={{ margin: '10px 0px' }}
      />
      <TextField
        onChange={e => setTrackInfo((prev: any) => ({ ...prev, text: e.target.value }))}
        id="trackText"
        label="Text"
        multiline
        rows={3}
      />
    </Grid>
  );
};

export default TrackInfo;