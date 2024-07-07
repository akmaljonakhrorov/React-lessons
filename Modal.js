

// react functional component export
import React from 'react'
import '../components/Modal.css'

import ReactDOM from 'react-dom';
import './Modal.css'
function Modal({children, closeButton, isModeModal}) {
  return ReactDOM.createPortal((
      <div className='modal-backdrop'>
          <div className='modal' style={{
            border: '4px solid',
            borderColor: isModeModal ? 'yellowgreen' : 'red', // dinamik inline style berish 
            textAlign:'center'
          }}>
              {children}
              // dinamik korinishda className berish <br />
              <button className={isModeModal ? "modal-btn": ""} onClick={closeButton}>close</button>  
          </div>s
      </div>
    ), document.body)
}

export default Modal