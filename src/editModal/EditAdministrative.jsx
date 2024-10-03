import React, { useState } from "react";
import "../css/Profile.css"; // Ensure you have the relevant styles
import axios from "axios";

const EditAdministrative = ({ data, teacherId, onClose, refreshData, session_token }) => {
  const [formData, setFormData] = useState({
    administrative_experinece_title: data.administrative_experinece_title || "",
    administrative_experinece_institution: data.administrative_experinece_institution || "",
    administrative_experinece_year: data.administrative_experinece_year || "",
    administrative_experinece_description: data.administrative_experinece_description || "",
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
        `http://localhost:5000/api/teacher/updateAdministrativeExperience/${teacherId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${session_token}`,
          },
        }
      );

      if (response.status === 200) {
        // console.log("Administrative experience updated successfully:", response.data);
        refreshData(); // Refresh data after update
        onClose(); // Close the modal after success
      }
    } catch (error) {
      console.error("Failed to update administrative experience:", error);
      // alert("An error occurred while updating administrative experience. Please try again.");
      onClose(); // Close the modal after success
    }
  };

  return (
    <div className="modal-overlay">
      <div className="child_modal-container">
        <h2 className="modal-heading">Edit Administrative Experience</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="modal-input">
            <label>Title</label>
            <input
              type="text"
              name="administrative_experinece_title"
              value={formData.administrative_experinece_title}
              onChange={handleChange}
              required
              disabled 
            />
          </div>

          <div className="modal-input">
            <label>Institution</label>
            <input
              type="text"
              name="administrative_experinece_institution"
              value={formData.administrative_experinece_institution}
              onChange={handleChange}
              required
            />
          </div>

          <div className="modal-input">
            <label>Year</label>
            <input
              type="number"
              name="administrative_experinece_year"
              value={formData.administrative_experinece_year}
              onChange={handleChange}
              required
              disabled 
            />
          </div>

          <div className="modal-input">
            <label>Description</label>
            <textarea
              name="administrative_experinece_description"
              value={formData.administrative_experinece_description}
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

export default EditAdministrative;
