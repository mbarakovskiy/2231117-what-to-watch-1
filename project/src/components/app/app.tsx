import MainPage from '../../pages/main/main';
import {films} from '../../pages/main/films';
import AddReview from '../../pages/add review/add-review';
import Film from '../../pages/film/film';
import NotFound from '../../pages/not found/not-found';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../const';

function App(): JSX.Element {
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
        <Route path={AppRoute.Film} element={<Film name={'The Grand Budapest Hotel'} genre={'Drama'} year={2014}/>} />
        <Route path={AppRoute.AddReview} element={<AddReview />} />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path={AppRoute.Default} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
