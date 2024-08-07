import React, { useState, useEffect } from "react";
import "../css/Profile.css"; // Import CSS file for styling
import { FaSearch } from "react-icons/fa"; // Import the search icon
import { FaSquare } from "react-icons/fa";
import TeacherImage from "../resource/RudraSir.jpg";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ChildModal from "../modal/ChildModal"; // Import ChildModal component
import axios from "axios";
import { convertLength } from "@mui/material/styles/cssUtils";

function Profile() {
  const [activeContent, setActiveContent] = useState("bio");
  const [open, setOpen] = React.useState(false);
  const [teacherInfo, setTeacherInfo] = useState(null);
  const token = "465865fb-41af-11ef-bc14-3c5282764ceb";
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
                    <li key={index}>
                      <FaSquare className="bullet-icon" />
                      {edu.education_title}, {edu.education_institution},{" "}
                      {edu.education_country} ({edu.education_from_year}-
                      {edu.education_to_year})
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {teacherInfo && (
              <div className="subsub-content">
                <h2 className="section-heading">Professional Experience</h2>
                <div className="underline"></div>
                <ul className="education-list">
                  {teacherInfo.professional_experience.map((exp, index) => (
                    <li key={index}>
                      <FaSquare className="bullet-icon" />
                      {exp.professional_experience_title},{" "}
                      {exp.professional_experience_institution},{" "}
                      {exp.professional_experience_country} (
                      {exp.professional_experience_year}) -{" "}
                      {exp.professional_experience_description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {teacherInfo && (
              <div className="subsub-content">
                <h2 className="section-heading">Administrative Experience</h2>
                <div className="underline"></div>
                <ul className="education-list">
                  {teacherInfo.administrative_experience.map((exp, index) => (
                    <li key={index}>
                      <FaSquare className="bullet-icon" />
                      {exp.administrative_experinece_title},{" "}
                      {exp.administrative_experinece_institution}, (
                      {exp.administrative_experinece_year}) -{" "}
                      {exp.administrative_experinece_description}
                    </li>
                  ))}
                </ul>
              </div>
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
                    <li key={index}>
                      <FaSquare className="bullet-icon" />
                      <strong>{award.award_title}</strong>,{" "}
                      {award.award_institution} ({award.award_year}),{" "}
                      {award.award_country}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {teacherInfo && (
              <div className="subsub-content">
                <h2 className="section-heading">Scholarships & Fellowships</h2>
                <div className="underline"></div>
                <ul className="education-list">
                  {teacherInfo.scholarship_and_fellowship.map(
                    (scholarship, index) => (
                      <li key={index}>
                        <FaSquare className="bullet-icon" />
                        {scholarship.scholarship_title},{" "}
                        {scholarship.scholarship_institution},{" "}
                        {scholarship.scholarship_country} (
                        {scholarship.scholarship_from_year}-
                        {scholarship.scholarship_to_year}),{" "}
                        {scholarship.scholarship_degree}
                      </li>
                    )
                  )}
                </ul>
              </div>
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
                    <li key={index}>
                      <FaSquare className="bullet-icon" />
                      {accomplishment.acomplishment_title},{" "}
                      {accomplishment.acomplishment_field},{" "}
                      {accomplishment.acomplishment_organization} (
                      {accomplishment.acomplishment_year})
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {teacherInfo && (
              <div className="subsub-content">
                <h2 className="section-heading">Training & Certifications</h2>
                <div className="underline"></div>
                <ul className="education-list">
                  {teacherInfo.training_and_certification.map(
                    (training, index) => (
                      <li key={index}>
                        <FaSquare className="bullet-icon" />
                        {training.training_title}, {training.training_field} (
                        {training.training_year}), Duration:{" "}
                        {training.training_duration}
                      </li>
                    )
                  )}
                </ul>
              </div>
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
                    <li key={index}>
                      <FaSquare className="bullet-icon" />
                      <strong>{pub.publication_title}</strong>,{" "}
                      {pub.publication_field} ({pub.publication_year})
                      <br />
                      {pub.publication_description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {teacherInfo && (
              <div className="subsub-content">
                <h2 className="section-heading">Journals</h2>
                <div className="underline"></div>
                <ul className="education-list">
                  {teacherInfo.journal.map((journal, index) => (
                    <li key={index}>
                      <FaSquare className="bullet-icon" />
                      <h6>{journal.journal_title}</h6>
                      <p>
                        {journal.journal_type}; {journal.journal_year}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
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
          <div className="unilogo">CSECU</div>
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
        <img src={TeacherImage} alt="Faculty Member" />
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
            <div className="email">Email: rudra@cu.ac.bd</div>
          </div>
        )}
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
