import { ChangeEvent } from 'react';

type Props = {
  score: number;
  isChosen: boolean;
  onChange: (value: number) => void;
}

function RatingStar({score, isChosen, onChange}: Props): JSX.Element {
  const scoreStr = score.toString();
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
