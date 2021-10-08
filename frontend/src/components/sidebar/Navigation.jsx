import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
// import { useState } from 'react';

function Navigation() {
  const [t] = useTranslation('global');
  // const [sidebar, setSidebar] = useState(<nav id='nav' />);
  const { jobtitle } = useSelector((state) => state);

  if (jobtitle === 'admin') {
    return (
      <nav id='nav'>
        <ul>
          <li>
            <Link className='link' to='/create-user'>
            {t('navigation.createUser')}
            </Link>
          </li>
          <li>
            <Link className='link' to='/create-work-center'>
            {t('navigation.createWCr')}
            </Link>
          </li>
          <li>
            <Link className='link' to='/list-users'>
            {t('navigation.eUser')}
            </Link>
          </li>
          <li>
            <Link className='link' to='/edit-work-center'>
            {t('navigation.eWCr')}
            </Link>
          </li>
          <li>
            <Link className='link' to='/logout'>
            {t('navigation.alogout')}
            </Link>
          </li>
          <li></li>
        </ul>
      </nav>
    );
  }
  if (jobtitle === 'Manager') {
    return (
      <nav id='nav'>
        <ul>
          <li>
            <Link className='link' to='/create-order'>
            {t('navigation.createOrder')}
            </Link>
          </li>
          <li>
            <Link className='link' to='/create-item'>
            {t('navigation.createItem')}
            </Link>
          </li>
          <li>
            <Link className='link' to='/edit-order'>
            {t('navigation.editOrder')}
            </Link>
          </li>
          <li>
            <Link className='link' to='/edit-item'>
            {t('navigation.editItem')}
            </Link>
          </li>
          <li>
            <Link className='link' to='/logout'>
            {t('navigation.mlogout')}
            </Link>
          </li>
          <li></li>
        </ul>
      </nav>
    );
  }
  if (jobtitle === 'Worker') {
    return (
      <nav id='nav'>
        <ul>
          <li>
            <Link className='link' to='/orders'>
            {t('navigation.orders')}
            </Link>
          </li>
          <li>
            <Link className='link' to='/logout'>
            {t('navigation.wlogout')}
            </Link>
          </li>
          <li></li>
        </ul>
      </nav>
    );
  }

  return <nav id='nav'></nav>;
}

export default Navigation;
