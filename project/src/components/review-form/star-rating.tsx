import { ChangeEvent } from 'react';

type Props = {
  rating: number;
  isChosen: boolean;
  onChange: (value: number) => void;
}

function RatingStar({rating, isChosen, onChange}: Props): JSX.Element {
  const scoreStr = rating.toString();
  const handleChangeRating = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    onChange(value);
  };

  return (
    <>
      <input className="rating__input" checked={isChosen} onChange={handleChangeRating} id={`star-${scoreStr}`} type="radio" name="rating" value={scoreStr} />
      <label className="rating__label" htmlFor={`star-${scoreStr}`}>Rating {scoreStr}</label>
    </>
  );
}

export default RatingStar;
