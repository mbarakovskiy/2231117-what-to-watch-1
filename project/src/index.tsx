import 'react-toastify/dist/ReactToastify.min.css';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchFavouriteFilms, fetchFilmsAction } from './store/api-actions';
import { ToastContainer } from 'react-toastify';

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsAction());
store.dispatch(fetchFavouriteFilms());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App />
    </Provider>
  </StrictMode>
);
