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
const LoginPage = lazy(() => import('../../pages/Login/Login'));
const RegisterPage = lazy(() =>
  import('../../pages/Registration/Registration')
);
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Layout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/register"
                element={<RestrictedRoute component={<RegisterPage />} />}
              />
              <Route
                path="/login"
                element={<RestrictedRoute component={<LoginPage />} />}
              />
              <Route
                path="/contacts"
                element={<PrivateRoute component={<ContactsPage />} />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Layout>
      )}
    </>
  );
}

export default App;
