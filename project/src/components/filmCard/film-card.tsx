import {FilmData} from '../../types/film-data';

export type FilmCardProps = {
  filmData: FilmData;
  setActive: (film: FilmData) => void;
}


function FilmCard({filmData, setActive}: FilmCardProps): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setActive(filmData)}
      onMouseLeave={() => setActive({} as FilmData)}
    >
      <div className="small-film-card__image">
        <img src={filmData.image} alt={filmData.name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{filmData.name}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
