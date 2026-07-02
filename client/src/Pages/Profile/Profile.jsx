
import "./Profile.css";
import { useState } from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCamera,
  FaSave,
  FaLock
} from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Profile() {

  const [user, setUser] = useState({
    name: "Mayuri",
    email: "mayuri@gmail.com",
    phone: "+91 9876543210",
    city: "Nagpur",
    password: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated Successfully!");
  };

  return (
    <>
      <Navbar />

      <div className="profile-page">

        <div className="profile-card">

          <div className="profile-header">

            <div className="profile-image">

              <FaUserCircle className="avatar"/>

              <button className="upload-btn">

                <FaCamera/>

              </button>

            </div>

            <h2>{user.name}</h2>

            <p>MeetSphere User</p>

          </div>

          <form onSubmit={handleSubmit}>

            <div className="input-group">

              <label>Full Name</label>

              <div className="input-box">

                <FaUserCircle/>

                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                />

              </div>

            </div>

            <div className="input-group">

              <label>Email</label>

              <div className="input-box">

                <FaEnvelope/>

                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />

              </div>

            </div>

            <div className="input-group">

              <label>Phone</label>

              <div className="input-box">

                <FaPhone/>

                <input
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                />

              </div>

            </div>

            <div className="input-group">

              <label>City</label>

              <div className="input-box">

                <FaMapMarkerAlt/>

                <input
                  type="text"
                  name="city"
                  value={user.city}
                  onChange={handleChange}
                />

              </div>

            </div>

            <div className="input-group">

              <label>New Password</label>

              <div className="input-box">

                <FaLock/>

                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  value={user.password}
                  onChange={handleChange}
                />

              </div>

            </div>

            <button className="save-btn">

              <FaSave/>

              Save Changes

            </button>

          </form>

        </div>

      </div>

      <Footer />

    </>
  );
}

export default Profile;
