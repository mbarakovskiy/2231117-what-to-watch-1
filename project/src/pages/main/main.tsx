import Footer from '../../components/footer/footer';
import { Film } from '../../types/film';
import FilmsList from '../../components/films-list/films-list';
import GenresList from '../../components/genres-list/genres-list';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { ALL_GENRES, APIRoute, SHOWN_FILMS_STEP } from '../../components/const';
import { useEffect, useState, MouseEvent } from 'react';
import ShowMore from '../../components/show-more/show-more';
import UserBlock from '../../components/user-block/user-block';
import { redirectToRoute } from '../../store/action';
import { api } from '../../services/api';
import Logo from '../../components/logo/logo';

function MainPage() : JSX.Element {
  const [promoFilm, setPromoFilm] = useState<Film | null>(null);
  const { films, activeGenre } = useAppSelector((state) => state);
  const [visibleFilmsCount, setVisibleFilmsCount] = useState(SHOWN_FILMS_STEP);
  const dispatch = useAppDispatch();
  const genres = [ALL_GENRES].concat([...new Set(films.map((f) => f.genre))]);
  const filteredFilms = films
    .filter((f) => f.genre === activeGenre || activeGenre === ALL_GENRES)
    .slice(0, visibleFilmsCount);

  const showMoreClick = () => {
    setVisibleFilmsCount(visibleFilmsCount + SHOWN_FILMS_STEP);
  };

  const handlePlayClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    if (!promoFilm) {
      return;
    }

    dispatch(redirectToRoute(`/player/${promoFilm.id}`));
  }
  useEffect(() => {
    const fetchPromoFilm = async () => {
      const { data: actualPromoFilm } = await api.get<Film>(APIRoute.Promo);

      setPromoFilm(actualPromoFilm);
    };

    fetchPromoFilm();
  }, []);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm?.backgroundImage} alt={promoFilm?.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>

          <UserBlock/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm?.posterImage} alt={promoFilm?.name} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={handlePlayClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genres={genres} activeGenre={activeGenre}/>

          <FilmsList films={filteredFilms}/>

          {filteredFilms.length % SHOWN_FILMS_STEP === 0 && <ShowMore onClick={showMoreClick}/>}
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default MainPage;
