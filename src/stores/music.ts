import { atom } from 'jotai';
import { TrackType } from '@/types/trackTypes';

interface MusicProps {
  track: TrackType;
  isPlaying: boolean;
}

export const musicStateAtom = atom<MusicProps>({
  track: {
    trackId: 'undefined',
    trackName: 'undefined',
    artist: 'undefined',
    artistId: 'undefined',
    albumId: 'undefined',
    previewUrl: 'undefined',
    images: [
      {
        height: -1,
        url: 'undefined',
        width: -1,
      },
      {
        height: -1,
        url: 'undefined',
        width: -1,
      },
      {
        height: -1,
        url: 'undefined',
        width: -1,
      },
    ],
    popularity: -1,
    releaseDate: 'undefined',
    durationMinute: 'undefined',
    durationSecond: 'undefined',
  },
  isPlaying: false,
});
