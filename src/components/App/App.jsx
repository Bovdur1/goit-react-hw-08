import './App.css';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { selectError, selectIsLoading } from '../../redux/contactsSlice';
import Loader from '../Loader/Loader';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox title="Find contacts by name" />
      {!isLoading && !error && <ContactList />}
      {isLoading && <Loader />}
      {error && <h2>Something went wrong... Try again.</h2>}
    </>
  );
}

export default App;
