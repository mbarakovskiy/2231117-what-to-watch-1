import {Film} from '../../types/film';

export type Props = {
  film: Film;
  onHover: (film: Film) => void;
}


function FilmCard({film, onHover}: Props): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => onHover(film)}
      onMouseLeave={() => onHover({} as Film)}
    >
      <div className="small-film-card__image">
        <img src={film.posterImage} alt={film.name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{film.name}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
