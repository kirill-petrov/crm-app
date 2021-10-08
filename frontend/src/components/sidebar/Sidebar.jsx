import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Logo from './Logo.jsx';
import Navigation from './Navigation.jsx';
import InfoUser from './InfoUser.jsx';
// import Header from '../Header.jsx';
import { CLEAR_MESSAGE } from '../../helpers/actionTypes.jsx';

function Sidebar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { message } = useSelector((store) => store);

  useEffect(() => {
    if (message) {
      dispatch({ type: CLEAR_MESSAGE });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, location]);

  // Боковая панель
  return (
    <div id='sidebar'>
      <Logo />
      <InfoUser />
      <Navigation />
    </div>
  );
}

export default Sidebar;
