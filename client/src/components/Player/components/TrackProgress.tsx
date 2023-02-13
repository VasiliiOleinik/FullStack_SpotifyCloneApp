import { getTime } from '@/hooks/useTime';
import { TrackProgressProps } from '@/types/tracks';
import React from 'react';

const TrackProgress = ({ left, right, onChange, audio }: TrackProgressProps) => {
  const active = audio ? getTime(left) : left;
  const total = audio ? getTime(right) : right;

  return (
    <div style={{ display: 'flex' }}>
      <input type='range' min={0} max={right} value={left} onChange={onChange} />
      <div>{`${active} / ${total}`}</div>
    </div>
  );
};

export default TrackProgress;