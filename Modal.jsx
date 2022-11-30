import "./Modal.css"

function Modal({modal__title, option, option1}) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{modal__title}</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel" onClick={option}>Cancel</button>
          <button className="btn" onClick={option1}>Confirm</button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;