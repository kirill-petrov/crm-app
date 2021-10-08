import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import closeIcon from '../../images/closeicon.svg';
import Loader from '../../helpers/Loader.jsx';
import Output from '../../helpers/Output.jsx';

function EditOrder({ order, setActive }) {
  const [t] = useTranslation('global');
  const dispatch = useDispatch();
  const { message, error, load } = useSelector((state) => state);
  function handleSubmitEditOrder(e) {
    e.preventDefault();
    const payload = {
      id: order.id,
      quantity: e.target.plannedQuantity.value,
      promiseddate: e.target.promisedDate.value,
      priority: e.target.priority.value,
    };
    dispatch({ type: 'EDIT_ORDER_SAGA', payload });
  }
  const promisedDate = (date) => date.split('T')[0];
  const date = promisedDate(order.promiseddate);
  // Форма редактирования задачи
  return (
    <div
      id='editOrderModal'
      className='modal_content flex-direction--column formbg padding-horizontal--48'>
      <img
        className='modal_close'
        alt='close'
        src={closeIcon}
        onClick={() => setActive(false)}
      />
      <span id='form-header' className='padding-bottom--15'>
        {t('editOrder.editWOrder')}
      </span>
      <form id='editOrder' onSubmit={handleSubmitEditOrder}>
        <div className='field padding-bottom--24'>
          <label htmlFor='plannedQuantity'>{t('editOrder.editWOrderPLQty')}</label>
          <input
            type='number'
            step='1'
            min='0'
            name='plannedQuantity'
            defaultValue={order.quantity}
            autoFocus
          />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='promisedDate'>{t('editOrder.editWOrderPrDate')}</label>
          <input type='date' name='promisedDate' defaultValue={date} />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='productionPrioroty'>{t('editOrder.editProdPrior')}</label>
          <p>
            <select
              defaultValue={order.priority}
              className='selectEditOrder'
              name='priority'>
              <option value='1'>{t('editOrder.low')}</option>
              <option value='2'>{t('editOrder.medium')}</option>
              <option value='3'>{t('editOrder.high')}</option>
            </select>
          </p>
        </div>
        <div className='field padding-bottom--24'>
          <input type='submit' name='submit' value='Edit' />
        </div>
        {load && <Loader />}
        {message && <Output message={message} error={error} />}
      </form>
    </div>
  );
}

export default EditOrder;
