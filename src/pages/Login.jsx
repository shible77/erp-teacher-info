import React, { useState, useEffect } from "react";
import "../css/Login.css";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login({ setToken, setIsLoggedIn }) {

    const navigate = useNavigate();
    const storedToken = sessionStorage.getItem("token");
    useEffect(() => {
      if (storedToken) {
        setToken(storedToken);
        setIsLoggedIn(true);
        navigate('/dashboard');
      }
      else{
        setIsLoggedIn(false);
      }
    }, [storedToken, navigate]);

    const basePath = process.env.REACT_APP_API_BASE_URL
    const [data, setData] = useState({
        teacher_id: 0,
        password: ''
    })

    const handleClick = (e) => {
        e.preventDefault()
        const reqBody = {
            teacher_id: parseInt(data.teacher_id),
            password: data.password
        }
        axios.post(`${basePath}/login/teacher`, reqBody )
        .then(res => {
            setToken(res.data.session_id)
            setIsLoggedIn(true)
            sessionStorage.setItem("token", res.data.session_id)
            navigate('/dashboard')
        })
        .catch(err => {
            console.log(err.message)
        })
    }
  return (
    <div className="container">
      <div className="login-form">
        <h3 className="text">Log in here</h3>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form>
              <div data-mdb-input-init className="form-outline mb-4">
                <input type="email" id="loginName" autoComplete="off" className="form-control" onChange={(e) => setData({ ...data, teacher_id: e.target.value })} />
                <label className="form-label" htmlFor="loginName">
                  Teacher ID
                </label>
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control"
                  autoComplete="off"
                  onChange={(e) => setData({ ...data, password: e.target.value })}
                />
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
              </div>

              <button
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-primary btn-block mb-4"
                onClick={handleClick}
              >
                Log in
              </button>

              <div className="text-center">
                <p>
                  Not a member? <a href="#!">Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
