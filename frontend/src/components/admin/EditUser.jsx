import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import closeIcon from '../../images/closeicon.svg';
import Loader from '../../helpers/Loader.jsx';
import Output from '../../helpers/Output.jsx';
import { fetchJson } from '../../helpers/fetchJson.jsx';

function EditUser({ user, setActive }) {
  const { error, message, load } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [t] = useTranslation('global');
  const [workCenters, setworkCenters] = useState([]);
  useEffect(() => {
    async function fetchAndSetWorkCenters() {
      const listWorkCenters = await fetchJson('/api/wc');
      setworkCenters(listWorkCenters.message);
    }
    fetchAndSetWorkCenters();
  }, []);

  function handleSubmitEditUser(e) {
    e.preventDefault();
    const payload = {
      id: user.id,
      lastname: e.target.lastname.value,
      firstname: e.target.firstname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      jobtitle: e.target.jobtitle.value,
      workcenterid: e.target.workcenter.value,
      status: e.target.status.value,
    };
    dispatch({ type: 'EDIT_USER_SAGA', payload });
  }
  // Форма редактирования пользователя
  return (
    <div
      id='editUserModal'
      className='modal_content flex-direction--column formbg padding-horizontal--48'>
      <img
        className='modal_close'
        alt='close'
        src={closeIcon}
        onClick={() => setActive(false)}
      />
      <span id='form-header' className='padding-bottom--15'>
        {t('editUser.title')}
      </span>
      <form id='editUser' onSubmit={handleSubmitEditUser}>
        <div className='field padding-bottom--24'>
          <label htmlFor='lastname'>{t('editUser.eLastname')}</label>
          <input
            type='text'
            name='lastname'
            defaultValue={user.lastname}
            autoFocus
          />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='firstname'>{t('editUser.eFirstname')}</label>
          <input type='text' name='firstname' defaultValue={user.firstname} />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='email'>{t('editUser.eEmail')}</label>
          <input type='email' name='email' defaultValue={user.email} />
        </div>
        <div className='field padding-bottom--24'>
          <label htmlFor='password'>{t('editUser.ePassword')}</label>
          <input type='password' name='password' />
        </div>
        <div className='grid--50-50'>
          <label htmlFor='jobtitle'>{t('editUser.eJobtitle')}</label>
        </div>
        <p>
          <select
            className='selectEditUser'
            defaultValue={user.jobtitle}
            name='jobtitle'>
            <option value='Manager'>{t('editUser.oManager')}</option>
            <option value='Worker'>{t('editUser.oWorker')}</option>
          </select>
        </p>
        <div className='grid--50-50'>
          <label htmlFor='workcenter'>{t('editUser.eWC')}</label>
        </div>
        <p>
          <select className='selectEditUser' name='workcenter' required>
            {workCenters.map((el) => (
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            ))}
          </select>
        </p>
        <div className='grid--50-50'>
          <label htmlFor='status'>{t('editUser.eStatus')}</label>
        </div>
        <p>
          <select className='selectEditUser' name='status'>
            <option value='true'>{t('editUser.eActive')}</option>
            <option value='false'>{t('editUser.eRetired')}</option>
          </select>
        </p>
        <div className='field padding-bottom--24'>
          <input type='submit' name='submit' value={t('editUser.btn-edit')} />
        </div>
      </form>
      {load && <Loader />}
      {message && <Output message={message} error={error} />}
    </div>
  );
}

export default EditUser;
