import css from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="text"
        onChange={e =>
          dispatch(changeFilter(e.target.value.toLowerCase().trim()))
        }
        className={css.search}
        placeholder="Search"
      />
    </>
  );
};

export default SearchBox;
