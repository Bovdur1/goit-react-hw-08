import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const makeLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.navLinkActive);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={makeLinkClass}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={makeLinkClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
