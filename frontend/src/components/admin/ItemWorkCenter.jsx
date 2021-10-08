import { useState } from 'react';
import editIcon from '../../images/editIcon.svg';
import Modal from './Modal.jsx';
import EditWorkCenter from './EditWorkCenter.jsx';

function ItemWorkCenter({ wc }) {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={wc.status ? 'wc-item' : 'wc-item close'} key={wc.id}>
      <div className='wc-id'>{wc.id}</div>
      <div className='listTable' title={wc.name}>
        {wc.name}
      </div>
      <div className='listTable' title={wc.code}>
        {wc.code}
      </div>
      <div className='listTable' title={wc.capacity}>
        {wc.capacity}
      </div>
      <div className='listTable'>{wc.status ? 'Open' : 'Close'}</div>
      <div className='wc-edit'>
        <img onClick={() => setModalActive(true)} src={editIcon} alt='edit' />
        {modalActive && (
          <Modal active={modalActive} setActive={setModalActive}>
            <EditWorkCenter center={wc} setActive={setModalActive} />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default ItemWorkCenter;
