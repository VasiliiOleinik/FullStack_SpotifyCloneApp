import { TrackListProps } from '@/types/tracks';
import React from 'react';
import { Grid, Box } from '@mui/material'
import TrackItem from '../TrackItem';

const TrackList = ({ tracks }: TrackListProps) => {
  return (
    <Grid container direction='column'>
      <Box p={2}>
        {tracks.map(track => <TrackItem key={track._id} track={track} />)}
      </Box>
    </Grid>
  )
};

export default TrackList;