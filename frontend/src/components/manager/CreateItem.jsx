import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Loader from '../../helpers/Loader.jsx';
import Output from '../../helpers/Output.jsx';

function CreateItem() {
  // Форма создания продукта
  const [t] = useTranslation('global');
  const dispatch = useDispatch();
  // const history = useHistory();
  const { load, message, error } = useSelector((store) => store);
  const count = [1, 2, 3];
  const centers = useSelector((state) => state.workCenterList);
  useEffect(() => {
    dispatch({ type: 'GET_WCS_SAGA' });
  }, [dispatch]);
  const handlerCreateItem = (e) => {
    e.preventDefault();
    const payload = {
      name: e.target.itemName.value,
      partnumber: e.target.partNumber.value,
      description: e.target.itemDescription.value,
      workcenter1: e.target.workcenter1.value,
      descrroute1: e.target.descrroute1.value,
      cycletime1: e.target.cycletime1.value,
      workcenter2: e.target.workcenter2.value,
      descrroute2: e.target.descrroute2.value,
      cycletime2: e.target.cycletime2.value,
      workcenter3: e.target.workcenter3.value,
      descrroute3: e.target.descrroute3.value,
      cycletime3: e.target.cycletime3.value,
    };
    dispatch({ type: 'CREATE_ITEM_SAGA', payload });
    if (!error) {
      e.target.reset();
    }
  };

  return (
    <div
      className='flex-direction--column formbg padding-horizontal--48'
      id='createItemDiv'>
      <span id='header' className='padding-bottom--15'>
        {t('createItem.title')}
      </span>
      <form id='createItem' onSubmit={handlerCreateItem}>
        <div className='field padding-bottom--24'>
          <label htmlFor='itemName'>{t('createItem.name')}</label>
          <input type='text' name='itemName' autoFocus />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='partNumber'>{t('createItem.pNumber')}</label>
          <input type='text' name='partNumber' />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='itemDescription'>{t('createItem.iDescription')}</label>
          <input type='text' name='itemDescription' />
        </div>

        <div className='field padding-bottom--24'>
          <label>{t('createItem.iRouting')}</label>
          <div className='work-center-select-titles'>
            <div>{t('createItem.wcs')}</div>
            <div>{t('createItem.rDescriptor')}</div>
            <div>{t('createItem.cycleTime')}</div>
          </div>
          {count.map((num, i) => (
            <div className='work-center-select-wrapper' key={`wc${i}`}>
              <div className='work-center-label'>
                <select name={`workcenter${num}`}>
                  <option value='empty' defaultValue>
                    -
                  </option>
                  {centers.map((center) => (
                    <option key={center.id} value={center.code}>
                      [{center.code}] {center.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className='work-center-label'>
                <input
                  type='text'
                  className='routingDescription'
                  name={`descrroute${num}`}
                />
              </div>
              <div className='work-center-label'>
                <input
                  type='number'
                  min='0'
                  step='0.01'
                  className='cycleTime'
                  name={`cycletime${num}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className='field padding-bottom--24'>
          <input type='submit' name='submit' value={t('createItem.btn-create')} />
        </div>
        {load && <Loader />}
        {message && <Output message={message} error={error} />}
      </form>
    </div>
  );
}

export default CreateItem;
