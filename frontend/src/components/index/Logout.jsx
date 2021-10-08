import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Logout() {
  const dispatch = useDispatch();
  const { jobtitle } = useSelector((state) => state);
  useEffect(() => {
    dispatch({ type: 'LOGOUT_USER_SAGA' });
  }, [dispatch]);

  // Выход из системы
  return <>{jobtitle === null && <Redirect to='/' />}</>;
}
export default Logout;
