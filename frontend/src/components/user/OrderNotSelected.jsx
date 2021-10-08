import { useTranslation } from 'react-i18next';

function OrderNotSelected() {
  const [t] = useTranslation('global');

  return (
    <div className='no-order'>
      {t('orderNotSelected.msg')}
    </div>
  );
}

export default OrderNotSelected;
