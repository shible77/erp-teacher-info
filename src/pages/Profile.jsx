import React, { useState } from "react";
import "../css/Profile.css"; // Import CSS file for styling
import { FaSearch } from "react-icons/fa"; // Import the search icon
import { FaSquare } from "react-icons/fa";
import TeacherImage from "../resource/RudraSir.jpg";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ChildModal from "../modal/ChildModal"; // Import ChildModal component

function Profile() {
  const [activeContent, setActiveContent] = useState("bio");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleButtonClick = (content) => {
    setActiveContent(content);
  };

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
            <div className="subsub-content">
              <h2 className="section-heading">Education</h2>
              <div className="underline"></div>
              <ul className="education-list">
                <li>
                  <FaSquare className="bullet-icon" />
                  PhD, Aalborg University, Denmark, Computer Science (2015-2020)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Doctor, Universitat Politècnica de Catalunya, Spain,
                  Departament d'Enginyeria de Serveis i Sistemes d'Informació.
                  ESSI, (2016-2019)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Master of Engineering, Toyohashi University of Technology,
                  Japan, Department of Computer Science and Engineering
                  (2010-2012)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Bachelor in Computer Science, University of Chittagong,
                  Bangladesh, Department of Computer Science and Engineering
                  (2010)
                </li>
              </ul>
            </div>
            <div className="subsub-content">
              <h2 className="section-heading">Professional Experience</h2>
              <div className="underline"></div>
              <ul className="education-list">
                <li>
                  <FaSquare className="bullet-icon" />
                  Associate Professor, Department of Computer Science and
                  Engineering, University of Chittagong, Bangladesh
                  (2021-Present)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Assistant Professor, Department of Computer Science and
                  Engineering, University of Chittagong, Bangladesh (2014-2021)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  PhD Employee, Aalborg University, Denmark (2015-2020)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Scientific Assistant, Aalborg University (2019-2020)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Lecturer, Department of Computer Science and Engineering,
                  University of Chittagong, Bangladesh (2013-2014)
                </li>
              </ul>
            </div>
            <div className="subsub-content">
              <h2 className="section-heading">Administrative Experience</h2>
              <div className="underline"></div>
              <ul className="education-list">
                <li>
                  <FaSquare className="bullet-icon" />
                  Assistant Director, ICT Cell, University of Chittagong,
                  Bangladesh (2020-2022)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Member, Research and Publication Cell, University of
                  Chittagong, Bangladesh (2022-Present)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Member, Innovation team, University of Chittagong,
                  Bangladesh (2021-2023)
                </li>
              </ul>
            </div>
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
            <div className="subsub-content">
              <h2 className="section-heading">Honors & Awards</h2>
              <div className="underline"></div>
              <ul className="education-list">
                <li>
                  <FaSquare className="bullet-icon" />
                  IEEE Best Paper Award (ICCIT 2014) (2014)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Best Paper Award, ACM Eighteenth International Workshop on
                  Data Warehousing and OLAP (2015)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  IEEE Best Paper Award (ICCIT 2014) (2014)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Best Paper Award, ACM Eighteenth International Workshop on
                  Data Warehousing and OLAP (2015)
                </li>
              </ul>
            </div>
            <div className="subsub-content">
              <h2 className="section-heading">Scholarships & Fellowships</h2>
              <div className="underline"></div>
              <ul className="education-list">
                <li>
                  <FaSquare className="bullet-icon" />
                  Erasmus Mundus scholarship for PhD, European Union (September
                  2014)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Japanese Government Scholarship for Master of Engineering,
                  MEXT (September 2010)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Erasmus Mundus scholarship for PhD, European Union (September
                  2014)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Japanese Government Scholarship for Master of Engineering,
                  MEXT (September 2010)
                </li>
              </ul>
            </div>
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
            <div className="subsub-content">
              <h2 className="section-heading">Projects</h2>
              <div className="underline"></div>
              <ul className="education-list">
                <li style={{ marginBottom: "10px" }}>
                  <FaSquare className="bullet-icon" />
                  Data Integration and ETL for Semantic Data (Jan 2015 - Oct
                  2020). In recent years, more and more semantic data has become
                  freely available on the Web; websites are annotated with RDF
                  markup, data collections are offered for download, and even
                  interfaces for structured queries over such data can be used
                  free of charge. One of the reasons why semantic data has
                  become so successful is that publishing and making the data
                  available is low effort and does not rely on a sophisticated
                  schema. Instead, various standard ontologies and self‐defined
                  extensions can be used. Being an advantage of the Semantic Web
                  paradigm that the data format is highly flexible, this is a
                  disadvantage during the ETL process where the schema plays an
                  important role. In addition, the schema of semantic data is
                  often not known before but encoded as part of the data set
                  itself. Furthermore, many sources have been automatically
                  generated by converting other data formats into RDF or by
                  information extraction techniques, and hence yield errors.
                  Thus, in addition to the heterogeneities that ETL for
                  traditional data has to deal with, additional challenges arise
                  for semantic data, especially regarding cleansing and
                  duplicate detection. The aim of this topic is to develop an
                  approach that enables the ETL process for semantic data
                  despite the above mentioned problems by (1) developing
                  scalable data integration techniques that can handle multiple
                  semantic data sources, (2) implementing an appropriate
                  environment to facilitate the ETL process, and (3) evaluating
                  the proposed solutions. Here is the project link:
                  https://it4bi-dc.ulb.ac.be/node/313
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <FaSquare className="bullet-icon" />
                  Open Data for Sustainability Assessment (Jul 2020 - Present).
                  The potential of the semantic versions of life cycle
                  assessment data Sustainability Assessment in the form of Life
                  Cycle Assessment (LCA) is essential for European research and
                  technology development, SDG-assessment, but existing data is
                  difficult to establish and obsolete quickly. The ODA project
                  creates and demonstrates the concept for a smart platform for
                  collecting and organizing data in a multidisciplinary
                  collaboration between computer science researchers,
                  sustainability researchers at AAU, and in cooperation with an
                  international network of experts. Here is the project link:
                  https://vbn.aau.dk/en/projects/open-data-for-sustainability-assessment
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  EXTENDED BUSINESS INTELLIGENCE (Oct 2014 - Present). In this
                  project, our goal is to enable business intelligence over
                  semantic data. This includes not only making new datasets
                  available as Linked Open Data but also developing strategies
                  for efficient execution of analytical queries. Here is the
                  project link: http://extbi.cs.aau.dk/
                </li>
              </ul>
            </div>
            <div className="subsub-content">
              <h2 className="section-heading">Training & Certifications</h2>
              <div className="underline"></div>
              <ul className="education-list">
                <li>
                  <FaSquare className="bullet-icon" />
                  Understanding Open Educational Resources (OER), Commonwealth
                  of Learning (COL)
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Fundamentals of Writing Research Articles for Top Journals,
                  Researcher Academy Elsevier
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Introduction to the Certified Peer Reviewer Course, Researcher
                  Academy Elsevier
                </li>
              </ul>
            </div>
          </div>
        );
      case "publications":
        return (
          <div className="sub-content">
            <div className="subsub-content">
              <h2 className="section-heading">Books</h2>
              <div className="underline"></div>
              <ul className="education-list">
                <li>
                  <FaSquare className="bullet-icon" />
                  Aspects of Semantic ETL(PhD thesis), Rudra Pratap Deb Nath,
                  Aalborg University Press; page: 221; October 2020
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Sustainable Green Service Level Agreement (GSLA) Framework,
                  Iqbal Ahmed, LAP Lambert Academic Publishing; page: 1-123; May
                  2020
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  Circle Based Model-A new approach for Image Processing, Iqbal
                  Ahmed, LAP Lambert Academic Publishing; page: 1-76; March 2012
                </li>
              </ul>
            </div>
            <div className="subsub-content">
              <h2 className="section-heading">Journals</h2>
              <div className="underline"></div>
              <ul className="education-list">
                <li>
                  <FaSquare className="bullet-icon" />
                  <a href="#" className="project-heading">
                    <h6>High-Level ETL for Semantic Data Warehouses</h6>
                  </a>
                  Rudra Pratap Deb Nath, Oscar Romero, Torben Bach Pedersen, and
                  Katja Hose
                  <br />
                  Semantic Web Journal; IOS; page: 85-132;
                  <br />
                  November 2021
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  <a href="#" className="project-heading">
                    <h6>High-Level ETL for Semantic Data Warehouses</h6>
                  </a>
                  Rudra Pratap Deb Nath, Oscar Romero, Torben Bach Pedersen, and
                  Katja Hose
                  <br />
                  Semantic Web Journal; IOS; page: 85-132;
                  <br />
                  November 2021
                </li>
                <li>
                  <FaSquare className="bullet-icon" />
                  <a href="#" className="project-heading">
                    <h6>
                      AN EFFICIENT METRIC OF AUTOMATIC WEIGHT GENERATION FOR
                      PROPERTIES IN INSTANCE MATCHING TECHNIQUE
                    </h6>
                  </a>
                  MH Seddiqui, RPD Nath, M Aono
                  <br />
                  International Journal of Web & Semantic Technology (IJWesT) 6
                  (1), 2015;
                  <br />
                  2015
                </li>
              </ul>
            </div>
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
          <a href="/" className="dashboard_profile_page">
            DASHBOARD
          </a>
          <a href="#" className="edit-profile-link" onClick={handleOpen}>
            EDIT MY PROFILE
          </a>
          <Modal
            open={open}
            onClose={handleClose}
          >
            <Box className="parent_modal-container">
            <h2 className="parent_modal-heading">Update Your Profile Information</h2>
            <p className="parent_modal-description">We kindly request you to enter a link below to edit the information.</p>
              <ChildModal />
            </Box>
          </Modal>
        </div>
      </div>
      <div className="blur-background">
        <img src={TeacherImage} alt="Faculty Member" />
        <div className="info-container">
          <div className="teacherName">Dr. Rudra Pratap Deb Nath</div>
          <div className="designation">
            Professor of Computer Science and Engineering, University of
            Chittagong
          </div>
          <div className="email">Email: rudra@cu.ac.bd</div>
        </div>
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
