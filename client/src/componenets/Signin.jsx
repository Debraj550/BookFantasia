import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/signup.css';

const Signin = () => {
  
  const url = "http://localhost:8000/sign_in/";
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);

   
  useEffect( () => {
    if(Object.keys(errors).length === 0 && isSubmit) {
      console.log("All fields are present.")
    }
  }, [errors])

  const handleChange = (event) => {
    const newData = {...data}
    newData[event.target.id] = event.target.value;
    setData(newData);
  }


  const validate = (values) => {
    const error = {};
    if(!values.firstName){
      error.firstName = "First name is required.";
    }
    if(!values.lastName) {
      error.lastName = "Last name is required.";
    }
    if(!values.email) {
      error.email = "Email is required.";
    }
    if(!values.password) {
      error.password = "Password is required.";
    }
    if(!values.confirmPassword) {
      error.confirmPassword = "Required";
    }
    return error;
  }

  const submitUser = (event) => {
    event.preventDefault();
    setErrors(validate(data));
    setIsSubmit(true);
    
    if(isSubmit === true) {
      Axios.post(url, {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        password: data.password
      }).then(res => {
        if(res.data.result === "login successful") {
          setIsLoggedin(true);
        }
        else {
          setIsLoggedin(false);
        }
        console.log(isLoggedin);
      })
    }
    else {
      
    }
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
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>

                        <form className="mx-1 mx-md-4">
                    
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input onChange={handleChange} value = {data.email} required type="email" id="email" className="form-control" />
                              <label className="form-label" htmlFor="email">Your Email</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input onChange={handleChange} value = {data.password} required  type="password" id="password" className="form-control" />
                              <label className="form-label" htmlFor="password">Password</label>
                            </div>
                          </div>

                          <div className="form-check d-flex justify-content-flex-start mb-5">
                          </div>
                          
                          <div className="form-check d-flex justify-content-center mb-5">
                            <label className="form-check-label" htmlFor="form2Example3">
                              Don't have an account yet ? <Link to = '/signup'>Sign Up</Link>
                            </label>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button onClick={submitUser} type="submit" className="btn btn-primary btn-lg">Sign in</button>
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
export default Signin;