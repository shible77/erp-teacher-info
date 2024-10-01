import React, { useState } from "react";
import "../css/Profile.css"; // Ensure you have the relevant styles
import axios from "axios";

const EditAccomplishment = ({ data, teacherId, onClose, refreshData, session_token }) => {
  const [formData, setFormData] = useState({
    acomplishment_title: data.acomplishment_title || "",
    acomplishment_organization: data.acomplishment_organization || "",
    acomplishment_field: data.acomplishment_field || "",
    acomplishment_year: data.acomplishment_year || "",
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
    console.log("Submitting form with data:", formData);
    console.log("TeacherId:", teacherId);
    console.log("Session Token:", session_token);

    try {
      const response = await axios.put(
        `http://localhost:5000/api/teacher/updateAccomplishment/${teacherId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${session_token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Accomplishment updated successfully:", response.data);
        refreshData(); // Refresh data after update
        onClose(); // Close the modal after success
      }
    } catch (error) {
      console.error("Failed to update accomplishment:", error);
      alert("An error occurred while updating the accomplishment. Please try again.");
      onClose(); // Close the modal after success
    }
  };

  return (
    <div className="modal-overlay">
      <div className="child_modal-container">
        <h2 className="modal-heading">Edit Accomplishment</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="modal-input">
            <label>Title</label>
            <input
              type="text"
              name="acomplishment_title"
              value={formData.acomplishment_title}
              onChange={handleChange}
              required
              disabled 
            />
          </div>

          <div className="modal-input">
            <label>Organization</label>
            <input
              type="text"
              name="acomplishment_organization"
              value={formData.acomplishment_organization}
              onChange={handleChange}
              required
            />
          </div>

          <div className="modal-input">
            <label>Field</label>
            <input
              type="text"
              name="acomplishment_field"
              value={formData.acomplishment_field}
              onChange={handleChange}
              required
            />
          </div>

          <div className="modal-input">
            <label>Year</label>
            <input
              type="number"
              name="acomplishment_year"
              value={formData.acomplishment_year}
              onChange={handleChange}
              required
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

export default EditAccomplishment;
