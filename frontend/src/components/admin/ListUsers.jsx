import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ModalUser from './ModalUser.jsx';

// import { fetchJson } from '../../helpers/fetchJson.jsx';//

function ListUsers() {
  const [t] = useTranslation('global');
  const dispatch = useDispatch();
  const list = useSelector((state) => state.userList);
  useEffect(() => {
    dispatch({ type: 'GET_USERS_LIST' });
  }, [dispatch]);

  return (
    <div className='listTableDiv'>
      <h1>{t('listUsers.title')}</h1>
      {list.length && (
        <div className='wc-item title'>
          <div className='wc-id'>ID</div>
          <div className='listTable'>{t('listUsers.lastName')}</div>
          <div className='listTable'>{t('listUsers.firstname')}</div>
          <div className='listTableEmail'>Email</div>
          <div className='listTable'>{t('listUsers.wc')}</div>
          <div className='listTable'>{t('listUsers.jobtitle')}</div>
          <div className='wc-edit'></div>
        </div>
      )}
      {list.length
        ? list.map((el) => <ModalUser el={el} key={el.id} />)
        : t('listUsers.loading')}
    </div>
  );
}

export default ListUsers;
