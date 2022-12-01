import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import AuthForm from './AuthForm/AuthForm';
import Main from './Main/Main';

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return <>{isLoggedIn ? <Main /> : <AuthForm />}</>;
};
