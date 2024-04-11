import './App.css';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { refreshUser } from '../../redux/auth/operations';
import RestrictedRoute from '../RestrictedRoute';
import PrivateRoute from '../PrivateRoute';

const HomePage = lazy(() => import('../../pages/Home/Home'));
const LoginPage = lazy(() => import('../Login/Login'));
const RegisterPage = lazy(() => import('../Registration/Registration'));
const ContactsPage = lazy(() => import('../Contacts/Contacts'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            redirectTo="/contacts"
            element={<RestrictedRoute component={<RegisterPage />} />}
          />
          <Route
            path="/login"
            redirectTo="/contacts"
            element={<RestrictedRoute component={<LoginPage />} />}
          />
          <Route
            path="/contacts"
            redirectTo="/login"
            element={<PrivateRoute component={<ContactsPage />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
