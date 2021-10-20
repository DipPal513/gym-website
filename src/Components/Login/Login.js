import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Button, Modal } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import {
  getAuth,
  // signInWithPopup,
  // GoogleAuthProvider,
  // onAuthStateChanged,
  // createUserWithEmailAndPassword,
  // signOut,
  // updateProfile,

  signInWithEmailAndPassword,
} from "firebase/auth";
const Login = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const history = useHistory();
  const { handleGoogleSignIn, setError, setUser, setIsloading, error } =
    useAuth();
  const redirect_uri = location.state?.from || "/home";

  // handle email and password sign in
  const handleSignIn = () => {
    setIsloading(true);
    if(email && password){

    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setError("");
        setIsloading(false);
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      });
  };}
  //calling the function
  const handleLogin = (e) => {
    e.preventDefault();
    handleGoogleSignIn().then((result) => {
      history.push(redirect_uri);
    }).catch(err => setError(err.message))
  };
  //

  //calling function
  const handleloginwithemail = () => {
    
      handleSignIn(email, password);
      
    
  };
  return (
    <>
      <section className="mt-5">
        <div className="container-fluid h-custom py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="mb-0 text-capitalize">sign in using</p>
                  <button className="btn" onClick={handleLogin}>
                    <FcGoogle />
                  </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    onBlur={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    onBlur={(e) => setPassword(e.target.value)}
                  />
                </div>
                <p className="text-danger">{error}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={handleloginwithemail}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="/registration" className="link-danger">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      )
    </>
  );
};

export default Login;
