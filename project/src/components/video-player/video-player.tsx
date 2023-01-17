import { useEffect, useRef } from 'react';

type Props = {
  src: string;
  posterImage: string;
  isPlaying: boolean;
  muted: boolean;
  width: number;
  height: number;
}


function VideoPlayer({src, posterImage, isPlaying, muted, width, height}: Props): JSX.Element {
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
      src={src}
      poster={posterImage}
      muted={muted}
    />
  );
}

export default VideoPlayer;
