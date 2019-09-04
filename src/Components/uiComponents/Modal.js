import React from 'react';
import bin from '../../assets/i/bin.svg';


const Modal = (props) => {
  return (
    <div className={props.modal? "container __modal is-visible":"container __modal is-hidden"}>
      <div className="modal _msg">
        <img src={bin} alt={props.name} />
        <p>Post Successfully deleted</p>
      </div>
      <div className="modal _actions">
        <button className="btn pill delete _ghost" onClick={props.dismiss}>Undo</button>
        <button className="btn pill delete _solid" onClick={props.dismiss}>Dismiss</button>
      </div>
    </div>
  )
}

export default Modal;
