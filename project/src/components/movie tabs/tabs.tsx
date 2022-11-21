import {Film} from '../../types/film';
import DetailsTab from './details-tab';
import ReviewsTab from './reviews-tab';
import {useState} from 'react';
import {ReviewType} from '../../types/review-type';
import OverviewTab from './overview-tab';

type Props = {
  film: Film;
  reviews: ReviewType[];
};

function Tabs({film, reviews}: Props):JSX.Element {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === 'Overview' ? 'film-nav__item--active' : ''}`}>
            <span className="film-nav__link" onClick={() => setActiveTab('Overview')}>Overview</span>
          </li>
          <li className={`film-nav__item ${activeTab === 'Details' ? 'film-nav__item--active' : ''}`}>
            <span className="film-nav__link" onClick={() => setActiveTab('Details')}>Details</span>
          </li>
          <li className={`film-nav__item ${activeTab === 'Reviews' ? 'film-nav__item--active' : ''}`}>
            <span className="film-nav__link" onClick={() => setActiveTab('Reviews')}>Reviews</span>
          </li>
        </ul>
      </nav>

      {activeTab === 'Reviews' && <ReviewsTab reviews={reviews} />}
      {activeTab === 'Overview' && <OverviewTab film={film} />}
      {activeTab === 'Details' && <DetailsTab film={film} />}
    </div>
  );
}

export default Tabs;
