import "./Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaVideo
} from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (user.password !== user.confirmPassword) {

      alert("Passwords do not match!");

      return;

    }

    console.log(user);

    alert("Registration Successful!");

  };

  return (

    <>

      <Navbar />

      <section className="register">

        <div className="register-card">

          <div className="register-logo">

            <FaVideo className="video-icon"/>

            <h1>MeetSphere</h1>

          </div>

          <h2>Create Account</h2>

          <p>

            Join MeetSphere and start secure meetings.

          </p>

          <form onSubmit={handleSubmit}>

            <div className="input-box">

              <FaUser/>

              <input

                type="text"

                name="name"

                placeholder="Full Name"

                value={user.name}

                onChange={handleChange}

                required

              />

            </div>

            <div className="input-box">

              <FaEnvelope/>

              <input

                type="email"

                name="email"

                placeholder="Email Address"

                value={user.email}

                onChange={handleChange}

                required

              />

            </div>

            <div className="input-box">

              <FaLock/>

              <input

                type="password"

                name="password"

                placeholder="Password"

                value={user.password}

                onChange={handleChange}

                required

              />

            </div>

            <div className="input-box">

              <FaLock/>

              <input

                type="password"

                name="confirmPassword"

                placeholder="Confirm Password"

                value={user.confirmPassword}

                onChange={handleChange}

                required

              />

            </div>

            <button className="register-btn">

              Create Account

            </button>

          </form>

          <div className="bottom-link">

            Already have an account?

            <Link to="/login">

              Login

            </Link>

          </div>

        </div>

      </section>

      <Footer />

    </>

  );

}

export default Register;