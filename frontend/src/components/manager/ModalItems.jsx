import React, { useState } from 'react';
import Modal from '../admin/Modal.jsx';
import editIcon from '../../images/editIcon.svg';
import EditItem from './EditItem.jsx';

function ModalItems({ el }) {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={el.status ? 'wc-item' : 'wc-item close'} key={el.id}>
      <div className='wc-id' title={el.id}>
        {el.id}
      </div>
      <div className='listTable' title={el.name}>
        {el.name}
      </div>
      <div className='listTable' title={el.partnumber}>
        {el.partnumber}
      </div>
      <div className='listTable' title={el.description}>
        {el.description}
      </div>
      <div className='wc-edit'>
        <img onClick={() => setModalActive(true)} src={editIcon} alt='edit' />
        {modalActive && (
          <Modal active={modalActive} setActive={setModalActive}>
            <EditItem item={el} setActive={setModalActive} />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default ModalItems;
