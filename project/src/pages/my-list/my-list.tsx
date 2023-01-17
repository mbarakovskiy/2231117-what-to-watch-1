import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';
import UserBlock from '../../components/user-block/user-block';
import { useAppSelector } from '../../hooks/hooks';

function MyListPage(): JSX.Element {
  const { favouriteFilms } = useAppSelector((state)=> state);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favouriteFilms.length}</span></h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmsList films={favouriteFilms}/>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default MyListPage;
