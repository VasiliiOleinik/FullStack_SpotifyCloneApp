import MainLayout from '@/components/MainLayout';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { Grid, TextField } from '@mui/material'
import Image from 'next/image';
import { getTrack } from '@/store/actions/getTrack';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { GetServerSideProps } from "next";
import { useTypedSelector } from '@/hooks/useTypedSelectors';
import { selectTrack } from '@/store/selectors/selectTrack';
import { addComment } from '@/store/actions/addComment';
import { selectComments } from '@/store/selectors/selectComments';

const TrackPage = ({ trackID }: any) => {
  const URL = process.env.API_URL;
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [commentState, setCommentsState] = useState({ username: "", text: "" });
  const trackData = useTypedSelector(selectTrack);
  const { comments: trackComments } = useTypedSelector(selectComments);
  const { track } = trackData;
  const { name, artist, listens, text, comments, picture } = track;

  useEffect(() => {
    dispatch(getTrack(trackID));
  });

  const sendForm = () => {
    dispatch(addComment({ ...commentState, trackId: trackID }));
  };

  const isComments = comments || [];
  const combineComments = [...isComments, ...trackComments];

  return (
    <MainLayout title={`${name} - ${artist}`} description={text}>
      <Button variant="outlined" color="primary" onClick={() => router.push('/tracks/')}>
        Back to list
      </Button>
      <Grid container style={{ margin: '20px 0px' }}>
        <Image width={200} height={200} src={`${URL}${picture}`} alt={name} />
        <div style={{ marginLeft: 30 }}>
          <h1>Track: {name}</h1>
          <h1>Artist: {artist}</h1>
          <h1>Listens: {listens}</h1>
        </div>
      </Grid>
      <h1>Text</h1>
      <p>{text}</p>
      <Grid container direction={'column'}>
        <h1>Comments</h1>
        <TextField
          id="name"
          label="Your name"
          onChange={e => setCommentsState((prev: any) => ({ ...prev, username: e.target.value }))}
        />

        <TextField
          id="comment"
          label="Comment"
          multiline
          rows={4}
          sx={{ marginBottom: 2, marginTop: 2 }}
          onChange={e => setCommentsState((prev: any) => ({ ...prev, text: e.target.value }))}
        />
        <Button variant="text" color="primary" onClick={sendForm}>
          Send
        </Button>
      </Grid>
      <div>
        {combineComments.map((comment, i) =>
          <div key={i}>
            <div>Author: {comment.username}</div>
            <div>Comment: {comment.text}</div>
          </div>
        )}
      </div>
    </MainLayout>
  )
}

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      trackID: params.id
    }
  }
}