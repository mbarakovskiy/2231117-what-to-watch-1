import { Routes, Route } from 'react-router-dom';
import { AppRoute } from '../const';
import MainPage from '../../pages/main/main';
import AddReview from '../../pages/add-review/add-review';
import FilmPage from '../../pages/film-page/film-page';
import NotFound from '../../pages/not-found/not-found';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import { useAppSelector } from '../../hooks/hooks';
import Loader from '../loader/loader';
import PrivateRoute from '../private-routes/private-routes';
import MyListPage from '../../pages/my-list/my-list';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  const { isDataLoaded, films, authorizationStatus } = useAppSelector((state) => state);

  if (!isDataLoaded) {
    return <Loader/>;
  }


  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.MainPage} element={
          <MainPage
            film={films[0]}
          />
        }
        />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route path={AppRoute.Film} element={<FilmPage />} />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <AddReview />
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.Player} element={<Player film={films[0]}/>} />
        <Route path={AppRoute.Default} element={<NotFound />} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <MyListPage films={films} />
          </PrivateRoute>
        }
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
