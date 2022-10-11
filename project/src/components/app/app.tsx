import MainPage from '../../pages/main/main';
import {films} from '../../pages/main/films';

function App(): JSX.Element {
  return (
    <MainPage
      films={films}
      limit={films.length}
      name={'The Grand Budapest Hotel'}
      genre={'Drama'}
      year={2014}
    />
  );
}

export default App;
