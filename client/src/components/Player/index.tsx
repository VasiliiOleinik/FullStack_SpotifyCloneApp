import React, { useEffect } from 'react';
import { Card, IconButton, Grid } from '@mui/material'
import { PlayArrow, Pause, VolumeUp } from '@mui/icons-material';
import styles from '@/styles/Player.module.scss';
import TrackProgress from './components/TrackProgress';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelectors';
import { selectPlayerData } from '@/store/selectors/selectPlayerData';

let audio: HTMLAudioElement;

const Player = () => {
  const URL = process.env.API_URL;
  const { setPlayerStopOrPlay, setPlayerVolume, setPlayerCurrentTime, setPlayerDuration } = useActions();
  const { pause, volume, duration, currentTime, active } = useTypedSelector(selectPlayerData);
  const { name, artist, audio: track } = active || {};

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  const setAudio = () => {
    if (active) {
      audio.src = `${URL}${track}`;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        setPlayerDuration(Math.ceil(audio.duration));
      }
      audio.ontimeupdate = () => {
        setPlayerCurrentTime(Math.ceil(audio.currentTime));
      }
    }
  }

  const play = () => {
    if (pause) {
      setPlayerStopOrPlay(false);
      audio.play();
    } else {
      setPlayerStopOrPlay(true);
      audio.pause();
    }
  }

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    audio.volume = value / 100;
    setPlayerVolume(value);
  }

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    audio.currentTime = Number(e.target.value)
    setPlayerCurrentTime(value);
  }

  if (!active) {
    return null
  }

  return (
    <div className={styles.player}>
      <IconButton aria-label="" onClick={play}>
        {pause ? <PlayArrow /> : <Pause />}
      </IconButton>
      <Grid container direction={'column'} style={{ width: 200, margin: '0 20px' }}>
        <div className={styles.name}>{name}</div>
        <div className={styles.artist}>{artist}</div>
      </Grid>
      <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} audio />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress left={volume} right={100} onChange={changeVolume} />
    </div>
  );
};

export default Player;