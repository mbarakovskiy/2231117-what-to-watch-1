import {Fragment, useState, ChangeEvent, FocusEvent} from 'react';

type ReviewFormValue = {
  starsCount: number;
  reviewText: string;
};

function ReviewForm(): JSX.Element {
  const [formValue, setFormValue] = useState<ReviewFormValue>({
    starsCount: 0,
    reviewText: ''
  });

  const handleChangeComment = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormValue((prevValue) => ({
      ...prevValue,
      reviewText: evt.target.value
    }));
  };

  const handleChangeRating = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevState) => ({
      ...prevState,
      starsCount: Number(evt.target.value)
    }));
  };

  const handleSubmit = (evt: FocusEvent<HTMLFormElement>) => {
    throw new Error('kek');
  };

  const ratingStars = [Array(10).keys()].map((_, index) => {
    const currentStar = formValue.starsCount - index;

    return (
      <Fragment key={currentStar}>
        <input
          id={`star-${currentStar}}`}
          className="rating__input"
          name="rating"
          value={currentStar}
          type="radio"
          onChange={handleChangeRating}
        />
        <label
          className="rating__label"
          htmlFor={`star-${currentStar}}`}
        >Rating {index}
        </label>
      </Fragment>
    );
  });

  return (
    <form className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {ratingStars}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          id="review-text"
          className="add-review__textarea"
          name="review-text"
          value={formValue.reviewText}
          placeholder="ReviewType text"
          onChange={handleChangeComment}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default ReviewForm;
