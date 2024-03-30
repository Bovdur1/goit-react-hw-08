import css from './SearchBox.module.css';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = ({ title }) => {
  const searchFieldId = useId();
  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor={searchFieldId} className={css.label}>
        {title}
      </label>
      <input
        type="text"
        onChange={e =>
          dispatch(changeFilter(e.target.value.toLowerCase().trim()))
        }
        id={searchFieldId}
        className={css.search}
      />
    </>
  );
};

export default SearchBox;
