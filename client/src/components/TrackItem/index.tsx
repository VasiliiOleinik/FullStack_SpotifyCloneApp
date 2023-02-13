import { TrackItemProps } from '@/types/tracks';
import React from 'react';
import { Card, IconButton, Grid } from '@mui/material'
import styles from '@/styles/TrackItem.module.scss';
import { PlayArrow, Pause, Delete } from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelectors';
import { selectPlayerData } from '@/store/selectors/selectPlayerData';

const TrackItem = ({ track }: TrackItemProps) => {
  const URL = process.env.API_URL;
  const router = useRouter();
  const { name, picture, artist, _id } = track;
  const { setPlayerActive, setPlayerStopOrPlay } = useActions();
  const active = false

  const play = () => {
    setPlayerActive(track);
    setPlayerStopOrPlay(true);
  }


  return (
    <Card className={styles.track}>
      <IconButton aria-label="" onClick={play}>
        {!active ? <PlayArrow /> : <Pause />}
      </IconButton>
      <Image width={70} height={70} src={`${URL}${picture}`} alt={name} />
      <Grid container direction={'column'} style={{ width: 200, margin: '0 20px' }}>
        <div className={styles.name} onClick={() => router.push(`/tracks/${_id}`)}>{name}</div>
        <div className={styles.artist}>{artist}</div>
      </Grid>
      {active && <div>02:42 / 03:22</div>}
      <IconButton style={{ marginLeft: 'auto' }}>
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;