import MainLayout from '@/components/MainLayout';
import React, { useEffect } from 'react';
import { Grid, Card, Button, Box } from '@mui/material';
import { useRouter } from 'next/router';
import TrackList from '@/components/TrackList';
import { useTypedSelector } from '@/hooks/useTypedSelectors';
import { getTracks } from '@/store/actions/getTracks';
import { useAppDispatch } from '@/hooks/useAppDispatch';

const Create = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { tracks, error } = useTypedSelector(state => state.track);

  useEffect(() => {
    dispatch(getTracks());
  })

  if (error) {
    return <MainLayout><h1>{error}</h1></MainLayout>
  }

  return (
    <MainLayout title='Track list'>
      <Grid container justifyContent='center'>
        <Card style={{ width: '100%' }}>
          <Box p={3}>
            <Grid container justifyContent='space-between'>
              <h1>Tracks</h1>
              <Button variant="text" type='button' color="primary" onClick={() => router.push('/tracks/create')}>
                Add track
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Create;