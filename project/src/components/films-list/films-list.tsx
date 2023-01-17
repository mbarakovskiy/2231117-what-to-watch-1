import { useState } from 'react';
import FilmCard from '../film-card/film-card';
import type { Film } from '../../types/film';

type Props = {
  films: Film[];
}

function FilmList({films}: Props): JSX.Element {
  const [active, setActive] = useState<Film | null>(null);

  const handleFilmOnHover = (film: Film) => {
    setActive(film);
  };

  return (
    <>
      <div style={{display: 'none'}}>{active?.name}</div>
      <div className="catalog__films-list">
        {films.map((film) => <FilmCard key={film.id} film={film} onHover={handleFilmOnHover}/>)}
      </div>
    </>
  );
}

export default FilmList;
