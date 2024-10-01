import React, { useState } from "react";
import "../css/Profile.css";
import axios from "axios";

const EditEducation = ({ data, userId, onClose, refreshData, session_token }) => {
  const [formData, setFormData] = useState({
    education_title: data.education_title || "",
    education_institution: data.education_institution || "",
    education_country: data.education_country || "",
    education_from_year: data.education_from_year || "",
    education_to_year: data.education_to_year || "",
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
    console.log("UserId:", userId);
    console.log("Session Token:", session_token);
    
    try {
      const response = await axios.put(
        `http://localhost:5000/api/teacher/updateEducation/${userId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${session_token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Education updated successfully:", response.data);
        refreshData(); // Call this to refresh the data after update
        onClose(); // Close the modal after success
      }
    } catch (error) {
      console.error("Failed to update education:", error);
      onClose(); // Close the modal after success
      alert("An error occurred while updating education. Please try again.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="child_modal-container">
        <h2 className="modal-heading">Edit Education</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="modal-input">
            <label>Title</label>
            <input
              type="text"
              name="education_title"
              value={formData.education_title}
              onChange={handleChange}
              required
              disabled 
            />
          </div>

          <div className="modal-input">
            <label>Institution</label>
            <input
              type="text"
              name="education_institution"
              value={formData.education_institution}
              onChange={handleChange}
              required
            />
          </div>

          <div className="modal-input">
            <label>Country</label>
            <input
              type="text"
              name="education_country"
              value={formData.education_country}
              onChange={handleChange}
              required
            />
          </div>

          <div className="modal-input">
            <label>From Year</label>
            <input
              type="number"
              name="education_from_year"
              value={formData.education_from_year}
              onChange={handleChange}
              required
              disabled 
            />
          </div>

          <div className="modal-input">
            <label>To Year</label>
            <input
              type="number"
              name="education_to_year"
              value={formData.education_to_year}
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

export default EditEducation;
