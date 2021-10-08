import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ModalOrders from './ModalOrders.jsx';

function ListOrders() {
  const [t] = useTranslation('global');
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.orderList);

  useEffect(() => {
    dispatch({ type: 'GET_ORDERS_LIST_MANAGER_SAGA' });
  }, [dispatch]);

  return (
    <div className='listTableDiv'>
      <h1>{t('listOrders.title')}</h1>
      {orderList.length && (
        <div className='wc-item title'>
          <div className='wc-id'>ID</div>
          <div className='listTable'>{t('listOrders.name')}</div>
          <div className='listTable'>{t('listOrders.itempartnum')}</div>
          <div className='listTable'>{t('listOrders.number')}</div>
          <div className='listTable'>{t('listOrders.Quantity')}</div>
          <div className='listTable'>{t('listOrders.Promiseddate')}</div>
          <div className='listTable'>{t('listOrders.Priority')}</div>
          <div className='wc-edit'></div>
        </div>
      )}
      {orderList.length > 0
        ? orderList.map((el) => <ModalOrders el={el} key={el.id} />)
        : t('listOrders.loading')}
    </div>
  );
}

export default ListOrders;
