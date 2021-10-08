import React, { useState } from 'react';
import Modal from './Modal.jsx';
import editIcon from '../../images/editIcon.svg';
import EditUser from './EditUser.jsx';

function ModalUser({ el }) {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={el.status ? 'wc-item' : 'wc-item close'} key={el.id}>
      <div className='wc-id' title={el.id}>
        {el.id}
      </div>
      <div className='listTable' title={el.lastname}>
        {el.lastname}
      </div>
      <div className='listTable' title={el.firstname}>
        {el.firstname}
      </div>
      <div className='listTableEmail' title={el.email}>
        {el.email}
      </div>
      <div className='listTable' title={el.workcenterid}>
        {el['Workcenter.name']}
      </div>
      <div className='listTable' title={el.workcenterid}>
        {el.jobtitle}
      </div>
      <div className='wc-edit'>
        <img onClick={() => setModalActive(true)} src={editIcon} alt='edit' />
        <Modal active={modalActive} setActive={setModalActive}>
          <EditUser user={el} setActive={setModalActive} />
        </Modal>
      </div>
    </div>
  );
}

export default ModalUser;
