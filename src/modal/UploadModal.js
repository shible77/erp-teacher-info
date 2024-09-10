import React, { useState, useCallback } from "react";
import "../css/UploadModal.css";

const UploadModal = ({ show, onClose, onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewSrc, setPreviewSrc] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  if (!show) return null;

  const handleFileChange = (file) => {
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);
    const file = event.dataTransfer.files[0];
    handleFileChange(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleUploadClick = () => {
    if (selectedFile) {
      onUpload(selectedFile);
      resetState();
      onClose();
    }
  };

  const handleCancelClick = () => {
    resetState();
    onClose();
  };

  const handleCloseClick = () => {
    resetState();
    onClose();
  };

  const resetState = () => {
    setSelectedFile(null);
    setPreviewSrc(null);
    setIsDragOver(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Upload Profile Picture</h2>
          <button onClick={handleCloseClick} className="close-button">&times;</button>
        </div>
        <div 
          className="modal-body"
          onDrop={handleFileDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <div className={`upload-options ${isDragOver ? 'drag-over' : ''}`}>
            <label className="upload-option">
              <input type="file" onChange={(e) => handleFileChange(e.target.files[0])} />
              Select from your computer
            </label>
            <div className={`drag-drop-area ${isDragOver ? 'drag-over' : ''}`}>
              Drag and drop your picture here
            </div>
            {previewSrc && (
              <div className="image-preview">
                <img src={previewSrc} alt="Selected Preview" />
              </div>
            )}
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={handleCancelClick} className="cancel-button">Cancel</button>
          <button onClick={handleUploadClick} className="upload-button">Upload</button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
