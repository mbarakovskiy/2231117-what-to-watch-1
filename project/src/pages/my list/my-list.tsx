import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import FilmCard from '../../components/filmCard/film-card';


function MyListPage(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmCard
            name={'Fantastic Beasts: The Crimes of Grindelwald'}
            image={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'}
          />
          <FilmCard
            name={'Bohemian Rhapsody'}
            image={'img/bohemian-rhapsody.jpg'}
          />
          <FilmCard
            name={'Macbeth'}
            image={'img/macbeth.jpg'}
          />
          <FilmCard
            name={'Aviator'}
            image={'img/aviator.jpg'}
          />
          <FilmCard
            name={'We need to talk about Kevin'}
            image={'img/we-need-to-talk-about-kevin.jpg'}
          />
          <FilmCard
            name={'What We Do in the Shadows'}
            image={'img/what-we-do-in-the-shadows.jpg'}
          />
          <FilmCard
            name={'Revenant'}
            image={'img/revenant.jpg'}
          />
          <FilmCard
            name={'Johnny English'}
            image={'img/johnny-english.jpg'}
          />
          <FilmCard
            name={'Shutter Island'}
            image={'img/shutter-island.jpg'}
          />
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default MyListPage;
