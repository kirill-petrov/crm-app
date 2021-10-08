import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Loader from '../../helpers/Loader.jsx';
import Output from '../../helpers/Output.jsx';

function CreateWorkCenter() {
  const dispatch = useDispatch();
  // const history = useHistory();
  const { error, message, load } = useSelector((state) => state);
  const [t] = useTranslation('global');
  const handleSubmitCenter = (e) => {
    e.preventDefault();
    const payload = {
      name: e.target.centerName.value,
      code: e.target.code.value,
      capacity: e.target.capacity.value,
    };
    dispatch({ type: 'CREATE_WORK_CENTER_SAGA', payload });
    // history.push('/edit-work-center');
    if (!error) {
      e.target.reset();
    }
  };
  // Форма создания отдела
  return (
    <div className='flex-direction--column formbg padding-horizontal--48'>
      <span id='header' className='padding-bottom--15'>
        {t('CreateWorkCenter.title')}
      </span>
      <form onSubmit={handleSubmitCenter}>
        <div className='field padding-bottom--24'>
          <label htmlFor='centerName'>{t('CreateWorkCenter.wcn')}</label>
          <input type='text' name='centerName' autoFocus />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='code'>{t('CreateWorkCenter.wcc')}</label>
          <input type='text' name='code' />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='capacity'>{t('CreateWorkCenter.wcCa')}</label>
          <input type='number' min='0' step='1' name='capacity' />
        </div>
        <div className='field padding-bottom--24'>
          <input
            type='submit'
            name='submit'
            value={t('CreateWorkCenter.btn-create')}
          />
        </div>
        {load && <Loader />}
        {message && <Output message={message} error={error} />}
      </form>
    </div>
  );
}

export default CreateWorkCenter;
