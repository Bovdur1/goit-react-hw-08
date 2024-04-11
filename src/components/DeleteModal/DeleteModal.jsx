import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from './DeleteModal.module.css';
import { useRef } from 'react';

const DeleteModal = ({ id, closeModal }) => {
  const dispatch = useDispatch();
  const modalRef = useRef();
  const articleRef = useRef();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    closeModal();
  };

  const handleCloseModal = e => {
    if (e.target === modalRef.current || e.target === articleRef.current)
      return;
    closeModal();
  };

  return (
    <div
      className={css.backdrop}
      onClick={e => {
        handleCloseModal(e);
      }}
    >
      <div className={css.modal} ref={modalRef} onClick={() => {}}>
        <p ref={articleRef} className={css.text}>
          Do you want delete this contact?
        </p>
        <div className={css.buttons}>
          <button onClick={() => closeModal()}>Cancel</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
