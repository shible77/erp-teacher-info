import React, { useState } from "react";
import "../css/Profile.css"; // Ensure you have the relevant styles
import axios from "axios";

const EditJournal = ({ data, teacherId, onClose, refreshData, session_token }) => {
  const [formData, setFormData] = useState({
    journal_title: data.journal_title || "",
    journal_type: data.journal_type || "",
    journal_year: data.journal_year || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log("Submitting form with data:", formData);
    //console.log("TeacherId:", teacherId);
    //console.log("Session Token:", session_token);

    try {
      const response = await axios.put(
        `http://localhost:5000/api/teacher/updateJournal/${teacherId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${session_token}`,
          },
        }
      );

      if (response.status === 200) {
        //console.log("Journal updated successfully:", response.data);
        refreshData(); // Refresh data after update
        onClose(); // Close the modal after success
      }
    } catch (error) {
      console.error("Failed to update journal:", error);
      //alert("An error occurred while updating the journal. Please try again.");
      onClose(); // Close the modal after success
    }
  };

  return (
    <div className="modal-overlay">
      <div className="child_modal-container">
        <h2 className="modal-heading">Edit Journal</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="modal-input">
            <label>Title</label>
            <input
              type="text"
              name="journal_title"
              value={formData.journal_title}
              onChange={handleChange}
              required
              disabled 
            />
          </div>

          <div className="modal-input">
            <label>Type</label>
            <input
              type="text"
              name="journal_type"
              value={formData.journal_type}
              onChange={handleChange}
              required
            />
          </div>

          <div className="modal-input">
            <label>Year</label>
            <input
              type="number"
              name="journal_year"
              value={formData.journal_year}
              onChange={handleChange}
              required
              disabled 
            />
          </div>

          <div className="modal_button-container">
            <button type="submit" className="modal-button">
              Save
            </button>
            <button
              type="button"
              className="modal-button"
              onClick={onClose}
              style={{ backgroundColor: "#dc3545" }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditJournal;
