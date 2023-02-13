export interface ITrack {
  _id: string;
  name: string;
  artist: string;
  text: string;
  listens: number;
  picture: string;
  audio: string;
  comments: IComment[];
}

export interface IComment {
  _id: string;
  username: string;
  text: string;
}

export interface TrackListProps {
  tracks: ITrack[];
}

export interface TrackItemProps  {
  track: ITrack;
}

export interface TrackProgressProps {
  left: number;
  right: number;
  onChange: (e: React.ChangeEvent) => void;
  audio: boolean;
}