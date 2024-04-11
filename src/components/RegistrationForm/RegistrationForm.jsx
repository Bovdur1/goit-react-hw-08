import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const regisrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'To long!')
    .required('Required!'),
  email: Yup.string().required('Required!'),
  password: Yup.string()
    .min(6, 'Too short!')
    .max(50, 'Too long!')
    .required('Required!'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, action) => {
    dispatch(register(value));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={regisrationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div>
          <Field
            type="text"
            name="name"
            placeholder="Name"
            className={css.input}
          />
          <ErrorMessage name="name" component="span" className={css.errorMsg} />
        </div>
        <div>
          <Field
            type="email"
            name="email"
            placeholder="Email"
            className={css.input}
          />
          <ErrorMessage
            name="email"
            component="span"
            className={css.errorMsg}
          />
        </div>
        <div>
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className={css.input}
          />
          <ErrorMessage
            name="password"
            component="span"
            className={css.errorMsg}
          />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
