import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import clsx from 'clsx';

const makeLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.navLinkActive);
};

const AuthNav = () => {
  return (
    <div className={css.nav}>
      <NavLink to="/register" className={makeLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={makeLinkClass}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
