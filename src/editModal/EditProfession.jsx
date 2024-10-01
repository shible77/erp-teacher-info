import React, { useState } from "react";
import "../css/Profile.css"; // Ensure you have the relevant styles
import axios from "axios";

const EditProfession = ({ data, teacherId, onClose, refreshData, session_token }) => {
  const [formData, setFormData] = useState({
    professional_experience_title: data.professional_experience_title || "",
    professional_experience_institution: data.professional_experience_institution || "",
    professional_experience_country: data.professional_experience_country || "",
    professional_experience_year: data.professional_experience_year || "",
    professional_experience_description: data.professional_experience_description || "",
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
        `http://localhost:5000/api/teacher/updateProfessionalExperience/${teacherId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${session_token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Professional experience updated successfully:", response.data);
        refreshData(); // Refresh data after update
        onClose(); // Close the modal after success
      }
    } catch (error) {
      console.error("Failed to update professional experience:", error);
      alert("An error occurred while updating professional experience. Please try again.");
      onClose(); // Close the modal after success
    }
  };

  return (
    <div className="modal-overlay">
      <div className="child_modal-container">
        <h2 className="modal-heading">Edit Professional Experience</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="modal-input">
            <label>Title</label>
            <input
              type="text"
              name="professional_experience_title"
              value={formData.professional_experience_title}
              onChange={handleChange}
              required
              disabled 
            />
          </div>

          <div className="modal-input">
            <label>Institution</label>
            <input
              type="text"
              name="professional_experience_institution"
              value={formData.professional_experience_institution}
              onChange={handleChange}
              required
            />
          </div>

          <div className="modal-input">
            <label>Country</label>
            <input
              type="text"
              name="professional_experience_country"
              value={formData.professional_experience_country}
              onChange={handleChange}
              required
            />
          </div>

          <div className="modal-input">
            <label>Year</label>
            <input
              type="number"
              name="professional_experience_year"
              value={formData.professional_experience_year}
              onChange={handleChange}
              required
              disabled 
            />
          </div>

          <div className="modal-input">
            <label>Description</label>
            <textarea
              name="professional_experience_description"
              value={formData.professional_experience_description}
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

export default EditProfession;
