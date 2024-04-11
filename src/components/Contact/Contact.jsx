import { FaUser } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { useState } from 'react';
import EditContactForm from '../EditContactForm/EditContactForm';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';

const Contact = ({ id, name, number, openModal }) => {
  const [isOpenEditForm, setIsOpenEditForm] = useState(false);
  const [isOpenContactMenu, setIsOpenContactMenu] = useState(false);

  return (
    <>
      {isOpenEditForm ? (
        <EditContactForm
          id={id}
          name={name}
          number={number}
          onClose={setIsOpenEditForm}
        />
      ) : (
        // CONTACT INFO

        <div className={css.container}>
          <div className={css.wrapper}>
            <div className={css.contactData}>
              <FaUser className={css.icon} />
              <p>{name}</p>
            </div>
            <div className={css.contactData}>
              <FaPhoneAlt className={css.icon} />
              <p>{number}</p>
            </div>
          </div>

          <button
            className={css.contactMenuBtn}
            onClick={() => setIsOpenContactMenu(!isOpenContactMenu)}
          >
            <BsThreeDotsVertical />
          </button>

          {isOpenContactMenu && (
            // CONTACT MENU

            <div className={css.menu}>
              <button
                type="button"
                className={css.option}
                onClick={() => {
                  openModal(id);
                  setIsOpenContactMenu(!isOpenContactMenu);
                }}
              >
                <MdDelete />
                <span>Delete</span>
              </button>

              <button
                type="button"
                className={css.option}
                onClick={() => {
                  setIsOpenEditForm(true);
                  setIsOpenContactMenu(!isOpenContactMenu);
                }}
              >
                <MdEdit />
                <span>Edit</span>
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
