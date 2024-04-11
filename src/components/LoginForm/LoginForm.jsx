import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const initialValues = {
  email: '',
  password: '',
};

const regisrationSchema = Yup.object().shape({
  email: Yup.string().required('Required!'),
  password: Yup.string().required('Required!'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, action) => {
    dispatch(login(value));
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
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
