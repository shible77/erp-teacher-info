import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/CoursesUpcomings.css"; // Import CSS file for styling

function Courses({ token }) {
  const [currentUser, setCurrentUser] = useState();
  const [record, setRecord] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const basePath = process.env.REACT_APP_API_BASE_URL
  

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
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${basePath}/teacher/courses/${currentUser.teacher_id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`, // Correct template literal for the Bearer token
              },
            }
          );
          setRecord(response.data);
        } catch (error) {
          console.error("Error fetching courses:", error);
          setError(error.message);
        }
      };

      const loadData = async () => {
        try {
          await fetchData();
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
        <h4 className="heading">Filter Courses</h4>
        <div className="mb-3 row">
          <div className="col">
            <label htmlFor="startDate" className="form-label">
              Started Date
            </label>
            <input
              type="datetime-local"
              className="form-control"
              id="startDate"
            />
          </div>
          <div className="col">
            <label htmlFor="endDate" className="form-label">
              Ended Date
            </label>
            <input
              type="datetime-local"
              className="form-control"
              id="endDate"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-light">
          Submit
        </button>
      </div>

      <div className="inner-container">
        <h4 className="heading">Course Records</h4>
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
              <th scope="col">Course Code</th>
              <th scope="col">Course Title</th>
              <th scope="col">Credit</th>
              <th scope="col">Course Type</th>
              <th scope="col">Exam Duration</th>
              <th scope="col">Session</th>
              <th scope="col">Semester</th>
              <th scope="col">Department</th>
              <th scope="col">Faculty</th>
              <th scope="col">Program Abbreviation</th>
              <th scope="col">Action to Change</th>
            </tr>
          </thead>
          <tbody>
            {record.map((course, index) => (
              <tr key={index}>
                <td>{course.course_code}</td>
                <td>{course.course_title}</td>
                <td>{course.credit}</td>
                <td>{course.course_type}</td>
                <td>{course.exam_minutes}</td>
                <td>{course.session}</td>
                <td>{course.semester}</td>
                <td>{course.department_name}</td>
                <td>{course.faculty}</td>
                <td>{course.program_abbr}</td>
                <td>
                  <button type="button" className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
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

export default Courses;
