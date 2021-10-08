import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

function Order() {
  // Текущая задача
  const [t] = useTranslation('global');
  const dispatch = useDispatch();
  const { currentOrder } = useSelector((store) => store);
  const priorityName = (priority) => {
    switch (priority) {
      case 3:
        return t('order.high');
      case 2:
        return t('order.medium');
      default:
        return t('order.low');
    }
  };
  const promisedDate = (date) => date.split('T')[0];
  const date = promisedDate(currentOrder['Order.promiseddate']);
  const priority = priorityName(currentOrder['Order.priority']);
  const goodPartReport = (e) => {
    e.preventDefault();
    const { num } = e.target;
    dispatch({
      type: 'SUBMIT_PARTS_SAGA',
      payload: { num: num.value, type: 'good', pk: currentOrder.id },
    });
    e.target.reset();
  };
  const badPartReport = (e) => {
    e.preventDefault();
    const { num } = e.target;
    dispatch({
      type: 'SUBMIT_PARTS_SAGA',
      payload: { num: num.value, type: 'bad', pk: currentOrder.id },
    });
    e.target.reset();
  };
  const closeOrder = () => {
    dispatch({
      type: 'CLOSE_ORDER_SAGA',
      payload: { pk: currentOrder.id },
    });
  };
  const qualityPercent = (all, bad) => {
    const one = 100 / all;
    return 100 - one * bad;
  };
  const quality = qualityPercent(
    currentOrder['Order.quantity'],
    currentOrder.quantitydefect,
  );
  return (
    <div className='current-order'>
      <div className='current-order-header'>
        <div className='header-date'>
          {t('order.promisedDate')}
          <br />
          {date}
        </div>
        <div className='header-title'>
          {t('order.currentOrder')} <br />
          {t('order.number')} {currentOrder['Order.number']}
        </div>
        <div className='header-priority'>
          {t('order.priority')}
          <br />
          {priority}
        </div>
      </div>
      <div className='current-order-wrapper'>
        <div className='current-order-info'>
          <p>
            <strong>{t('order.itemName')} </strong> {currentOrder['Order.itemname']}
          </p>
          <p>
            <strong>{t('order.itemPartnumber')} </strong>{' '}
            {currentOrder['Order.itempartnum']}
          </p>
          <p>
            <strong>{t('order.routingDescriptor')} </strong>
            {currentOrder['Order.Item.descrroute']}
          </p>
        </div>
        <div className='current-order-progress'>
          <h3>{t('order.orderProgress')}</h3>
          <div className='progress-bar'>
            {currentOrder.quantitycomplete}/{currentOrder['Order.quantity']}
          </div>
          <div className='order-complete-info'>
            <div className='good-part-info'>
              <div className='quality-info'>
                {t('order.quality')}
                {quality}%
              </div>
              <div className='order-report-wrapper'>
                <form onSubmit={goodPartReport}>
                  <h4>{t('order.goodPart')}</h4>
                  <input
                    type='number'
                    step='1'
                    min='0'
                    name='num'
                    autoFocus
                    required
                  />
                  <button>{t('order.submitGood')}</button>
                </form>
              </div>
            </div>
            <div className='bad-part-info'>
              <div className='time-to-complete'>
                {t('order.badParts')}
                {currentOrder.quantitydefect}
              </div>
              <div className='order-report-wrapper'>
                <form onSubmit={badPartReport}>
                  <h4>{t('order.reportDefective')}</h4>
                  <input type='number' step='1' min='0' name='num' required />
                  <button>{t('order.submitDefect')}</button>
                </form>
              </div>
            </div>
          </div>
          <div className='order-close'>
            {currentOrder.quantitycomplete >= currentOrder['Order.quantity'] ? (
              <button type='button' onClick={closeOrder}>
                Close order
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
