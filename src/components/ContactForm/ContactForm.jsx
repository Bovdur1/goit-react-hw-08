import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

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

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, action) => {
    dispatch(addContact(value));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        {/* Поле для введення ім'я */}
        <div className={css.wrapper}>
          <Field
            type="text"
            name="name"
            placeholder="Name"
            className={css.input}
          />
          <ErrorMessage name="name" component="span" className={css.errorMsg} />
        </div>

        {/* Поле для введення номеру */}
        <div className={css.wrapper}>
          <Field
            type="text"
            name="number"
            placeholder="Number"
            className={css.input}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={css.errorMsg}
          />
        </div>

        <button type="submit" className={css.submitBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
