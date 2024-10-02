import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/CoursesUpcomings.css"; // Import CSS file for styling

function Meeting({ token }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [meetingRecords, setMeetingRecords] = useState([]); // New state for meeting records
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
      const fetchMeetingRecords = async () => {
        try {
          const response = await axios.get(
            `${basePath}/teacher/meetings/${currentUser.teacher_id}`, // Update with the correct API endpoint
            {
              headers: {
                Authorization: `Bearer ${token}`, // Correct template literal for the Bearer token
              },
            }
          );
          setMeetingRecords(response.data); // Set the fetched meeting records
        } catch (error) {
          console.error("Error fetching meeting records:", error);
          setError(error.message);
        }
      };

      const loadData = async () => {
        try {
          // Fetch meeting records
          await fetchMeetingRecords();
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
        <h4 className="heading">Filter Meetings</h4>
        <div className="mb-3 row">
          <div className="col">
            <label htmlFor="startDate" className="form-label">
              Started Date
            </label>
            <input type="date" className="form-control" id="startDate" />
          </div>
          <div className="col">
            <label htmlFor="startTime" className="form-label">
              Started Time
            </label>
            <input type="time" className="form-control" id="startTime" />
          </div>
        </div>
        <button type="submit" className="btn btn-light">
          Submit
        </button>
      </div>
      <div className="inner-container">
        <h4 className="heading">Meeting Records</h4>
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
              <th scope="col">Meeting Time</th>
              <th scope="col">Meeting Type</th>
              <th scope="col">Room Name</th>
              <th scope="col">Topic</th>
              <th scope="col">Description</th>
              <th scope="col">Decision</th>
              <th scope="col">Department Name</th>
              <th scope="col">Faculty</th>
              <th scope="col">Action to Change</th>
            </tr>
          </thead>
          <tbody>
            {meetingRecords.map((meeting, index) => (
              <tr key={index}>
                <td>{new Date(meeting.meeting_time).toLocaleString()}</td>
                {/* Format the date */}
                <td>{meeting.meeting_type}</td>
                <td>{meeting.room_name}</td>
                <td>{meeting.topic || "N/A"}</td>
                {/* Show "N/A" if topic is null */}
                <td>{meeting.description || "N/A"}</td>
                {/* Show "N/A" if description is null */}
                <td>{meeting.decision || "N/A"}</td>
                {/* Show "N/A" if decision is null */}
                <td>{meeting.department_name}</td>
                <td>{meeting.faculty}</td>
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

export default Meeting;
