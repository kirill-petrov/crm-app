import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Loader from '../../helpers/Loader.jsx';
import Output from '../../helpers/Output.jsx';

function CreateOrder() {
  const [t] = useTranslation('global');
  // Форма создания задачи
  const dispatch = useDispatch();
  // const history = useHistory();
  // eslint-disable-next-line object-curly-newline
  const { itemList, load, message, error, randomOrderNum } = useSelector(
    (store) => store,
  );
  useEffect(() => {
    dispatch({ type: 'GET_ITEMS_LIST_SAGA' });
  }, [dispatch]);
  const randomWorkOrderNumber = () => {
    dispatch({ type: 'GET_RANDOM_ORDER_NUM_SAGA' });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // eslint-disable-next-line object-curly-newline
    const { itemId, order, quantity, date, priority } = e.target;
    const itemIndex = itemList.findIndex((el) => el.id === +itemId.value);
    const payload = {
      itemId: itemId.value,
      itemName: itemList[itemIndex].name,
      partnumber: itemList[itemIndex].partnumber,
      order: order.value,
      quantity: quantity.value,
      date: date.value,
      priority: priority.value,
    };
    dispatch({ type: 'CREATE_ORDER_SAGA', payload });
    // history.push('/orders');
    if (!error) {
      e.target.reset();
    }
  };
  return (
    <div className='flex-direction--column formbg padding-horizontal--48'>
      <span id='header' className='padding-bottom--15'>
        {t('createOrder.title')}
      </span>
      <form id='createOrder' onSubmit={submitHandler}>
        <div className='field padding-bottom--24'>
          <label htmlFor='itemId'>{t('createOrder.name')}</label>
          <select name='itemId' required>
            {itemList.map((item) => (
              <option value={item.id} key={item.partnumber}>
                {item.name} ({item.partnumber})
              </option>
            ))}
          </select>
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='order'>{t('createOrder.ewonOrca')}</label>
          <div className='flex-3-2'>
            <div>
              <input
                type='text'
                name='order'
                defaultValue={randomOrderNum && randomOrderNum}
                required
                autoFocus
              />
            </div>
            <div>
              <button type='button' onClick={randomWorkOrderNumber}>
                {t('createOrder.btn-generate')}
              </button>
            </div>
          </div>
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='quantity'>{t('createOrder.ewopq')}</label>
          <input type='number' min='1' step='1' name='quantity' required />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='date'>{t('createOrder.ewopd')}</label>
          <input type='date' name='date' required />
        </div>
        <label htmlFor='priority'>{t('createOrder.pPriority')}</label>
        <p>
          <select defaultValue='1' name='priority' required>
            <option value='1'>{t('createOrder.value1')}</option>
            <option value='2'>{t('createOrder.value2')}</option>
            <option value='3'>{t('createOrder.value3')}</option>
          </select>
        </p>
        <div className='field padding-bottom--24'>
          <button type='submit'>{t('createOrder.btn-create')}</button>
        </div>
      </form>
      {load && <Loader />}
      {message && <Output message={message} error={error} />}
    </div>
  );
}

export default CreateOrder;
