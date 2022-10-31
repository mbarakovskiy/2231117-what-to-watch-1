import {Film} from '../../types/film';
import {useEffect, useState} from 'react';
import VideoPlayer from '../video player/video-player';

export type Props = {
  film: Film;
  onHover: (film: Film) => void;
}


function FilmCard({film, onHover}: Props): JSX.Element {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isNeedVideoToPlay, setIsNeedVideoToPlay] = useState(false);

  useEffect(() => {
    let needUpdate = true;

    if (isNeedVideoToPlay) {
      setTimeout(() => needUpdate && setIsVideoPlaying(true), 1000);
    }

    return () => {needUpdate = false;};
  }, [isNeedVideoToPlay]);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => {
        onHover(film);
        setIsNeedVideoToPlay(true);
      }}
      onMouseLeave={() => {
        onHover({} as Film);
        setIsNeedVideoToPlay(false);
        setIsVideoPlaying(false);
      }}
    >
      <div className="small-film-card__image">
        <VideoPlayer
          film={film}
          isPlaying={isVideoPlaying}
          muted
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="/">{film.name}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
