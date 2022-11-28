import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../const';
import MainPage from '../../pages/main/main';
import AddReview from '../../pages/add review/add-review';
import FilmPage from '../../pages/film/film-page';
import NotFound from '../../pages/not found/not-found';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import {ReviewType} from '../../types/review-type';
import { useAppSelector } from '../../hooks/index';
import Loader from "../loader/loader";

type Props = {
  reviews: ReviewType[];
}

function App({reviews}: Props): JSX.Element {
  const { isDataLoaded, films } = useAppSelector((state) => state);

  if (!isDataLoaded) {
    return <Loader/>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.MainPage} element={
          <MainPage
            film={films[0]}
          />
        }
        />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route path={AppRoute.Film} element={<FilmPage film={films[0]} films={films} reviews={reviews}/>} />
        <Route path={AppRoute.AddReview} element={<AddReview film={films[0]} />} />
        <Route path={AppRoute.Player} element={<Player film={films[0]}/>} />
        <Route path={AppRoute.Default} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
