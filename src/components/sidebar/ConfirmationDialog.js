// src/components/ConfirmationDialog.js
import React from 'react';
import "../../css/ConfirmationDialog.css";

const ConfirmationDialog = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <h5>Are you sure you want to delete this info? This action cannot be undone.</h5>
        <div className="dialog-footer">
          <button onClick={onClose} className="cancel-button">Cancel</button>
          <button onClick={onConfirm} className="confirm-button">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
