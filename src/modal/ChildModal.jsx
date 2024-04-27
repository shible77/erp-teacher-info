import React, { useState } from "react";
import "../css/Profile.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import LargeIconButton from "../button/LargeIconButton"; // Import ChildModal component

function ChildModal() {
  const [openModals, setOpenModals] = useState(Array(18).fill(false));
  const [formData, setFormData] = useState(Array(18).fill({}));

  const modalContent = [
    {
      title: "Bio",
      heading:
        "Tell Us About Yourself: Your Professional Journey, Achievements, and Interests",
      fields: [{ label: "description", type: "text" }],
    },
    {
      title: "Education",
      heading: "Share Your Educational Journey and Academic Achievements",
      fields: [
        { label: "degree", type: "text" },
        { label: "institution", type: "text" },
        { label: "country", type: "text" },
        { label: "field", type: "text" },
        { label: "duration", type: "text" },
      ],
    },
    {
      title: "Professional Experience",
      heading:
        "Tell Us About Your Professional Experience and Career Highlights",
      fields: [
        { label: "designation", type: "text" },
        { label: "department", type: "text" },
        { label: "institution", type: "text" },
        { label: "country", type: "text" },
        { label: "duration", type: "text" },
        { label: "additional_info", type: "text" },
      ],
    },
    {
      title: "Administrative Experience",
      heading: "Share Your Administrative Experience and Leadership Roles",
      fields: [
        { label: "position", type: "text" },
        { label: "department", type: "text" },
        { label: "institution", type: "text" },
        { label: "country", type: "text" },
        { label: "duration", type: "text" },
        { label: "additional_info", type: "text" },
      ],
    },
    {
      title: "Experience on Social Welfare",
      heading:
        "Share Your Contributions to Social Welfare and Community Development",
      fields: [
        { label: "role", type: "text" },
        { label: "organization_name", type: "text" },
        { label: "institution_name", type: "text" },
        { label: "duration", type: "text" },
        { label: "activity", type: "text" },
        { label: "additional_info", type: "text" },
      ],
    },
    {
      title: "Areas of Interest",
      heading: "Tell Us About Your Areas of Interest and Expertise",
      fields: [
        { label: "area_of_interest", type: "text" },
        { label: "field", type: "text" },
        { label: "activity", type: "text" },
        { label: "additional_info", type: "text" },
      ],
    },
    {
      title: "Honors & Awards",
      heading:
        "Please Provide Details of Your Honors, Awards, and Recognitions",
      fields: [
        { label: "award_name", type: "text" },
        { label: "event_name", type: "text" },
        { label: "year", type: "text" },
        { label: "organization", type: "text" },
        { label: "category", type: "text" },
        { label: "additional_info", type: "text" },
      ],
    },
    {
      title: "Scholarships & Fellowships",
      heading: "Share Your Academic Achievements and Recognitions",
      fields: [
        { label: "scholarship_name", type: "text" },
        { label: "provider", type: "text" },
        { label: "duration", type: "text" },
        { label: "additional_info", type: "text" },
      ],
    },
    {
      title: "Professional Responsibilities",
      heading: "Outline Your Role and Contributions in Work Environments",
      fields: [
        { label: "responsibility", type: "text" },
        { label: "organization_name", type: "text" },
        { label: "duration", type: "text" },
        { label: "additional_info", type: "text" },
      ],
    },
    {
      title: "Academic Associative Membership",
      heading: "Detail Your Involvement in Academic Associations and Societies",
      fields: [
        { label: "membership_type", type: "text" },
        { label: "organization_name", type: "text" },
        { label: "duration", type: "text" },
        { label: "additional_info", type: "text" },
      ],
    },
    {
      title: "Skills",
      heading: "Outline Your Proficiencies and Competencies",
      fields: [
        { label: "skill_name", type: "text" },
        { label: "proficiency_level", type: "text" },
        { label: "years_of_experience", type: "text" },
        { label: "additional_info", type: "text" },
      ],
    },
    {
      title: "Taught Courses",
      heading: "Provide Details of Courses You Have Taught or Currently Teach",
      fields: [
        { label: "course_name", type: "text" },
        { label: "course_code", type: "text" },
        { label: "total_credit", type: "text" },
        { label: "duration", type: "text" },
        { label: "semester", type: "text" },
        { label: "session", type: "text" },
        { label: "instructor", type: "text" },
      ],
    },
    {
      title: "Languages",
      heading: "Specify Your Proficiency in Different Languages",
      fields: [
        { label: "language_name", type: "text" },
        { label: "proficiency_level", type: "text" },
        { label: "additional_info", type: "text" },
      ],
    },
    {
      title: "Projects",
      heading: "Describe Your Relevant Academic or Professional Projects",
      fields: [
        { label: "project_name", type: "text" },
        { label: "duration", type: "text" },
        { label: "short_description", type: "text" },
        { label: "project_link", type: "text" },
        { label: "additional_info", type: "text" },
      ],
    },
    {
      title: "Training & Certifications",
      heading: "List Your Training Programs and Certifications",
      fields: [
        { label: "training_name", type: "text" },
        { label: "provider", type: "text" },
        { label: "duration", type: "text" },
        { label: "certification_status", type: "text" },
        { label: "certification_date", type: "text" },
        { label: "additional_info", type: "text" },
      ],
    },
    {
      title: "Books",
      heading: "Books Authored or Contributed to",
      fields: [
        { label: "title", type: "text" },
        { label: "author", type: "text" },
        { label: "publisher", type: "text" },
        { label: "pages", type: "text" },
        { label: "publication_date", type: "text" },
        { label: "additional_info", type: "text" },
      ],
    },
    {
      title: "Journals",
      heading: "Publications in Peer-Reviewed Journals and Conferences",
      fields: [
        { label: "title", type: "text" },
        { label: "authors", type: "text" },
        { label: "journal", type: "text" },
        { label: "publisher", type: "text" },
        { label: "pages", type: "text" },
        { label: "publication_date", type: "text" },
        { label: "additional_info", type: "text" },
      ],
    },
    {
      title: "Conference & Research Seminar",
      heading: "Participation in Conferences and Research Seminars",
      fields: [
        { label: "title", type: "text" },
        { label: "authors", type: "text" },
        { label: "proceedings_title", type: "text" },
        { label: "year", type: "text" },
        { label: "publication_year", type: "text" },
        { label: "additional_info", type: "text" },
      ],
    },
  ];

  const handleOpenModal = (index) => {
    const updatedModals = [...openModals];
    updatedModals[index] = true;
    setOpenModals(updatedModals);
  };

  const handleCloseModal = (index) => {
    const updatedModals = [...openModals];
    updatedModals[index] = false;
    setOpenModals(updatedModals);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFormData = [...formData];
    updatedFormData[index] = { ...updatedFormData[index], [name]: value };
    setFormData(updatedFormData);
  };

  const handleSubmit = (index) => {
    // Handle form submission for each modal separately
    console.log("Form submitted for Modal", index + 1, ":", formData[index]);
    // Clear form data if needed
    const updatedFormData = [...formData];
    updatedFormData[index] = {};
    setFormData(updatedFormData);
    // Close the modal
    handleCloseModal(index);
  };

  return (
    <React.Fragment>
      {modalContent.map((modal, index) => (
        <Button
          key={index}
          onClick={() => handleOpenModal(index)}
          style={{ marginRight: "25px", marginBottom: "15px" }}
        >
          <LargeIconButton icon={<EditIcon />} text={modal.title} />
        </Button>
      ))}

      {modalContent.map((modal, index) => (
        <Modal
          key={index}
          open={openModals[index]}
          onClose={() => handleCloseModal(index)}
        >
          <Box className="child_modal-container">
            <h5 className="modal-heading">{modal.heading}</h5>
            <form className="modal-form">
              {modal.fields.map((field, fieldIndex) => (
                <div key={fieldIndex} className="modal-input">
                  <label>{field.label}: </label>
                  <input
                    type={field.type}
                    name={field.label}
                    value={formData[index][field.label] || ""}
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
              ))}
              <div className="modal_button-container">
                <Button
                  className="modal-button"
                  onClick={() => handleSubmit(index)}
                >
                  Submit
                </Button>
                <Button
                  className="modal-button"
                  onClick={() => handleCloseModal(index)}
                >
                  Close
                </Button>
              </div>
            </form>
          </Box>
        </Modal>
      ))}
    </React.Fragment>
  );
}

export default ChildModal;
