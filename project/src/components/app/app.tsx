import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../const';
import MainPage from '../../pages/main/main';
import AddReview from '../../pages/add review/add-review';
import Film from '../../pages/film/film';
import NotFound from '../../pages/not found/not-found';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import {FilmData} from '../../types/film-data';

type Props = {
  promoFilm: FilmData;
  films: FilmData[];
}

function App({promoFilm, films}: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.MainPage} element={
          <MainPage
            films={films}
            limit={films.length}
            name={'The Grand Budapest Hotel'}
            genre={'Drama'}
            year={2014}
          />
        }
        />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route path={AppRoute.Film} element={<Film film={promoFilm} genre={'Drama'} year={2014} films={films}/>} />
        <Route path={AppRoute.AddReview} element={<AddReview film={films[0]} />} />
        <Route path={AppRoute.Player} element={<Player film={films[0]}/>} />
        <Route path={AppRoute.Default} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
