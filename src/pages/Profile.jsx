import React, { useState, useEffect } from "react";
import "../css/Profile.css"; // Import CSS file for styling
import {
  FaSearch,
  FaSquare,
  FaCamera,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa"; // Import the search icon
import TeacherImage from "../resource/Rashed_sir.jpg";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ChildModal from "../modal/ChildModal"; // Import ChildModal component
import axios from "axios";
import UploadModal from "../modal/UploadModal";
import DeleteModal from "../modal/DeleteModal";
import ConfirmationDialog from "../components/sidebar/ConfirmationDialog";
import { convertLength } from "@mui/material/styles/cssUtils";
import EditEducationModal from "../editModal/EditEducation";
import EditProfessionalModal from "../editModal/EditProfession";
import EditAdministrativeModal from "../editModal/EditAdministrative";
import EditAwardModal from "../editModal/EditAward";
import EditScholarshipModal from "../editModal/EditScholarship";
import EditAccomplishmentModal from "../editModal/EditAccomplishment";
import EditTrainingModal from "../editModal/EditTraining";
import EditPublicationModal from "../editModal/EditPublication";
import EditJournalModal from "../editModal/EditJournal";

function Profile() {
  const [activeContent, setActiveContent] = useState("bio");
  const [open, setOpen] = React.useState(false);
  const [teacherInfo, setTeacherInfo] = useState(null);
  const token = "a1364cc9-7d52-11ef-ae14-3c5282764ceb";
  const [showModal, setShowModal] = useState(false);
  const [profileImage, setProfileImage] = useState(TeacherImage);
  const [data, setData] = useState(null);
  const [flag, setFlag] = useState(0);
  const [showDelModal, setShowDelModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentEditData, setCurrentEditData] = useState(null);
  const [editFlag, setEditFlag] = useState(null); // Tracks the flag to identify type of edit
  const [editUserId, setEditUserId] = useState(null); // Tracks the flag to identify type of edit
  const [editTeacherId, setEditTeacherId] = useState(null); // Tracks the flag to identify type of edit

  const myDelClick = (index, flag) => {
    setData(index);
    setFlag(flag);
    setShowDelModal(true);
  };

  const closeDelModal = () => {
    setShowDelModal(false);
  };

  
  //Handling teacher's information delete
  const [showDialog, setShowDialog] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleDeleteClick = () => {
    setShowDialog(true);
  };

  const handleConfirmDelete = () => {
    setShowDialog(false);
  };

  const handleCancelDelete = () => {
    setShowDialog(false);
  };

  // Handling teacher's profile picture upload
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleUpload = (file) => {
    // Here, you would handle the image upload logic (e.g., to a server or local state)
    const formData = new FormData();
    formData.append("image", file);

    axios
      .post("http://localhost:5000/api/upload/image", formData)
      .then((response) => {
        setProfileImage(`http://localhost:5000/${response.data.image.path}`);
        console.log(response.data);
        console.log(response.data.image.path);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // const imageUrl = URL.createObjectURL(file);
    // setProfileImage(imageUrl);
    handleCloseModal();
  };

  //Handling EDIT MY PROFILE modal
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleButtonClick = (content) => {
    setActiveContent(content);
  };
  const fetchData = () => {
    axios
      .get("http://localhost:5000/api/teacher/12345679", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTeacherInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (index, flag) => {
    let editData = null;

    if (flag === "education") {
      editData = teacherInfo.education[index];
    } 
    else if (flag === "professional_experience") {
      editData = teacherInfo.professional_experience[index];
    } else if (flag === "administrative_experience") {
      editData = teacherInfo.administrative_experience[index];
    }
    else if (flag === "award") {
      editData = teacherInfo.award[index];
    } else if (flag === "scholarship_and_fellowship") {
      editData = teacherInfo.scholarship_and_fellowship[index];
    }
    else if (flag === "accomplishment") {
      editData = teacherInfo.accomplishment[index];
    } else if (flag === "training_and_certification") {
      editData = teacherInfo.training_and_certification[index];
    }
    else if (flag === "publication") {
      editData = teacherInfo.publication[index];
    } else if (flag === "journal") {
      editData = teacherInfo.journal[index];
    }
    setEditTeacherId(teacherInfo.personal_info.teacher_id)
    setEditUserId(teacherInfo.personal_info.user_id)
    setCurrentEditData(editData); // Set the selected item data
    setEditFlag(flag); // Set the flag
    setShowEditModal(true); // Show the edit modal
  };

  // Function to close the modal
  const closeEditModal = () => {
    setShowEditModal(false);
    setCurrentEditData(null);
    setEditFlag(null);
  };


  // console.log(teacherInfo);
  const renderContent = () => {
    switch (activeContent) {
      case "bio":
        return (
          <div className="sub-content">
            <div className="subsub-content">
              <h2 className="section-heading">Bio</h2>
              <div className="underline"></div>
              <p className="bio-paragraph">
                Dr. Nath's research covers Big Data, Linked Data, Business
                Intelligence, Semantic Web, Semantic ETL, Data Science and
                Engineering, and Affective Computing. He has several
                publications in Q1/A* journal/conferences like Information
                Systems, TheWebConf (previously known as WWW), Semantic Web
                Journal, DOLAP (co-located with CIKM), etc. His Ph.D. thesis
                title is "Aspects of Semantic ETL", where they proposed and
                developed an ontology-based ETL tool that integrates semantic
                and non-semantic data into a semantic data warehouse and enables
                OLAP queries on it. As a person, he is disciplined,
                professional, honest, humble, and friendly. Hobby and Interest:
                Self Exploration/Discovery/Realization, Singing, Instrument
                Playing, Dancing (Mostly Latin American styles: Salsa, Bachata,
                Zouk, Kizomba, Cha cha cha, and contemporary), Karate, and
                Cooking.
              </p>
            </div>

            {teacherInfo && (
              <div className="subsub-content">
                <h2 className="section-heading">Education</h2>
                <div className="underline"></div>
                <ul className="education-list">
                  {teacherInfo.education.map((edu, index) => (
                    <li key={index} className="education-item">
                      <FaSquare className="bullet-icon" />
                      <span className="education-text">
                        {edu.education_title}, {edu.education_institution},{" "}
                        {edu.education_country} ({edu.education_from_year}-
                        {edu.education_to_year})
                      </span>
                      <span className="action-icons">
                        <FaEdit
                          className="edit-icon"
                          onClick={() => handleEdit(index, "education")}
                        />
                        <FaTrashAlt
                          className="delete-icon"
                          onClick={() => myDelClick(edu, 1)}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Confirmation Dialog */}
            <ConfirmationDialog
              show={showDialog}
              onClose={handleCancelDelete}
              onConfirm={handleConfirmDelete}
              flag={flag}
              data={data}
            />

            {/* Render Edit Modal for Education */}
            {showEditModal && editFlag === "education" && (
              <EditEducationModal data={currentEditData} onClose={closeEditModal} userId={editUserId} session_token={token}/>
            )}

            {teacherInfo && (
              <div className="subsub-content">
                <h2 className="section-heading">Professional Experience</h2>
                <div className="underline"></div>
                <ul className="education-list">
                  {teacherInfo.professional_experience.map((exp, index) => (
                    <li key={index} className="education-item">
                      <FaSquare className="bullet-icon" />
                      <span className="education-text">
                        {exp.professional_experience_title},{" "}
                        {exp.professional_experience_institution},{" "}
                        {exp.professional_experience_country} (
                        {exp.professional_experience_year}) -{" "}
                        {exp.professional_experience_description}
                      </span>
                      <span className="action-icons">
                        <FaEdit
                          className="edit-icon"
                          onClick={() => handleEdit(index, "professional_experience")}
                        />
                        <FaTrashAlt
                          className="delete-icon"
                          onClick={() => myDelClick(exp, 2)}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Confirmation Dialog */}
            <ConfirmationDialog
              show={showDialog}
              onClose={handleCancelDelete}
              onConfirm={handleConfirmDelete}
              flag={flag}
              data={data}
            />

            {showEditModal && editFlag === "professional_experience" && (
              <EditProfessionalModal data={currentEditData} onClose={closeEditModal} teacherId={editTeacherId} session_token={token}/>
            )}

            {teacherInfo && (
              <div className="subsub-content">
                <h2 className="section-heading">Administrative Experience</h2>
                <div className="underline"></div>
                <ul className="education-list">
                  {teacherInfo.administrative_experience.map((exp, index) => (
                    <li key={index} className="education-item">
                      <FaSquare className="bullet-icon" />
                      <span className="education-text">
                        {exp.administrative_experinece_title},{" "}
                        {exp.administrative_experinece_institution}, (
                        {exp.administrative_experinece_year}) -{" "}
                        {exp.administrative_experinece_description}
                      </span>
                      <span className="action-icons">
                        <FaEdit
                          className="edit-icon"
                          onClick={() => handleEdit(index, "administrative_experience")}
                        />
                        <FaTrashAlt
                          className="delete-icon"
                          onClick={() => myDelClick(exp, 3)}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Confirmation Dialog */}
            <ConfirmationDialog
              show={showDialog}
              onClose={handleCancelDelete}
              onConfirm={handleConfirmDelete}
              flag={flag}
              data={data}
            />
            {showEditModal && editFlag === "administrative_experience" && (
              <EditAdministrativeModal data={currentEditData} onClose={closeEditModal} teacherId={editTeacherId} session_token={token}/>
            )}

            <div className="subsub-content">
              <h2 className="section-heading">Experience on Social Welfare</h2>
              <div className="underline"></div>
              <ul className="education-list">
                <li>
                  <FaSquare className="bullet-icon" />
                  Secretary, Fellow Foundation, University of Chittagong (Feb
                  2016 - Present)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Chief Advisor, Vaccine Care, Mehedibag, Chittagong (Feb 2018 -
                  Present)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Elected Member, Chittagong University Teachers Association
                  (CUTA), University of Chittagong (Dec 2018 - Dec 2019)
                </li>
              </ul>
            </div>
          </div>
        );
      case "research":
        return (
          <div className="sub-content">
            <div className="subsub-content">
              <h2 className="section-heading">Areas of Interest</h2>
              <div className="underline"></div>
              <ul className="education-list">
                <li>
                  <FaSquare className="bullet-icon" />
                  Semantic Web
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Exploratory Business Intelligence
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Affective Computing
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Big Data modeling and analytics
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Life Cycle Assessment (LCA) Data analysis
                </li>
              </ul>
            </div>
            {teacherInfo && (
              <div className="subsub-content">
                <h2 className="section-heading">Honors & Awards</h2>
                <div className="underline"></div>
                <ul className="education-list">
                  {teacherInfo.award.map((award, index) => (
                    <li key={index} className="education-item">
                      <FaSquare className="bullet-icon" />
                      <span className="education-text">
                        <strong>{award.award_title}</strong>,{" "}
                        {award.award_institution} ({award.award_year}),{" "}
                        {award.award_country}
                      </span>
                      <span className="action-icons">
                        <FaEdit
                          className="edit-icon"
                          onClick={() => handleEdit(index, "award")}
                        />
                        <FaTrashAlt
                          className="delete-icon"
                          onClick={() => myDelClick(award, 4)}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Confirmation Dialog */}
            <ConfirmationDialog
              show={showDialog}
              onClose={handleCancelDelete}
              onConfirm={handleConfirmDelete}
              flag={flag}
              data={data}
            />
            {showEditModal && editFlag === "award" && (
              <EditAwardModal data={currentEditData} onClose={closeEditModal} teacherId={editTeacherId} session_token={token}/>
            )}

            {teacherInfo && (
              <div className="subsub-content">
                <h2 className="section-heading">Scholarships & Fellowships</h2>
                <div className="underline"></div>
                <ul className="education-list">
                  {teacherInfo.scholarship_and_fellowship.map(
                    (scholarship, index) => (
                      <li key={index} className="education-item">
                        <FaSquare className="bullet-icon" />
                        <span className="education-text">
                          {scholarship.scholarship_title},{" "}
                          {scholarship.scholarship_institution},{" "}
                          {scholarship.scholarship_country} (
                          {scholarship.scholarship_from_year}-
                          {scholarship.scholarship_to_year}),{" "}
                          {scholarship.scholarship_degree}
                        </span>
                        <span className="action-icons">
                          <FaEdit
                            className="edit-icon"
                            onClick={() => handleEdit(index, "scholarship_and_fellowship")}
                          />
                          <FaTrashAlt
                            className="delete-icon"
                            onClick={() => myDelClick(scholarship, 5)}
                          />
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
            {/* Confirmation Dialog */}
            <ConfirmationDialog
              show={showDialog}
              onClose={handleCancelDelete}
              onConfirm={handleConfirmDelete}
              flag={flag}
              data={data}
            />
            {showEditModal && editFlag === "scholarship_and_fellowship" && (
              <EditScholarshipModal data={currentEditData} onClose={closeEditModal} teacherId={editTeacherId} session_token={token}/>
            )}

            <div className="subsub-content">
              <h2 className="section-heading">Professional Responsibilities</h2>
              <div className="underline"></div>
              <ul className="education-list">
                <li>
                  <FaSquare className="bullet-icon" />
                  Reviewer, IJACSA(International Journal of Advanced Computer
                  Science and Applications) (2019-Present)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Reviewer, IJISA(International Journal of Intelligent Systems
                  and Applications) (2019-Present)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Reviewer, IJACSA(International Journal of Advanced Computer
                  Science and Applications) (2019-Present)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Reviewer, IJISA(International Journal of Intelligent Systems
                  and Applications) (2019-Present)
                </li>
              </ul>
            </div>
            <div className="subsub-content">
              <h2 className="section-heading">
                Academic Associative Membership
              </h2>
              <div className="underline"></div>
              <ul className="education-list">
                <li>
                  <FaSquare className="bullet-icon" />
                  IEEE Professional Member (Lifetime Member)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  IEEE Professional Member (Lifetime Member)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  IEEE Professional Member (Lifetime Member)
                </li>
              </ul>
            </div>
            <div className="subsub-content">
              <h2 className="section-heading">Skills</h2>
              <div className="underline"></div>
              <ul className="education-list">
                <li>
                  <FaSquare className="bullet-icon" />
                  LabView
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  OPNET, WireShark
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  NetBeans
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  MEGA (Zachman Framework), IBM Rationale Rhapsody
                </li>
              </ul>
            </div>
          </div>
        );
      case "teaching":
        return (
          <div className="sub-content">
            <div className="subsub-content">
              <h2 className="section-heading">Taught Courses</h2>
              <div className="underline"></div>
              <ul className="education-list">
                <li>
                  <FaSquare className="bullet-icon" />
                  <h6>Database Management System (CSE-411)</h6>
                  4th Semester
                  <br />
                  (January 2023-June 2023)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  <h6>Object Oriented Programming (CSE-311)</h6>
                  3th Semester
                  <br />
                  (May 2022-September 2022)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  <h6>Theory of Computation (CSE-611)</h6>
                  6th Semester
                  <br />
                  (July 2023-November 2023)
                </li>
              </ul>
            </div>
            <div className="subsub-content">
              <h2 className="section-heading">Languages</h2>
              <div className="underline"></div>
              <ul className="education-list">
                <li>
                  <FaSquare className="bullet-icon" />
                  Japanese, Limited Working Proficiency
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  French, Elementary Proficiency
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  English, Full Professional Proficiency
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Bangla, Native or Bilingual Proficiency
                </li>
              </ul>
            </div>
          </div>
        );
      case "acomplishments":
        return (
          <div className="sub-content">
            {teacherInfo && (
              <div className="subsub-content">
                <h2 className="section-heading">Accomplishments</h2>
                <div className="underline"></div>
                <ul className="education-list">
                  {teacherInfo.accomplishment.map((accomplishment, index) => (
                    <li key={index} className="education-item">
                      <FaSquare className="bullet-icon" />
                      <span className="education-text">
                        {accomplishment.acomplishment_title},{" "}
                        {accomplishment.acomplishment_field},{" "}
                        {accomplishment.acomplishment_organization} (
                        {accomplishment.acomplishment_year})
                      </span>
                      <span className="action-icons">
                        <FaEdit
                          className="edit-icon"
                          onClick={() => handleEdit(index, "accomplishment")}
                        />
                        <FaTrashAlt
                          className="delete-icon"
                          onClick={() => myDelClick(accomplishment, 6)}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Confirmation Dialog */}
            <ConfirmationDialog
              show={showDialog}
              onClose={handleCancelDelete}
              onConfirm={handleConfirmDelete}
              flag={flag}
              data={data}
            />
            {showEditModal && editFlag === "accomplishment" && (
              <EditAccomplishmentModal data={currentEditData} onClose={closeEditModal} teacherId={editTeacherId} session_token={token}/>
            )}

            {teacherInfo && (
              <div className="subsub-content">
                <h2 className="section-heading">Training & Certifications</h2>
                <div className="underline"></div>
                <ul className="education-list">
                  {teacherInfo.training_and_certification.map(
                    (training, index) => (
                      <li key={index} className="education-item">
                        <FaSquare className="bullet-icon" />
                        <span className="education-text">
                          {training.training_title}, {training.training_field} (
                          {training.training_year}), Duration:{" "}
                          {training.training_duration}
                        </span>
                        <span className="action-icons">
                          <FaEdit
                            className="edit-icon"
                            onClick={() => handleEdit(index, "training_and_certification")}
                          />
                          <FaTrashAlt
                            className="delete-icon"
                            onClick={() => myDelClick(training, 7)}
                          />
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
            {/* Confirmation Dialog */}
            <ConfirmationDialog
              show={showDialog}
              onClose={handleCancelDelete}
              onConfirm={handleConfirmDelete}
              flag={flag}
              data={data}
            />
            {showEditModal && editFlag === "training_and_certification" && (
              <EditTrainingModal data={currentEditData} onClose={closeEditModal} teacherId={editTeacherId} session_token={token}/>
            )}
          </div>
        );
      case "publications":
        return (
          <div className="sub-content">
            {teacherInfo && (
              <div className="subsub-content">
                <h2 className="section-heading">Publications</h2>
                <div className="underline"></div>
                <ul className="education-list">
                  {teacherInfo.publication.map((pub, index) => (
                    <li key={index} className="education-item">
                      <FaSquare className="bullet-icon" />
                      <span className="education-text">
                        <strong>{pub.publication_title}</strong>,{" "}
                        {pub.publication_field} ({pub.publication_year})
                        <br />
                        {pub.publication_description}
                      </span>
                      <span className="action-icons">
                        <FaEdit
                          className="edit-icon"
                          onClick={() => handleEdit(index, "publication")}
                        />
                        <FaTrashAlt
                          className="delete-icon"
                          onClick={() => myDelClick(pub, 8)}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Confirmation Dialog */}
            <ConfirmationDialog
              show={showDialog}
              onClose={handleCancelDelete}
              onConfirm={handleConfirmDelete}
              flag={flag}
              data={data}
            />
            {showEditModal && editFlag === "publication" && (
              <EditPublicationModal data={currentEditData} onClose={closeEditModal} teacherId={editTeacherId} session_token={token}/>
            )}

            {teacherInfo && (
              <div className="subsub-content">
                <h2 className="section-heading">Journals</h2>
                <div className="underline"></div>
                <ul className="education-list">
                  {teacherInfo.journal.map((journal, index) => (
                    <li key={index} className="education-item">
                      <FaSquare className="bullet-icon" />
                      <span className="education-text">
                        <h6>{journal.journal_title}</h6>
                        <p>
                          {journal.journal_type}; {journal.journal_year}
                        </p>
                      </span>
                      <span className="action-icons">
                        <FaEdit
                          className="edit-icon"
                          onClick={() => handleEdit(index, "journal")}
                        />
                        <FaTrashAlt
                          className="delete-icon"
                          onClick={() => myDelClick(journal, 9)}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Confirmation Dialog */}
            <ConfirmationDialog
              show={showDialog}
              onClose={handleCancelDelete}
              onConfirm={handleConfirmDelete}
              flag={flag}
              data={data}
            />
            {showEditModal && editFlag === "journal" && (
              <EditJournalModal data={currentEditData} onClose={closeEditModal} teacherId={editTeacherId} session_token={token}/>
            )}

            <div className="subsub-content">
              <h2 className="section-heading">Conference & Research Seminar</h2>
              <div className="underline"></div>
              <ul className="education-list">
                <li>
                  <FaSquare className="bullet-icon" />
                  <a href="#" className="project-heading">
                    <h6>
                      Towards a programmable semantic extract-transform-load
                      framework for semantic data warehouses
                    </h6>
                  </a>
                  RP Deb Nath, K Hose, TB Pedersen
                  <br />
                  Proceedings of the ACM Eighteenth International Workshop on
                  Data Warehousing …, 2015;
                  <br />
                  2015
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  <a href="#" className="project-heading">
                    <h6>
                      Introducing Active Learning on Text to Emotion Analyzer
                    </h6>
                  </a>
                  Mahim ul Asad, Nadia Sabrin, Lily Chowdhury, Rudra Pratap Deb
                  Nath, Anwarul Azim
                  <br />
                  17th International Conference on Computer and Information
                  Technology, 2014;
                  <br />
                  2014
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  <a href="#" className="project-heading">
                    <h6>
                      An Efficient and Scalable Approach for Ontology Instance
                      Matching.s
                    </h6>
                  </a>
                  RPD Nath, MH Seddiqui, M Aono
                  <br />
                  JCP 9 (8), 1755-1768, 2014;
                  <br />
                  2014
                </li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="continer">
      <div className="header">
        <div className="left-container">
          <div className="unilogo">CU</div>
          <div className="separator"></div>
          <div className="header-text">PROFILES</div>
        </div>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search by name, email, work phone..."
          />
          <button className="search-button">
            {/* Add your search icon here */}
            <FaSearch className="search-icon" />
          </button>
        </div>
        <div className="edit-profile">
          <a href="#" className="edit-profile-link" onClick={handleOpen}>
            EDIT MY PROFILE
          </a>
          <Modal open={open} onClose={handleClose}>
            <Box className="parent_modal-container">
              <h2 className="parent_modal-heading">
                Update Your Profile Information
              </h2>
              <p className="parent_modal-description">
                We kindly request you to enter a link below to edit the
                information.
              </p>
              {teacherInfo !== null && (
                <ChildModal
                  session_token={token}
                  teacher_id={teacherInfo.personal_info.teacher_id}
                  user_id={teacherInfo.personal_info.user_id}
                />
              )}
            </Box>
          </Modal>
        </div>
      </div>
      <div className="blur-background">
        <div className="profile-pic-container">
          <img
            src={profileImage}
            alt="Faculty Member"
            className="profile-pic"
          />
          <button className="upload-buttons" onClick={handleOpenModal}>
            <i className="camera-icon">📷</i>
          </button>
        </div>
        {teacherInfo && (
          <div className="info-container">
            <div className="teacherName">
              {teacherInfo.personal_info.first_name}{" "}
              {teacherInfo.personal_info.last_name}
            </div>
            <div className="designation">
              {teacherInfo.personal_info.designation} of Computer Science and
              Engineering, University of Chittagong
            </div>
            <div className="email">
              Email: {teacherInfo.personal_info.email}
            </div>
          </div>
        )}
        <UploadModal
          show={showModal}
          onClose={handleCloseModal}
          onUpload={handleUpload}
        />
        <DeleteModal
          show={showDelModal}
          onClose={closeDelModal}
          flag={flag}
          data={data}
          session_token={token}
        />
      </div>
      <div className="content-container">
        <div className="button-container">
          <button
            className={`content-button ${activeContent === "bio" && "active"}`}
            onClick={() => handleButtonClick("bio")}
          >
            BIO
          </button>
          <button
            className={`content-button ${
              activeContent === "research" && "active"
            }`}
            onClick={() => handleButtonClick("research")}
          >
            RESEARCH & SCHOLARSHIP
          </button>
          <button
            className={`content-button ${
              activeContent === "teaching" && "active"
            }`}
            onClick={() => handleButtonClick("teaching")}
          >
            TEACHING
          </button>
          <button
            className={`content-button ${
              activeContent === "acomplishments" && "active"
            }`}
            onClick={() => handleButtonClick("acomplishments")}
          >
            ACCOMPLISHMENTS
          </button>
          <button
            className={`content-button ${
              activeContent === "publications" && "active"
            }`}
            onClick={() => handleButtonClick("publications")}
          >
            PUBLICATIONS
          </button>
        </div>
        <div className="main-content">{renderContent()}</div>
      </div>
    </div>
  );
}

export default Profile;
