import { Film} from '../../types/film';
import { useEffect, useState } from 'react';
import VideoPlayer from '../video-player/video-player';
import { Link } from 'react-router-dom';
import { getFilmUrl } from '../../utils';

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
      onMouseOver={() => {
        onHover(film);
        setIsNeedVideoToPlay(true);
      }}
      onMouseLeave={() => {
        onHover({} as Film);
        setIsNeedVideoToPlay(false);
        setIsVideoPlaying(false);
      }}
    >
      <Link
        to={getFilmUrl(film)}
        className="small-film-card__link"
      >
        <div className="small-film-card__image">
          <VideoPlayer
            posterImage={film.previewImage}
            isPlaying={isVideoPlaying}
            muted
            width={280}
            height={175}
            src={film.videoLink}
          />
        </div>
        <h3 className="small-film-card__title">
          {film.name}
        </h3>
      </Link>
    </article>
  );
}

export default FilmCard;
