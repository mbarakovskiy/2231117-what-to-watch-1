import Logo from '../../components/logo/logo';
import ReviewForm from '../../components/review-form/review-form';
import { Film } from '../../types/film';
import { Link, useParams } from 'react-router-dom';
import UserBlock from '../../components/user-block/user-block';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { ReviewData } from '../../types/review-data';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { redirectToRoute } from '../../store/action';
import { api } from '../../services/api';


function AddReview(): JSX.Element {
  const [film, setFilm] = useState<null | Film>(null);
  const [formDisabled, setFormDisabled] = useState(false);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const handleReviewSubmit = (reviewData: ReviewData) => {
    const addReview = async () => {
      setFormDisabled(true);
      const url = `/comments/${id ? id : -1}`;
      await api.post(url, {comment: reviewData.comment, rating: reviewData.starsCount});
    };
    addReview()
      .then(() => {
        const redirectUrl = `/films/${id ? id : -1}`;
        setFormDisabled(false);
        dispatch(redirectToRoute(redirectUrl));
      })
      .catch((err: AxiosError) => {
        setFormDisabled(false);
        toast.warn(err.message);
      });
  };

  useEffect(() => {
    const fetchFilm = async () => {
      const { data: filmInfo } = await api.get<Film>(`/films/${id || -1}`);
      setFilm(filmInfo);
    };

    fetchFilm()
      .catch((err: AxiosError) => {
        toast.warn(err.message);
      });
  }, [id]);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film?.backgroundImage} alt={film?.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={id ? `/films/${id}` : '#'} className="breadcrumbs__link">{film?.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a href='/' className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film?.posterImage} alt={film?.name} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <ReviewForm disabled={formDisabled} onSubmit={handleReviewSubmit}/>
      </div>
    </section>
  );
}

export default AddReview;
