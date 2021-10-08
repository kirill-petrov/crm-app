import React from 'react';
// import { useTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next';

function Header() {
  const [t, i18n] = useTranslation('global');

  return (
    <div className='button-lang'>
      <h2>{t('')}</h2>
      <button className='btn-lang' onClick={() => i18n.changeLanguage('en')}>EN</button>
      <button className='btn-lang' onClick={() => i18n.changeLanguage('ru')}>RU</button>
    </div>
  );
}

export default Header;
