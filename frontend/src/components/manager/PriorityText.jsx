import { useTranslation } from 'react-i18next';

function PriorityText({ priorityNumber }) {
  const [t] = useTranslation('global');

  switch (priorityNumber) {
    case 3:
      return <>{t('orderListingItem.high')}</>;

    case 2:
      return <>{t('orderListingItem.medium')}</>;

    default:
      return <>{t('orderListingItem.low')}</>;
  }
}

export default PriorityText;
