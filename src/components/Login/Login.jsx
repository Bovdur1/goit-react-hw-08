import { NavLink } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import css from './Login.module.css';

const Login = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Log in</h1>
      <LoginForm />
      <NavLink to="/register" className={css.navLink}>
        or <span className={css.link}>register</span>
      </NavLink>
    </div>
  );
};

export default Login;
