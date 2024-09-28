import React, { useState } from "react";
import "../css/UploadModal.css";
import axios from 'axios'

const DeleteModal = ({ show, onClose, flag, data, session_token }) => {
  

  if (!show) return null;


  const handleDeleteClick = () => {
   if(flag === 1){
    axios.delete('http://localhost:5000/api/teacher/deleteEducation',{
      headers : {
        Authorization : `Bearer ${session_token}`
      },
      params : {
        id: data.user_id,
        title: data.education_title,
        year: data.education_from_year,
      }
    }).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err.message)
    })
   }
   else if(flag === 2){
    axios.delete('http://localhost:5000/api/teacher/deleteProfessionalExperience',{
        headers : {
          Authorization : `Bearer ${session_token}`
        },
        params : {
          id: data.teacher_id,
          title: data.professional_experience_title,
          year: data.professional_experience_year,
        }
      }).then(res => {
          console.log(res.data)
      }).catch(err => {
          console.log(err.message)
      })
   }
   else if(flag === 3){
    axios.delete('http://localhost:5000/api/teacher/deleteAdministrativeExperience',{
        headers : {
          Authorization : `Bearer ${session_token}`
        },
        params : {
          id: data.teacher_id,
          title: data.administrative_experinece_title,
          year: data.administrative_experinece_year,
        }
      }).then(res => {
          console.log(res.data)
      }).catch(err => {
          console.log(err.message)
      })
   }
   else if( flag === 4){
    axios.delete('http://localhost:5000/api/teacher/deleteAward',{
        headers : {
          Authorization : `Bearer ${session_token}`
        },
        params : {
          id: data.teacher_id,
          title: data.award_title,
          year: data.award_year,
        }
      }).then(res => {
          console.log(res.data)
      }).catch(err => {
          console.log(err.message)
      })
   }
   else if(flag === 5){
    axios.delete('http://localhost:5000/api/teacher/deleteScholarshipAndFellowship',{
        headers : {
          Authorization : `Bearer ${session_token}`
        },
        params : {
          id: data.teacher_id,
          title: data.scholarship_title,
          year: data.scholarship_from_year,
        }
      }).then(res => {
          console.log(res.data)
      }).catch(err => {
          console.log(err.message)
      })
   }
   else if(flag === 6){
    axios.delete('http://localhost:5000/api/teacher/deleteAccomplishment',{
        headers : {
          Authorization : `Bearer ${session_token}`
        },
        params : {
          id: data.teacher_id,
          title: data.acomplishment_title
        }
      }).then(res => {
          console.log(res.data)
      }).catch(err => {
          console.log(err.message)
      })
   }
   else if(flag === 7){
    axios.delete('http://localhost:5000/api/teacher/deleteTrainingAndCertification',{
        headers : {
          Authorization : `Bearer ${session_token}`
        },
        params : {
          id: data.teacher_id,
          title: data.training_title,
          year: data.training_year
        }
      }).then(res => {
          console.log(res.data)
      }).catch(err => {
          console.log(err.message)
      })
   }
   else if(flag === 8){
    axios.delete('http://localhost:5000/api/teacher/deletePublication',{
        headers : {
          Authorization : `Bearer ${session_token}`
        },
        params : {
          id: data.teacher_id,
          title: data.publication_title,
          year: data.publication_year
        }
      }).then(res => {
          console.log(res.data)
      }).catch(err => {
          console.log(err.message)
      })
   }
   else if(flag === 9){
    axios.delete('http://localhost:5000/api/teacher/deleteJournal',{
        headers : {
          Authorization : `Bearer ${session_token}`
        },
        params : {
          id: data.teacher_id,
          title: data.journal_title,
          year: data.journal_year
        }
      }).then(res => {
          console.log(res.data)
      }).catch(err => {
          console.log(err.message)
      })
   }

   onClose()
  };

  const handleCancelClick = () => {
    onClose();
  };

  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Confirmation Needed</h2>
          <button onClick={handleCloseClick} className="close-button">&times;</button>
        </div>
        <div  className="modal-body">
          <h3>Are you sure to delete the field</h3>
        </div>
        <div className="modal-footer">
          <button className="cancel-button" onClick={handleCancelClick}>Cancel</button>
          <button className="upload-button" onClick={handleDeleteClick}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
