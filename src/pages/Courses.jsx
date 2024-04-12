import React from "react";
import "./Courses.css"; // Import CSS file for styling

function Courses() {
  return (
    <div className="container">
      <div className="inner-container">
        <h4 className="heading">Add a Course </h4>
        <form>
          <div className="mb-3">
            <label htmlFor="courseName" className="form-label">
              Name of Course
            </label>
            <input type="text" className="form-control" id="courseName" />
          </div>
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
          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="department" className="form-label">
                Department
              </label>
              <input type="text" className="form-control" id="department" />
            </div>
            <div className="col">
              <label htmlFor="semester" className="form-label">
                Semester
              </label>
              <input type="text" className="form-control" id="semester" />
            </div>
            <div className="col">
              <label htmlFor="classNo" className="form-label">
                Class No
              </label>
              <input type="text" className="form-control" id="classNo" />
            </div>
          </div>
          <button type="submit" class="btn btn-light">
            Submit
          </button>
        </form>
      </div>
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
        <button type="submit" class="btn btn-light">
          Submit
        </button>
      </div>
      <div className="inner-container">
        <h4 className="heading">Previous Courses</h4>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Course Name</th>
              <th scope="col">Course Started Date</th>
              <th scope="col">Course Ended Date</th>
              <th scope="col">Department Name</th>
              <th scope="col">Semester</th>
              <th scope="col">Class No.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>CSE-111</td>
              <td>01/01/2023</td>
              <td>07/01/2023</td>
              <td>CSE</td>
              <td>1st</td>
              <td>311</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>CSE-211</td>
              <td>01/02/2023</td>
              <td>07/02/2023</td>
              <td>CSE</td>
              <td>2nd</td>
              <td>311</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>CSE-311</td>
              <td>01/03/2023</td>
              <td>07/03/2023</td>
              <td>CSE</td>
              <td>3nd</td>
              <td>312</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>CSE-411</td>
              <td>01/04/2023</td>
              <td>07/04/2023</td>
              <td>CSE</td>
              <td>4th</td>
              <td>312</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>CSE-511</td>
              <td>01/05/2023</td>
              <td>07/05/2023</td>
              <td>CSE</td>
              <td>5th</td>
              <td>313</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>CSE-611</td>
              <td>01/06/2023</td>
              <td>07/06/2023</td>
              <td>CSE</td>
              <td>6th</td>
              <td>313</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>CSE-711</td>
              <td>01/07/2023</td>
              <td>07/07/2023</td>
              <td>CSE</td>
              <td>7th</td>
              <td>314</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>CSE-811</td>
              <td>01/08/2023</td>
              <td>07/08/2023</td>
              <td>CSE</td>
              <td>8th</td>
              <td>314</td>
            </tr>
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
