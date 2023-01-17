import { useAppDispatch } from '../../hooks/hooks';
import { changeGenre } from '../../store/action';
import { MouseEvent } from 'react';
import { AppRoute } from '../const';

type Props = {
  genres: string[];
  activeGenre: string;
};

type GenresProps = {
  genre: string;
  isActive: boolean;
};

function GenreElement({genre, isActive}: GenresProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleGenreChange = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(changeGenre(genre));
  };

  return (
    <li className={`catalog__genres-item ${isActive ? 'catalog__genres-item--active' : ''}`}>
      <a href={AppRoute.MainPage} className='catalog__genres-link' onClick={handleGenreChange}>{genre}</a>
    </li>
  );
}

function GenresList({genres, activeGenre}: Props): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) =>
          <GenreElement genre={genre} isActive={genre === activeGenre} key={genre}/>
        )
      }
    </ul>
  );
}

export default GenresList;
