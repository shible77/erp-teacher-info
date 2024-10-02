import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = ({ token }) => {
  const [currentUser, setCurrentUser] = useState();
  const [teacherInfo, setTeacherInfo] = useState(null);
  const [coursePublication, setCoursePublication] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [examCommitteeRecords, setExamCommitteeRecords] = useState([]); // New state for exam committee records
  const [meetingRecords, setMeetingRecords] = useState([]); // New state for meeting records

  useEffect(() => {
    const fetchCurrentUser = () => {
      axios
        .get("http://localhost:5000/api/user", {
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
      const fetchTeacherInfo = () => {
        return axios
          .get(`http://localhost:5000/api/teacher/${currentUser.teacher_id}`, {
            headers: {
              Authorization: `Bearer ${token}`, // Correct template literal for the Bearer token
            },
          })
          .then((res) => res.data)
          .catch((error) => {
            console.error("Error fetching teacher info:", error);
            throw error;
          });
      };

      const fetchCourseCount = () => {
        return axios
          .get(
            `http://localhost:5000/api/teacher/teacher-stats/${currentUser.teacher_id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`, // Correct template literal for the Bearer token
              },
            }
          )
          .then((res) => res.data)
          .catch((error) => {
            console.error("Error fetching course count:", error);
            throw error;
          });
      };

      const fetchExamCommitteeRecords = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/teacher/exam-committee/${currentUser.teacher_id}`,
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

      const fetchMeetingRecords = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/teacher/meetings/${currentUser.teacher_id}`, // Update with the correct API endpoint
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
          const [teacherInfoData, courseCountData] = await Promise.all([
            fetchTeacherInfo(),
            fetchCourseCount(),
          ]);

          setTeacherInfo(teacherInfoData);
          setCoursePublication(courseCountData);

          // Fetch exam committee records
          await fetchExamCommitteeRecords();

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
      <p className="lead d-none d-sm-block">
        Welcome back, {teacherInfo.personal_info.title}{" "}
        {teacherInfo.personal_info.first_name}{" "}
        {teacherInfo.personal_info.last_name}
      </p>

      {/* Existing Courses Section */}
      <div className="row mb-3">
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card bg-success text-white h-100">
            <div
              className="card-body d-flex flex-column align-items-center justify-content-center"
              style={{ backgroundColor: "#57b960" }}
            >
              <div className="rotate">
                <i className="fas fa-book fa-4x"></i>
              </div>
              <h6 className="text-uppercase mt-1">Courses</h6>
              <h1 className="display-4">{coursePublication.course_count}</h1>
            </div>
          </div>
        </div>
        {/* Other cards for Classes, Publications, Awards */}
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-danger h-100">
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <div className="rotate">
                <i className="fas fa-chalkboard-teacher fa-4x"></i>
              </div>
              <h6 className="text-uppercase mt-1">Classes</h6>
              <h1 className="display-4">
                {coursePublication.course_count * 40}
              </h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-info h-100">
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <div className="rotate">
                <i className="fas fa-graduation-cap fa-4x"></i>
              </div>
              <h6 className="text-uppercase mt-1">Publications</h6>
              <h1 className="display-4">
                {coursePublication.publication_count}
              </h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-warning h-100">
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <div className="rotate">
                <i className="fas fa-award fa-4x"></i>
              </div>
              <h6 className="text-uppercase mt-1">Awards</h6>
              <h1 className="display-4">{coursePublication.award_count}</h1>
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* New Meeting Section */}
      {/* New Meeting Section */}
      <div className="row">
        <h5 className="mt-3 mb-3 text-secondary">Upcoming Meeting</h5>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="thead-light">
              <tr>
                <th scope="col">Meeting Time</th>
                <th scope="col">Meeting Type</th>
                <th scope="col">Room Name</th>
                <th scope="col">Topic</th>
                <th scope="col">Description</th>
                <th scope="col">Decision</th>
                <th scope="col">Department Name</th>
                <th scope="col">Faculty</th>
              </tr>
            </thead>
            <tbody>
              {meetingRecords
                .filter(
                  (meeting) => new Date(meeting.meeting_time) > new Date()
                ) // Filter future meetings
                .map((meeting, index) => (
                  <tr key={index}>
                    <td>{new Date(meeting.meeting_time).toLocaleString()}</td>{" "}
                    {/* Format the date */}
                    <td>{meeting.meeting_type}</td>
                    <td>{meeting.room_name}</td>
                    <td>{meeting.topic || "N/A"}</td>{" "}
                    {/* Show "N/A" if topic is null */}
                    <td>{meeting.description || "N/A"}</td>{" "}
                    {/* Show "N/A" if description is null */}
                    <td>{meeting.decision || "N/A"}</td>{" "}
                    {/* Show "N/A" if decision is null */}
                    <td>{meeting.department_name}</td>
                    <td>{meeting.faculty}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <hr />

      {/* New Exam Committee Section */}
<div className="row">
  <h5 className="mt-3 mb-3 text-secondary">Exam Committee Records</h5>
  <div className="table-responsive">
    <table className="table table-striped">
      <thead className="thead-light">
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
        </tr>
      </thead>
      <tbody>
        {examCommitteeRecords
          .filter(member => 
            new Date(member.formation_date) < new Date() && 
            new Date(member.exam_end_date) > new Date()
          ) // Filter based on formation and exam end date
          .map((member) => (
            <tr key={member.id}>
              <td>{member.role}</td>
              <td>{member.exam_name}</td>
              <td>{member.exam_centre}</td>
              <td>
                {new Date(member.exam_start_date).toLocaleDateString()}
              </td>{" "}
              {/* Format date */}
              <td>
                {new Date(member.exam_end_date).toLocaleDateString()}
              </td>{" "}
              {/* Format date */}
              <td>
                {new Date(member.formation_date).toLocaleDateString()}
              </td>{" "}
              {/* Format date */}
              <td>{member.department_name}</td>
              <td>{member.faculty}</td>
              <td>{member.session}</td>
              <td>{member.semester}</td>
              <td>{member.is_result_submitted ? "Yes" : "No"}</td>{" "}
              {/* Conditional rendering */}
              <td>
                {member.result_submit_date
                  ? new Date(member.result_submit_date).toLocaleDateString()
                  : "Not Submitted"}
              </td>{" "}
              {/* Format date or show default text */}
            </tr>
          ))}
      </tbody>
    </table>
  </div>
</div>


      <hr />
    </div>
  );
};

export default Dashboard;
