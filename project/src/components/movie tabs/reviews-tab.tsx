import { ReviewType } from '../../types/review-type';
import Review from '../review/review';

export type Props = {
  reviews: ReviewType[];
}

function ReviewsTab({reviews}: Props): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      {
        Array.from(Array(Math.ceil(reviews.length / 3)).keys()).map((cur) => (
          <div key={cur} className="film-card__reviews-col">
            {
              reviews.slice(cur * 3, cur * 3 + 3).map((review) => <Review key={review.id} review={review} />)
            }
          </div>
        ))
      }
    </div>
  );
}

export default ReviewsTab;
