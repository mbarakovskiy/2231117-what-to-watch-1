import { useState, MouseEvent } from 'react';
import { api } from '../../services/api';
import { Film } from '../../types/film';
import { redirectToRoute } from '../../store/action';
import { store } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { APIRoute, AuthorizationStatus } from '../const';
import { fetchFavouriteFilms } from '../../store/api-actions';

type Props = {
  filmId: number;
};


function MyListButton({ filmId }: Props): JSX.Element {
  const { favouriteFilms, authorizationStatus } = useAppSelector((state) => state);
  const [isFavourite, setFavourite] = useState(favouriteFilms.some((film) => film.id === filmId));

  const dispatch = useAppDispatch();

  const handleMyListClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (authorizationStatus !== AuthorizationStatus.Auth){
      dispatch(redirectToRoute(APIRoute.Login));
      return;
    }

    const changeFilmFavoriteStatus = async () => {
      const { data: changedFilm } = await api.post<Film>(`${APIRoute.Favourite}/${filmId}/${isFavourite ? 0 : 1}`);

      setFavourite(changedFilm.isFavourite);
    };

    changeFilmFavoriteStatus()
      .then(() => store.dispatch(fetchFavouriteFilms()));
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleMyListClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        {isFavourite ? <use xlinkHref="#in-list"></use> : <use xlinkHref="#add"></use>}
      </svg>
      <span>My list</span>
      <span className="film-card__count">{favouriteFilms.length}</span>
    </button>
  );
}

export default MyListButton;