import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, fillFilms, setDataLoadedStatus } from './action';
import { Film } from '../types/film';
import {ALL_GENRES} from '../components/const';

type AppState = {
  films: Film[];
  activeGenre: string;
  isDataLoaded: boolean;
};

const initialState: AppState = {
  activeGenre: ALL_GENRES,
  films: [],
  isDataLoaded: false
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
    });
});
