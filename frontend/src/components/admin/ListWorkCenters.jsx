import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ItemWorkCenter from './ItemWorkCenter.jsx';

function ListWorkCenters() {
  const dispatch = useDispatch();
  const [t] = useTranslation('global');
  const list = useSelector((state) => state.workCenterList);
  useEffect(() => {
    dispatch({ type: 'GET_WCS_SAGA' });
  }, [dispatch]);

  return (
    <div className='listTableDiv'>
      <h1>{t('listWC.title')}</h1>
      {list.length !== 0 && (
        <div className='wc-item title'>
          <div className='wc-id'>ID</div>
          <div className='listTable'>{t('listWC.wcn')}</div>
          <div className='listTable'>{t('listWC.wcc')}</div>
          <div className='listTable'>{t('listWC.wcCa')}</div>
          <div className='listTable'>{t('listWC.statusWC')}</div>
          <div className='wc-edit'></div>
        </div>
      )}
      {list.length !== 0
        ? list.map((el) => <ItemWorkCenter wc={el} key={el.id} />)
        : t('listWC.loading')}
    </div>
  );
}

export default ListWorkCenters;
