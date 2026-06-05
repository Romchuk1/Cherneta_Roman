import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Головна</Link>

      <br />

      <Link to="/movies">Фільми</Link>

      <br />

      <Link to="/movies/add">Додати фільм</Link>

      <hr />
    </nav>
  );
}

export default Navigation;