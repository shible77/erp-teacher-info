import React, { useState } from "react";
import "../css/Profile.css"; // Ensure you have the relevant styles
import axios from "axios";

const EditScholarship = ({ data, teacherId, onClose, refreshData, session_token }) => {
  const [formData, setFormData] = useState({
    scholarship_title: data.scholarship_title || "",
    scholarship_institution: data.scholarship_institution || "",
    scholarship_country: data.scholarship_country || "",
    scholarship_degree: data.scholarship_degree || "",
    scholarship_from_year: data.scholarship_from_year || "",
    scholarship_to_year: data.scholarship_to_year || "",
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
        `http://localhost:5000/api/teacher/updateScholarshipAndFellowship/${teacherId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${session_token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Scholarship updated successfully:", response.data);
        refreshData(); // Refresh data after update
        onClose(); // Close the modal after success
      }
    } catch (error) {
      console.error("Failed to update scholarship:", error);
      alert("An error occurred while updating the scholarship. Please try again.");
      onClose(); // Close the modal after success
    }
  };

  return (
    <div className="modal-overlay">
      <div className="child_modal-container">
        <h2 className="modal-heading">Edit Scholarship and Fellowship</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="modal-input">
            <label>Title</label>
            <input
              type="text"
              name="scholarship_title"
              value={formData.scholarship_title}
              onChange={handleChange}
              required
              disabled 
            />
          </div>

          <div className="modal-input">
            <label>Institution</label>
            <input
              type="text"
              name="scholarship_institution"
              value={formData.scholarship_institution}
              onChange={handleChange}
              required
            />
          </div>

          <div className="modal-input">
            <label>Country</label>
            <input
              type="text"
              name="scholarship_country"
              value={formData.scholarship_country}
              onChange={handleChange}
              required
            />
          </div>

          <div className="modal-input">
            <label>Degree</label>
            <input
              type="text"
              name="scholarship_degree"
              value={formData.scholarship_degree}
              onChange={handleChange}
              required
            />
          </div>

          <div className="modal-input">
            <label>From Year</label>
            <input
              type="number"
              name="scholarship_from_year"
              value={formData.scholarship_from_year}
              onChange={handleChange}
              required
              disabled 
            />
          </div>

          <div className="modal-input">
            <label>To Year</label>
            <input
              type="number"
              name="scholarship_to_year"
              value={formData.scholarship_to_year}
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

export default EditScholarship;
