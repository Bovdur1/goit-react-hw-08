import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

const ContactList = ({ openModal }) => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.listItem}>
          <Contact id={id} name={name} number={number} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
