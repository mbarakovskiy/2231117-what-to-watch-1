import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../const';
import MainPage from '../../pages/main/main';
import AddReview from '../../pages/add review/add-review';
import FilmPage from '../../pages/film/film-page';
import NotFound from '../../pages/not found/not-found';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import {Film} from '../../types/film';

type Props = {
  promoFilm: Film;
  films: Film[];
}

function App({promoFilm, films}: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.MainPage} element={
          <MainPage
            film={promoFilm}
            films={films}
            limit={films.length}
          />
        }
        />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route path={AppRoute.Film} element={<FilmPage film={promoFilm} films={films}/>} />
        <Route path={AppRoute.AddReview} element={<AddReview film={films[0]} />} />
        <Route path={AppRoute.Player} element={<Player film={films[0]}/>} />
        <Route path={AppRoute.Default} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
