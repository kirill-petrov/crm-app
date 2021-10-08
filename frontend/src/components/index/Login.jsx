import { useTranslation } from 'react-i18next';
// import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Loader from '../../helpers/Loader.jsx';
import Output from '../../helpers/Output.jsx';

function Login() {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const { load, error, message, jobtitle } = useSelector((state) => state);
  const [t] = useTranslation('global');
  /* eslint-disable */
  // Форма авторизации
  const handleLogin = (e) => {
    e.preventDefault();
    if (e.target.email.value && e.target.password.value) {
      const payload = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
      dispatch({ type: 'LOGIN_USER_SAGA', payload });
    }
  };

  return (
    <div className='flex-direction--column formbg padding-horizontal--48'>
      <span id='header' className='padding-bottom--15'>
        <span className='padding-bottom--15'>{t('login.title')}</span>
      </span>
      <form onSubmit={handleLogin} id='login'>
        <div className='field padding-bottom--24'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' autoFocus required />
        </div>
        <div className='field padding-bottom--24'>
          <div>
            <label htmlFor='password'>{t('login.password')}</label>
          </div>
          <input type='password' name='password' required />
        </div>
        <div className='field padding-bottom--24'>
          <input
            type='submit'
            name='submit'
            value={t('login.btn-login')}
            className='button'
          />
        </div>
        <div>
          {load && <Loader />}
          {message && <Output message={message} error={error} />}
          {jobtitle === 'Worker' && <Redirect to='/orders' />}
          {jobtitle === 'admin' && <Redirect to='/list-users' />}
          {jobtitle === 'Manager' && <Redirect to='/edit-order' />}
        </div>
      </form>
    </div>
  );
}

export default Login;
