import { useContext } from "react";
import { Link } from "react-router-dom";
import css from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

export default function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={css.header}>
      <div className={css.logo}>REACT MEETUPS</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup"> Add new meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              <span className={css.badge}>{favoritesCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
