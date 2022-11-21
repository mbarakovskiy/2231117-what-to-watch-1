import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {films} from './mocks/films';
import {reviews} from './mocks/reviews';
import {Provider} from 'react-redux';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App promoFilm={films[0]} films={films} reviews={reviews} />
    </Provider>
  </StrictMode>,
);
