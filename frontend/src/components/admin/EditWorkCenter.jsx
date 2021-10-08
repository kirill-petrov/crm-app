import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import closeIcon from '../../images/closeicon.svg';

function EditWorkCenter({ center, setActive }) {
  const [t] = useTranslation('global');
  const dispatch = useDispatch();
  function handleSubmitEditCenter(e) {
    e.preventDefault();
    const payload = {
      id: center.id,
      name: e.target.centerName.value,
      code: e.target.code.value,
      capacity: e.target.capacity.value,
      status: e.target.status.value,
    };
    dispatch({ type: 'EDIT_WC_SAGA', payload });
  }
  // Форма редактирования отдела
  return (
    <div
      id='editWCModal'
      className='modal_content flex-direction--column formbg padding-horizontal--48'>
      <img
        className='modal_close_button'
        alt='close'
        src={closeIcon}
        onClick={() => setActive(false)}
      />
      <span className='padding-bottom--15' id='form-header'>
        {t('editWorkCenter.title')}
      </span>
      <form onSubmit={handleSubmitEditCenter}>
        <div className='field padding-bottom--24'>
          <label htmlFor='centerName'>{t('editWorkCenter.eCenterName')}</label>
          <input
            type='text'
            name='centerName'
            defaultValue={center.name}
            autoFocus
          />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='code'>{t('editWorkCenter.eCode')}</label>
          <input type='text' name='code' defaultValue={center.code} />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='capacity'>{t('editWorkCenter.eCapacity')}</label>
          <input
            type='number'
            step='0.01'
            min='0'
            name='capacity'
            defaultValue={center.capacity}
          />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='status'>{t('editWorkCenter.eStatus')}</label>
          <p>
            <select
              defaultValue={center.status}
              name='status'
              className='selectStatus'>
              <option value='true'>{t('editWorkCenter.oActive')}</option>
              <option value='false'>{t('editWorkCenter.oDisabled')}</option>
            </select>
          </p>
        </div>
        <div className='field padding-bottom--24'>
          <input type='submit' name='submit' value={t('editWorkCenter.btn-edit')} />
        </div>
      </form>
    </div>
  );
}

export default EditWorkCenter;
