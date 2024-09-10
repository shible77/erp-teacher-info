import React, { useState } from "react";
import "../css/Profile.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import LargeIconButton from "../button/LargeIconButton"; // Import ChildModal component
import axios from 'axios'


function ChildModal({ session_token, teacher_id, user_id }) {
  const [openModals, setOpenModals] = useState(Array(18).fill(false));
  const [formData, setFormData] = useState(Array(18).fill({}));
  

  const modalContent = [
   
    {
      title: "Education",
      heading: "Share Your Educational Journey and Academic Achievements",
      request: "Please enter the information carefully",
      fields: [
        { label: "education_title", type: "text" },
        { label: "education_institution", type: "text" },
        { label: "education_from_year", type: "text" },
        { label: "education_to_year", type: "text" },
        { label: "education_country", type: "text" },
      ],
    },
    {
      title: "Professional Experience",
      heading:
        "Tell Us About Your Professional Experience and Career Highlights",
        request: "Please enter the information carefully",
      fields: [
        { label: "professional_experience_title", type: "text" },
        { label: "professional_experience_institution", type: "text" },
        { label: "professional_experience_year", type: "text" },
        { label: "professional_experience_country", type: "text" },
        { label: "professional_experience_description", type: "text" },
      ],
    },
    {
      title: "Administrative Experience",
      heading: "Share Your Administrative Experience and Leadership Roles",
      request: "Please enter the information carefully",
      fields: [
        { label: "administrative_experinece_title", type: "text" },
        { label: "administrative_experinece_institution", type: "text" },
        { label: "administrative_experinece_year", type: "text" },
        { label: "administrative_experinece_description", type: "text" },
      ],
    },
    {
      title: "Honors & Awards",
      heading:
        "Please Provide Details of Your Honors, Awards, and Recognitions",
        request: "Please enter the information carefully",
      fields: [
        { label: "award_title", type: "text" },
        { label: "award_institution", type: "text" },
        { label: "award_year", type: "text" },
        { label: "award_country", type: "text" },
      ],
    },
    {
      title: "Scholarships & Fellowships",
      heading: "Share Your Academic Achievements and Recognitions",
      request: "Please enter the information carefully",
      fields: [
        { label: "scholarship_title", type: "text" },
        { label: "scholarship_institution", type: "text" },
        { label: "scholarship_from_year", type: "text" },
        { label: "scholarship_to_year", type: "text" },
        { label: "scholarship_country", type: "text" },
        { label: "scholarship_degree", type: "text" },
      ],
    },
    {
      title: "Training & Certifications",
      heading: "List Your Training Programs and Certifications",
      request: "Please enter the information carefully",
      fields: [
        { label: "training_title", type: "text" },
        { label: "training_field", type: "text" },
        { label: "training_year", type: "text" },
        { label: "training_duration", type: "text" },
      ],
    },
    {
      title: "Journals",
      heading: "Publications in Peer-Reviewed Journals and Conferences",
      request: "Please enter the information carefully",
      fields: [
        { label: "journal_title", type: "text" },
        { label: "journal_type", type: "text" },
        { label: "journal_year", type: "text" },
      ],
    },
    {
      title: "Publications",
      heading: "Different publications",
      request: "Please enter the information carefully",
      fields: [
        { label: "publication_title", type: "text" },
        { label: "publication_field", type: "text" },
        { label: "publication_year", type: "text" },
        { label: "publication_description", type: "text" },
      ],
    },
    {
      title: "Accomplishments",
      heading: "Different accomplishment",
      request: "Please enter the information carefully",
      fields: [
        { label: "acomplishment_title", type: "text" },
        { label: "acomplishment_field", type: "text" },
        { label: "acomplishment_year", type: "text" },
        { label: "acomplishment_organization", type: "text" },
      ],
    }
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
    let object = formData[index]
    if(index === 0){
      object.user_id = user_id 
      axios.post(`http://localhost:5000/api/teacher/addEducation/${user_id}`, object, {
        headers : {
          Authorization : `Bearer ${session_token}`
        }
      })
      .then(res => {
        console.log(res.data.message)
      })
      .catch(err => {
        console.log(err)
      })
    }
    else{
      object.teacher_id = teacher_id
      if( index === 1) {
        axios.post(`http://localhost:5000/api/teacher/addProfessionalExperience/${teacher_id}`, object, {
          headers : {
            Authorization : `Bearer ${session_token}`
          }
        })
        .then(res => {
          console.log(res.data.message)
        })
        .catch(err => {
          console.log(err)
        })
      }
      else if(index === 2){
        axios.post(`http://localhost:5000/api/teacher/addAdministrativeExperience/${teacher_id}`, object, {
          headers : {
            Authorization : `Bearer ${session_token}`
          }
        })
        .then(res => {
          console.log(res.data.message)
        })
        .catch(err => {
          console.log(err)
        })
      }
      else if(index === 3){
        axios.post(`http://localhost:5000/api/teacher/addAward/${teacher_id}`, object, {
          headers : {
            Authorization : `Bearer ${session_token}`
          }
        })
        .then(res => {
          console.log(res.data.message)
        })
        .catch(err => {
          console.log(err)
        })
      }
      else if(index === 4){
        axios.post(`http://localhost:5000/api/teacher/addScholarshipAndFellowship/${teacher_id}`, object, {
          headers : {
            Authorization : `Bearer ${session_token}`
          }
        })
        .then(res => {
          console.log(res.data.message)
        })
        .catch(err => {
          console.log(err)
        })
      }
      else if(index === 5){
        axios.post(`http://localhost:5000/api/teacher/addTrainingAndCertification/${teacher_id}`, object, {
          headers : {
            Authorization : `Bearer ${session_token}`
          }
        })
        .then(res => {
          console.log(res.data.message)
        })
        .catch(err => {
          console.log(err)
        })
      }
      else if(index === 6){
        axios.post(`http://localhost:5000/api/teacher/addJournal/${teacher_id}`, object, {
          headers : {
            Authorization : `Bearer ${session_token}`
          }
        })
        .then(res => {
          console.log(res.data.message)
        })
        .catch(err => {
          console.log(err)
        })
      }
      else if(index === 7){
        axios.post(`http://localhost:5000/api/teacher/addPublication/${teacher_id}`, object, {
          headers : {
            Authorization : `Bearer ${session_token}`
          }
        })
        .then(res => {
          console.log(res.data.message)
        })
        .catch(err => {
          console.log(err)
        })
      }
      else if(index === 8){
        axios.post(`http://localhost:5000/api/teacher/addAccomplishment/${teacher_id}`, object, {
          headers : {
            Authorization : `Bearer ${session_token}`
          }
        })
        .then(res => {
          console.log(res.data.message)
        })
        .catch(err => {
          console.log(err)
        })
      }
    }
   //Close the modal
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
            <h6 className="modal-heading">{modal.request}</h6>
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
