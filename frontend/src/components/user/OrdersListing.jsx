import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Order from './Order.jsx';
import OrderNotSelected from './OrderNotSelected.jsx';
import OrdersListingItem from './OrdersListingItem.jsx';

function OrdersListing() {
  const [t] = useTranslation('global');
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const { currentOrderId, orderList, wccode, iduser, wcid } = useSelector(
    (state) => state,
  );
  useEffect(() => {
    dispatch({ type: 'GET_ORDERS_LIST_SAGA', payload: { code: wccode, wcid } });
    dispatch({
      type: 'GET_ORDER_IN_WORK_SAGA',
      payload: { userId: iduser, wcCode: wccode },
    });
  }, [dispatch, currentOrderId, iduser, wccode, wcid]);

  return (
    <div className='orders-wrapper'>
      {currentOrderId ? <Order /> : <OrderNotSelected />}
      <div className='avaliable-orders'>
        <h2>{t('ordersListing.title1')}</h2>
        <div className='orders-listing-wrapper'>
          <div className='orders-title'>
            <div className='orders-title-id'>ID</div>
            <div className='orders-title-priority'>{t('ordersListing.title2')}</div>
            <div className='orders-title-number'>{t('ordersListing.orderNumber')}</div>
            <div className='orders-title-date'>{t('ordersListing.promiseDate')}</div>
            <div className='orders-title-ipn'>{t('ordersListing.itemPartnumber')}</div>
            <div className='orders-title-iname'>{t('ordersListing.itemName')}</div>
            <div className='orders-title-button'></div>
          </div>
          {orderList.map((order) => (
            <OrdersListingItem order={order} key={order.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrdersListing;
