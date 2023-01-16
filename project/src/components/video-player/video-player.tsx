import { Film } from '../../types/film';
import { useEffect, useRef } from 'react';

type Props = {
  film: Film;
  isPlaying: boolean;
  muted: boolean;
  width: number;
  height: number;
}


function VideoPlayer({film, isPlaying, muted, width, height}: Props): JSX.Element {
  const videoPlayerRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoPlayerRef === null) {
      return;
    }

    if (isPlaying) {
      videoPlayerRef.current?.play();
    } else {
      videoPlayerRef.current?.load();
    }

  }, [isPlaying]);

  return (
    <video
      ref={videoPlayerRef}
      width={width}
      height={height}
      src={film.videoLink}
      poster={film.posterImage}
      muted={muted}
    />
  );
}

export default VideoPlayer;
