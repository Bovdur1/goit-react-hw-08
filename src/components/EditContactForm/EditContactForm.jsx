import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaUser } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { editContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { IoMdClose } from 'react-icons/io';
import css from './EditContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required!'),
  number: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required!'),
});

const EditContactForm = ({ id, name, number, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = updatedContact => {
    dispatch(editContact({ id, updatedContact }));
    onClose(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <button onClick={() => onClose(false)} className={css.closeBtn}>
            <IoMdClose />
          </button>
          <div className={css.container}>
            <div className={css.wrapper}>
              <FaUser />
              <Field
                type="text"
                name="name"
                placeholder={name}
                className={css.input}
              />
              <ErrorMessage
                name="name"
                component="span"
                className={css.errorMsg}
              />
            </div>

            <div className={css.wrapper}>
              <FaPhoneAlt />
              <Field
                type="text"
                name="number"
                placeholder={number}
                className={css.input}
              />
              <ErrorMessage
                name="number"
                component="span"
                className={css.errorMsg}
              />
            </div>
          </div>

          <button type="submit" className={css.editBtn}>
            Edit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default EditContactForm;
