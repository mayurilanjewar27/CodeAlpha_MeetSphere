import "./Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaVideo
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Section */}
        <div className="footer-section">

          <div className="footer-logo">
            <FaVideo className="footer-logo-icon" />
            <h2>MeetSphere</h2>
          </div>

          <p>
            MeetSphere is a modern video conferencing platform
            designed for online meetings, team collaboration,
            virtual classrooms, and secure communication.
          </p>

        </div>

        {/* Quick Links */}
        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>

            <li><a href="/">Home</a></li>

            <li><a href="/dashboard">Dashboard</a></li>

            <li><a href="/meeting/demo123">Meetings</a></li>

            <li><a href="/login">Login</a></li>

            <li><a href="/register">Register</a></li>

          </ul>

        </div>

        {/* Services */}
        <div className="footer-section">

          <h3>Services</h3>

          <ul>

            <li>Video Meetings</li>

            <li>Screen Sharing</li>

            <li>Whiteboard</li>

            <li>Live Chat</li>

            <li>File Sharing</li>

          </ul>

        </div>

        {/* Contact */}
        <div className="footer-section">

          <h3>Contact</h3>

          <p>Email: support@meetsphere.com</p>

          <p>Phone: +91 9876543210</p>

          <p>India</p>

          <div className="social-icons">

            <a href="#"><FaFacebook /></a>

            <a href="#"><FaTwitter /></a>

            <a href="#"><FaInstagram /></a>

            <a href="#"><FaLinkedin /></a>

            <a href="#"><FaYoutube /></a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 MeetSphere. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;