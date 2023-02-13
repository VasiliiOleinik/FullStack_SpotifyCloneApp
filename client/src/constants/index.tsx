import { ITrack } from '@/types/tracks';

export const tracks: ITrack[] = [
  { _id: '1', name: 'Track1', artist: 'Eminem1', text: 'Some text', listens: 2, audio: 'http://localhost:4000/audio/3a277c7e-6fb1-4adf-9abc-2667d753b4a1.mp3', picture: 'https://sefon.pro/img/artist_photos/eminem.jpg', comments: [] },
  { _id: '2', name: 'Track2', artist: 'Eminem2', text: 'Some text', listens: 4, audio: 'http://localhost:4000/audio/3a277c7e-6fb1-4adf-9abc-2667d753b4a1.mp3', picture: 'https://sefon.pro/img/artist_photos/eminem.jpg', comments: [] },
  { _id: '3', name: 'Track3', artist: 'Eminem3', text: 'Some text', listens: 6, audio: 'http://localhost:4000/audio/3a277c7e-6fb1-4adf-9abc-2667d753b4a1.mp3', picture: 'https://sefon.pro/img/artist_photos/eminem.jpg', comments: [] }
]

export const steps = [
  'About track',
  'Upload preview',
  'Upload track'
]