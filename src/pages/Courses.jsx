import React from "react";
import "../css/CoursesUpcomings.css"; // Import CSS file for styling

function Courses({ token }) {
  
  return (
    <div className="container">
      <div className="inner-container">
        <h4 className="heading">Add a Course</h4>
        <form>
          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="courseName" className="form-label">
                Name of Course
              </label>
              <input type="text" className="form-control" id="courseName" />
            </div>
            <div className="col">
              <label htmlFor="department" className="form-label">
                Department
              </label>
              <input type="text" className="form-control" id="department" />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="startDate" className="form-label">
                Started Date
              </label>
              <input type="date" className="form-control" id="startDate" />
            </div>
            <div className="col">
              <label htmlFor="endDate" className="form-label">
                Ended Date
              </label>
              <input type="date" className="form-control" id="endDate" />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="semester" className="form-label">
                Semester
              </label>
              <input type="text" className="form-control" id="semester" />
            </div>
            <div className="col">
              <label htmlFor="roomNo" className="form-label">
                Room No
              </label>
              <input type="text" className="form-control" id="roomNo" />
            </div>
            <div className="col">
              <label htmlFor="totalClasses" className="form-label">
                Total Classes
              </label>
              <input type="text" className="form-control" id="totalClasses" />
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
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
          <div className="col-auto">
            <label htmlFor="showEntries" className="form-label">
              Entries
            </label>
          </div>
        </div>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Course Name</th>
              <th scope="col">Started Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Department Name</th>
              <th scope="col">Semester</th>
              <th scope="col">Total Classes</th>
              <th scope="col">Room No.</th>
              <th scope="col">Action to Change</th>
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
              <td>40</td>
              <td>311</td>
              <td>
                <button type="button" class="btn btn btn-secondary btn-sm">
                  Reschedule
                </button>
                <button type="button" class="btn btn-danger btn-sm">
                  Cancel
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>CSE-211</td>
              <td>01/02/2023</td>
              <td>07/02/2023</td>
              <td>CSE</td>
              <td>2nd</td>
              <td>30</td>
              <td>311</td>
              <td>
                <button type="button" class="btn btn btn-secondary btn-sm">
                  Reschedule
                </button>
                <button type="button" class="btn btn-danger btn-sm">
                  Cancel
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>CSE-311</td>
              <td>01/03/2023</td>
              <td>07/03/2023</td>
              <td>CSE</td>
              <td>3nd</td>
              <td>45</td>
              <td>312</td>
              <td>
                <button type="button" class="btn btn btn-secondary btn-sm">
                  Reschedule
                </button>
                <button type="button" class="btn btn-danger btn-sm">
                  Cancel
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>CSE-411</td>
              <td>01/04/2023</td>
              <td>07/04/2023</td>
              <td>CSE</td>
              <td>4th</td>
              <td>35</td>
              <td>312</td>
              <td>
                <button type="button" class="btn btn btn-secondary btn-sm">
                  Reschedule
                </button>
                <button type="button" class="btn btn-danger btn-sm">
                  Cancel
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>CSE-511</td>
              <td>01/05/2023</td>
              <td>07/05/2023</td>
              <td>CSE</td>
              <td>5th</td>
              <td>50</td>
              <td>313</td>
              <td>
                <button type="button" class="btn btn btn-secondary btn-sm">
                  Reschedule
                </button>
                <button type="button" class="btn btn-danger btn-sm">
                  Cancel
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>CSE-611</td>
              <td>01/06/2023</td>
              <td>07/06/2023</td>
              <td>CSE</td>
              <td>6th</td>
              <td>38</td>
              <td>313</td>
              <td>
                <button type="button" class="btn btn btn-secondary btn-sm">
                  Reschedule
                </button>
                <button type="button" class="btn btn-danger btn-sm">
                  Cancel
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>CSE-711</td>
              <td>01/07/2023</td>
              <td>07/07/2023</td>
              <td>CSE</td>
              <td>7th</td>
              <td>42</td>
              <td>314</td>
              <td>
                <button type="button" class="btn btn btn-secondary btn-sm">
                  Reschedule
                </button>
                <button type="button" class="btn btn-danger btn-sm">
                  Cancel
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>CSE-811</td>
              <td>01/08/2023</td>
              <td>07/08/2023</td>
              <td>CSE</td>
              <td>8th</td>
              <td>47</td>
              <td>314</td>
              <td>
                <button type="button" class="btn btn btn-secondary btn-sm">
                  Reschedule
                </button>
                <button type="button" class="btn btn-danger btn-sm">
                  Cancel
                </button>
              </td>
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
