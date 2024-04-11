import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import DeleteModal from '../DeleteModal/DeleteModal';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';

import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [IsOpenModal, setIsOpenModal] = useState(false);
  const [contactId, setContactId] = useState('');

  const handleOpenModal = id => {
    setIsOpenModal(true);
    setContactId(id);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setContactId('');
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return error !== null ? (
    <ErrorMessage />
  ) : (
    <div className={css.container}>
      {/* SIDEBAR  */}
      <div className={css.sidebar}>
        <h2 className={css.sideTitle}>Add new contact</h2>
        <ContactForm />
      </div>

      {/* MAIN CONTENT */}
      <div className={css.contacts}>
        <h1 className={css.title}>Your contacts</h1>
        <SearchBox />
        {isLoading ? <Loader /> : <ContactList openModal={handleOpenModal} />}
      </div>
      {IsOpenModal && (
        <DeleteModal id={contactId} closeModal={handleCloseModal} />
      )}
    </div>
  );
};

export default Contacts;
