import React from "react";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { useHistory } from "react-router-dom";
import {
  getAuth,
  
  createUserWithEmailAndPassword,

  updateProfile,

} from "firebase/auth";
import { Link } from "react-router-dom";
const Registration = () => {
  const { setError, error, setIsloading, setUser } = useAuth();
  const auth = getAuth();
  const history = useHistory();
  const [email, setEmail] = useState("");

  const [password, setPass] = useState("");
  const [name, setName] = useState("");
  const img =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuoo6sKRiK25j45Ir_uLe2hi6YX5VAZg2fmA&usqp=CAU";
  const signUpUser = (email, password, name, image) => {
    setIsloading(true);
   
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          setUser({});
          setError("");
          history.push("/login");
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
          });
          setIsloading(false);
        })
        .catch((err) => {
          setError(err.message);
          history.push("/registration");
        });
   
  };
  const handleReg = () => {
    signUpUser(email, password, name, img);
  };

  return (
    <section className="vh-100 mt-5" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <div className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            placeholder="Your Name"
                            className="form-control"
                            onBlur={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            placeholder="Your Email"
                            className="form-control"
                            onBlur={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            placeholder="Password"
                            className="form-control"
                            onBlur={(e) => setPass(e.target.value)}
                          />
                        </div>
                      </div>
                      <p className="text-danger">{error}</p>

                      <div className="form-check d-flex justify-content-center mb-2">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          I agree all statements in{" "}
                          <a href="#!">Terms of service</a>
                        </label>
                      </div>
                      <p className="small fw-bold mt-2 pt-1 ms-4 mb-3 text-start">
                        Already have an Account?{" "}
                        <Link to="/login" className="link-danger">
                          Login
                        </Link>
                      </p>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                          onClick={handleReg}
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
