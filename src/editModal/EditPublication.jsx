import React, { useState } from "react";
import "../css/Profile.css"; // Ensure you have the relevant styles
import axios from "axios";

const EditPublication = ({ data, teacherId, onClose, refreshData, session_token }) => {
  const [formData, setFormData] = useState({
    publication_title: data.publication_title || "",
    publication_field: data.publication_field || "",
    publication_description: data.publication_description || "",
    publication_year: data.publication_year || "",
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
        `http://localhost:5000/api/teacher/updatePublication/${teacherId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${session_token}`,
          },
        }
      );

      if (response.status === 200) {
        //console.log("Publication updated successfully:", response.data);
        refreshData(); // Refresh data after update
        onClose(); // Close the modal after success
      }
    } catch (error) {
      console.error("Failed to update publication:", error);
      //alert("An error occurred while updating the publication. Please try again.");
      onClose(); // Close the modal after success
    }
  };

  return (
    <div className="modal-overlay">
      <div className="child_modal-container">
        <h2 className="modal-heading">Edit Publication</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="modal-input">
            <label>Title</label>
            <input
              type="text"
              name="publication_title"
              value={formData.publication_title}
              onChange={handleChange}
              required
              disabled 
            />
          </div>

          <div className="modal-input">
            <label>Field</label>
            <input
              type="text"
              name="publication_field"
              value={formData.publication_field}
              onChange={handleChange}
              required
            />
          </div>

          <div className="modal-input">
            <label>Description</label>
            <textarea
              name="publication_description"
              value={formData.publication_description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="modal-input">
            <label>Year</label>
            <input
              type="number"
              name="publication_year"
              value={formData.publication_year}
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

export default EditPublication;
