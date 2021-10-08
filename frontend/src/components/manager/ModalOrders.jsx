import React, { useState } from 'react';
import Modal from '../admin/Modal.jsx';
import editIcon from '../../images/editIcon.svg';
import EditOrder from './EditOrder.jsx';
import PriorityText from './PriorityText.jsx';

function ModalOrders({ el }) {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={el.status ? 'wc-item' : 'wc-item close'} key={el.id}>
      <div className='wc-id'>{el.id}</div>
      <div className='listTable'>{el.itemname}</div>
      <div className='listTable'>{el.itempartnum}</div>
      <div className='listTable'>{el.number}</div>
      <div className='listTable' title={el.quantity}>
        {el.quantity}
      </div>
      <div className='listTable' title={el.promiseddate}>
        {el.promiseddate.split('T')[0]}
      </div>
      <div className='listTable' title={el.priority}>
        <PriorityText priorityNumber={el.priority} />
      </div>
      <div className='wc-edit'>
        <img onClick={() => setModalActive(true)} src={editIcon} alt='edit' />
        {modalActive && (
          <Modal active={modalActive} setActive={setModalActive}>
            <EditOrder order={el} setActive={setModalActive} />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default ModalOrders;
