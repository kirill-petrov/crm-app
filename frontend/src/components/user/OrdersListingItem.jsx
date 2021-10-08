import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

function OrdersListingItem({ order }) {
  const [t] = useTranslation('global');
  const dispatch = useDispatch();
  const { currentOrderId, iduser } = useSelector((state) => state);
  const priorityName = (priority) => {
    switch (priority) {
      case 3:
        return t('orderListingItem.high');
      case 2:
        return t('orderListingItem.medium');
      default:
        return t('orderListingItem.low');
    }
  };
  const promisedDate = (date) => date.split('T')[0];
  const buttonHandler = () => {
    dispatch({
      type: 'TAKE_ORDER_IN_WORK_SAGA',
      payload: { orderId: order.id, userId: iduser },
    });
  };
  const date = promisedDate(order.promiseddate);
  const priority = priorityName(order.priority);

  return (
    <div className={`order-item ${priority.toLocaleLowerCase()}`}>
      <div className='order-id'>{order.id}</div>
      <div className='order-priority'>{priority}</div>
      <div className='order-number'>{order.number}</div>
      <div className='order-date'>{date}</div>
      <div className='order-ipn'>{order.itempartnum}</div>
      <div className='order-iname'>{order['Item.name']}</div>
      <div className='order-button'>
        <button
          type='button'
          disabled={currentOrderId && true}
          onClick={buttonHandler}>
          {t('orderListingItem.takeToWork')}
        </button>
      </div>
    </div>
  );
}

export default OrdersListingItem;
