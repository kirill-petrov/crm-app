import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ModalItems from './ModalItems.jsx';

function ListItems() {
  const [t] = useTranslation('global');
  const dispatch = useDispatch();
  const list = useSelector((state) => state.itemList);
  useEffect(() => {
    dispatch({ type: 'GET_ITEMS_LIST_SAGA' });
  }, [dispatch]);
  return (
    <div className='listTableDiv'>
      <h1>{t('listItems.title')}</h1>
      {list.length && (
        <div className='wc-item title'>
          <div className='wc-id'>ID</div>
          <div className='listTable'>{t('listItems.name')}</div>
          <div className='listTable'>{t('listItems.pNumber')}</div>
          <div className='listTable'>{t('listItems.Description')}</div>
          <div className='wc-edit'></div>
        </div>
      )}
      {list.length
        ? list.map((el) => <ModalItems el={el} key={el.id} />)
        : t('listItems.loading')}
    </div>
  );
}

export default ListItems;
