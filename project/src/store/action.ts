import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import {AuthorizationStatus} from '../components/const';
import {User} from '../types/user';

export const changeGenre = createAction<string>('changeGenre');
export const fillFilms = createAction<Film[]>('setFilms');
export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');
export const changeAuthorizationStatus = createAction<AuthorizationStatus>('changeAuthorizationStatus');
export const setUser = createAction<User>('setUser');
