import { useAppDispatch } from '../../hooks/hooks';
import { changeGenre } from '../../store/action';

type Props = {
  genres: string[];
  activeGenre: string;
};

function GenresList({genres, activeGenre}: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const handleGenreChange = (genre: string) => {
    dispatch(changeGenre(genre));
    //dispatch(fillFilms(films.filter((film-page) => film-page.genre === genre || genre === ALL_GENRES)));
  };

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => (
          <li className={`catalog__genres-item ${activeGenre === genre ? 'catalog__genres-item--active' : ''}`} key={genre} onClick={() => handleGenreChange(genre)}>
            <span className="catalog__genres-link">{genre}</span>
          </li>
        ))
      }
    </ul>
  );
}

export default GenresList;
