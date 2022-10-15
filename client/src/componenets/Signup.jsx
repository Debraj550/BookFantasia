import React, {useState} from 'react';
import Axios from 'axios';
import '../styles/signup.css';

const Signup = () => {
  const url = "http://localhost:8000/sign_in/";
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const handleChange = (event) => {
    const newData = {...data}
    newData[event.target.id] = event.target.value;
    setData(newData);
    console.log(data);
  }
  const submitUser = (event) => {
    event.preventDefault();
    Axios.post(url, {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password
    }).then(res => {
      console.log(res.data)
    })
  }
  var bgColors = { "Default": "#81b71a",
  "Blue": "#00B1E1",
  "Cyan": "#37BC9B",
  "Green": "#8CC152",
  "Red": "#E9573F",
  "Yellow": "#eee",
};
  return(
        <section className="vh-100" style={{backgroundColor: bgColors.Yellow}}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{borderradius: 25}}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0 mr">
                              <input onChange={handleChange} value = {data.firstName} type="text" id="firstName" className="form-control" />
                              <label className="form-label" htmlFor="firstName">First Name</label>
                            </div>
                            <div className="form-outline flex-fill mb-0">
                              <input onChange={handleChange} value = {data.lastName} type="text" id="lastName" className="form-control" />
                              <label className="form-label" htmlFor="lastName">Last Name</label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input onChange={handleChange} value = {data.email} type="email" id="email" className="form-control" />
                              <label className="form-label" htmlFor="email">Your Email</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input onChange={handleChange} value = {data.password}  type="password" id="password" className="form-control" />
                              <label className="form-label" htmlFor="password">Password</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input onChange={handleChange} value = {data.confirmPassword} type="password" id="confirmPassword" className="form-control" />
                              <label className="form-label" htmlFor="confirmPassword">Repeat your password</label>
                            </div>
                          </div>

                          <div className="form-check d-flex justify-content-center mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                            <label className="form-check-label" htmlFor="form2Example3">
                              I agree all statements in <a href="#!">Terms of service</a>
                            </label>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button onClick={submitUser} type="submit" className="btn btn-primary btn-lg">Register</button>
                          </div>
                        </form>

                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          className="img-fluid" alt="Sample" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>   
  )     
}
export default Signup;