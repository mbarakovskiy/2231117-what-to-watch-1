export type Props = {
  onClick: () => void;
}

function ShowMore({onClick}: Props): JSX.Element {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        onClick={onClick}
        type="button"
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMore;
