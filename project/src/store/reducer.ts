import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, fillFilms } from './action';
import { films as filmsList} from '../mocks/films';
import {ALL_GENRES} from '../components/const';

const initialState = {
  activeGenre: ALL_GENRES,
  films: filmsList
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { genre } = action.payload;

      state.activeGenre = genre;
    })
    .addCase(fillFilms, (state, action) => {
      const { films } = action.payload;
      state.films = films;
    });
});
