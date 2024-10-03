import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/CoursesUpcomings.css"; // Import CSS file for styling

function ExamCommittee({ token }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const basePath = process.env.REACT_APP_API_BASE_URL
  const [examCommitteeRecords, setExamCommitteeRecords] = useState([]); // New state for exam committee records

  useEffect(() => {
    const fetchCurrentUser = () => {
      axios
        .get(`${basePath}/user`, {
          headers: {
            Authorization: `Bearer ${token}`, // Correct template literal for the Bearer token
          },
        })
        .then((res) => {
          setCurrentUser(res.data);
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    // Proceed only if `currentUser` is defined
    if (currentUser && currentUser.teacher_id) {
      const fetchExamCommitteeRecords = async () => {
        try {
          const response = await axios.get(
            `${basePath}/teacher/exam-committee/${currentUser.teacher_id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`, // Correct template literal for the Bearer token
              },
            }
          );
          setExamCommitteeRecords(response.data); // Set the fetched exam committee records
        } catch (error) {
          console.error("Error fetching exam committee records:", error);
          setError(error.message);
        }
      };

      const loadData = async () => {
        try {
          // Fetch exam committee records
          await fetchExamCommitteeRecords();
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      loadData();
    }
  }, [currentUser, token]); // Add `currentUser` as a dependency

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="col main ml-15 mt-2">
      <div className="inner-container">
        <h4 className="heading">Committee Records</h4>
        <div className="row mb-3">
          <div className="col-auto">
            <label htmlFor="showEntries" className="form-label">
              Show
            </label>
          </div>
          <div className="col-auto">
            <select className="form-select" id="showEntries">
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
            </select>
          </div>
          <div className="col-auto">
            <label htmlFor="showEntries" className="form-label">
              Entries
            </label>
          </div>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Role</th>
              <th scope="col">Exam Name</th>
              <th scope="col">Exam Centre</th>
              <th scope="col">Exam Start Date</th>
              <th scope="col">Exam End Date</th>
              <th scope="col">Formation Date</th>
              <th scope="col">Department</th>
              <th scope="col">Faculty</th>
              <th scope="col">Session</th>
              <th scope="col">Semester</th>
              <th scope="col">Is Result Submitted</th>
              <th scope="col">Result Submit Date</th>
              {/* <th scope="col">Action to Change</th> */}
            </tr>
          </thead>
          <tbody>
            {examCommitteeRecords.map((member, index) => (
              <tr key={index}>
                <td>{member.role}</td>
                <td>{member.exam_name}</td>
                <td>{member.exam_centre}</td>
                <td>
                  {new Date(member.exam_start_date).toLocaleDateString()}
                </td>
                {/* Format date */}
                <td>
                  {new Date(member.exam_end_date).toLocaleDateString()}
                </td>
                {/* Format date */}
                <td>
                  {new Date(member.formation_date).toLocaleDateString()}
                </td>
                {/* Format date */}
                <td>{member.department_name}</td>
                <td>{member.faculty}</td>
                <td>{member.session}</td>
                <td>{member.semester}</td>
                <td>{member.is_result_submitted ? "Yes" : "No"}</td>
                {/* Conditional rendering */}
                <td>
                  {member.result_submit_date
                    ? new Date(member.result_submit_date).toLocaleDateString()
                    : "Not Submitted"}
                </td>
                {/* <td>
                  <button type="button" className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td> */}
                {/* Format date or show default text */}
              </tr>
            ))}
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className="page-item disabled">
              <a
                className="page-link"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ExamCommittee;
