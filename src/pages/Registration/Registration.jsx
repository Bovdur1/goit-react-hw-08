import { NavLink } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './Registration.module.css';

const Registration = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Registration</h1>
      <RegistrationForm />
      <NavLink to="/login" className={css.navLink}>
        or <span className={css.link}>log in</span>
      </NavLink>
    </div>
  );
};

export default Registration;
