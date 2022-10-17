import React, {useState} from 'react';
import FilmCard from '../filmCard/film-card';
import type {FilmData} from '../../types/film-data';

type Props = {
  films: FilmData[];
}

const FilmList: React.FC<Props> = (props) => {
  const {films} = props;
  const [, setActive] = useState({});

  const activeFilmHandler = (film: FilmData) => {
    setActive(film);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard key={film.id} filmData={film} setActive={activeFilmHandler}/>)}
    </div>
  );
};

export default FilmList;
