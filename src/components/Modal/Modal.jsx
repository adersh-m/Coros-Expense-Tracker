import { useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useUser } from "../../context/UserContext";

const Modal = () => {
  const nameRef = useRef(null);
  const { user, updateUser, isModalOpen, closeModal } = useUser();

  useEffect(() => {
    if (isModalOpen) {
      nameRef.current.value = user?.name || '';
    }
  }, [isModalOpen, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value
    };
    updateUser(formData);
    closeModal();
  };

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, handleKeyDown]);

  if (!isModalOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-container">
        <div className="modal-header">
          <h3>Welcome</h3>
          <button onClick={closeModal} className="close-button" aria-label="Close modal">×</button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">What should we call you?</label>
              <input type="text" id="name" name="name" ref={nameRef} required />
            </div>
            <div className="modal-footer">
              <button type="button" onClick={closeModal}>Cancel</button>
              <button type="submit">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById('portal-root')
  );
};

export default Modal;
