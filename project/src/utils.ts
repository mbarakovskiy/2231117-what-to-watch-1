import { Film } from './types/film';
import { AppRoute } from './components/const';
export const getFilmUrl = (film: Film): string => {
  const bodyUrl = AppRoute.Film.split(':')[0];
  return `${bodyUrl}${film.id}`;
};
