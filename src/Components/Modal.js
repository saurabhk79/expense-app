import React from "react";
import "../modal.css";

const ModalWrapper = ({ children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default ModalWrapper;
