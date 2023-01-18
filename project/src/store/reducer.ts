import { createReducer } from '@reduxjs/toolkit';
import {
  changeAuthorizationStatus,
  changeGenre,
  fillFilms,
  setDataLoadedStatus,
  setFavouriteFilms,
  setUser
} from './action';
import { Film } from '../types/film';
import { ALL_GENRES, AuthorizationStatus } from '../components/const';
import { User } from '../types/user';

type AppState = {
  films: Film[];
  activeGenre: string;
  isDataLoaded: boolean;
  authorizationStatus: AuthorizationStatus;
  user: User | null;
  favoriteFilms: Film[];
};

const initialState: AppState = {
  activeGenre: ALL_GENRES,
  films: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  favoriteFilms: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(fillFilms, (state, action) => {

      state.films = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(changeAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setFavouriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
    });
});
