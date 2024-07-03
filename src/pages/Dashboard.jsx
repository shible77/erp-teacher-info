import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [record, setRecord] = useState([]);
  const [upcoming, setUpcoming] = useState({
    classes: [],
    evaluations: [],
    meetings: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRecord(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchUpcoming = async () => {
      // Sample data for upcoming items
      const upcomingData = {
        classes: [
          { id: 1, title: "Math 101", date: "2024-07-04", time: "10:00 AM" },
          { id: 2, title: "Science 102", date: "2024-07-05", time: "12:00 PM" },
        ],
        evaluations: [
          {
            id: 1,
            title: "Math Midterm",
            date: "2024-07-06",
            time: "02:00 PM",
          },
        ],
        meetings: [
          {
            id: 1,
            title: "Parent Meeting",
            date: "2024-07-07",
            time: "04:00 PM",
          },
        ],
      };
      setUpcoming(upcomingData);
    };

    fetchData();
    fetchUpcoming();
  }, []);

  return (
    <div className="col main ml-15 mt-2">
      <p className="lead d-none d-sm-block">
        Welcome back, Dr. Rudra Pratap Deb Nath
      </p>
      <div className="row mb-3">
  <div className="col-xl-3 col-sm-6 py-2">
    <div className="card bg-success text-white h-100">
      <div className="card-body d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: "#57b960" }}>
        <div className="rotate">
          <i className="fas fa-book fa-4x"></i>
        </div>
        <h6 className="text-uppercase mt-1">Courses</h6>
        <h1 className="display-4">255</h1>
      </div>
    </div>
  </div>
  <div className="col-xl-3 col-sm-6 py-2">
    <div className="card text-white bg-danger h-100">
      <div className="card-body d-flex flex-column align-items-center justify-content-center">
        <div className="rotate">
          <i className="fas fa-chalkboard-teacher fa-4x"></i>
        </div>
        <h6 className="text-uppercase mt-1">Classes</h6>
        <h1 className="display-4">1320</h1>
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
        <h1 className="display-4">27</h1>
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
        <h1 className="display-4">2</h1>
      </div>
    </div>
  </div>
</div>

      <hr />

      <div className="row">
        <h5 className="mt-3 mb-3 text-secondary">Check running courses</h5>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="thead-light">
              <tr>
                <th scope="col">Course Name</th>
                <th scope="col">Course Started Date</th>
                <th scope="col">Course End Date</th>
                <th scope="col">Department Name</th>
                <th scope="col">Semester</th>
                <th scope="col">Total Classes</th>
                <th scope="col">Room No.</th>
              </tr>
            </thead>
            <tbody>
              {record.slice(0, 5).map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.website}</td>
                  <td>{user.username}</td>
                  <td>{user.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <hr />

      <div className="row mb-3">
        <h5 className="mt-3 mb-3 text-secondary">Upcoming Events</h5>
        <div className="col-xl-3 col-sm-6 py-2">
          <div
            className="card text-black h-100"
            style={{ backgroundColor: "rgb(197, 207, 207)" }}
          >
            <div className="card-body">
              <h6>Classes</h6>
              {upcoming.classes.map((cls) => (
                <div key={cls.id} className="mb-2">
                  <h6>{cls.title}</h6>
                  <p>
                    {cls.date} at {cls.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div
            className="card text-black h-100"
            style={{ backgroundColor: "rgb(197, 207, 207)" }}
          >
            <div className="card-body">
              <h6>Evaluations</h6>
              {upcoming.evaluations.map((evaluation) => (
                <div key={evaluation.id} className="mb-2">
                  <h6>{evaluation.title}</h6>
                  <p>
                    {evaluation.date} at {evaluation.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div
            className="card text-black h-100"
            style={{ backgroundColor: "rgb(197, 207, 207)" }}
          >
            <div className="card-body">
              <h6>Meetings</h6>
              {upcoming.meetings.map((meeting) => (
                <div key={meeting.id} className="mb-2">
                  <h6>{meeting.title}</h6>
                  <p>
                    {meeting.date} at {meeting.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
