import './Modal.css';
import React from 'react';

function Modal({ active, setActive, children }) {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}>
      <div className='modal_content_wrapper' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
