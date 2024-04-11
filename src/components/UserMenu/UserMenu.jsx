import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.menu}>
      <p>
        Welcome, <b>{user.name}</b>{' '}
      </p>
      <button className={css.logOutBtn} onClick={() => dispatch(logout())}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
