import { Link } from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <>
      <h1>404 NOT FOUND!</h1>
      <Link to='/'>
        На главную
      </Link>
    </>
  );
}

export default NotFound;
