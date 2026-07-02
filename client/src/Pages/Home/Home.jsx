import "./Home.css";
import { Link } from "react-router-dom";
import {
  FaVideo,
  FaUsers,
  FaDesktop,
  FaChalkboardTeacher,
  FaCloudUploadAlt,
  FaLock
} from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>

      <Navbar />

      {/* Hero Section */}

      <section className="hero">

        <div className="hero-left">

          <h1>
            Connect,
            Collaborate &
            Communicate
          </h1>

          <p>
            MeetSphere is a modern video conferencing platform
            that helps teams connect through HD meetings,
            screen sharing, live chat, collaborative whiteboard,
            and secure file sharing.
          </p>

          <div className="hero-buttons">

            <Link to="/meeting/demo123">

              <button className="join-btn">
                Join Meeting
              </button>

            </Link>

            <Link to="/register">

              <button className="create-btn">
                Create Account
              </button>

            </Link>

          </div>

        </div>

        <div className="hero-right">

          <div className="hero-card">

            <FaVideo className="hero-icon"/>

            <h2>HD Video Meetings</h2>

            <p>Crystal clear video & audio communication.</p>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="features">

        <h2>Our Features</h2>

        <div className="feature-grid">

          <div className="feature-card">

            <FaVideo className="feature-icon"/>

            <h3>Video Meetings</h3>

            <p>
              High quality HD meetings with multiple participants.
            </p>

          </div>

          <div className="feature-card">

            <FaDesktop className="feature-icon"/>

            <h3>Screen Sharing</h3>

            <p>
              Present your screen in one click.
            </p>

          </div>

          <div className="feature-card">

            <FaUsers className="feature-icon"/>

            <h3>Group Meetings</h3>

            <p>
              Invite unlimited participants.
            </p>

          </div>

          <div className="feature-card">

            <FaCloudUploadAlt className="feature-icon"/>

            <h3>File Sharing</h3>

            <p>
              Share files securely during meetings.
            </p>

          </div>

          <div className="feature-card">

            <FaChalkboardTeacher className="feature-icon"/>

            <h3>Whiteboard</h3>

            <p>
              Collaborate using live drawing tools.
            </p>

          </div>

          <div className="feature-card">

            <FaLock className="feature-icon"/>

            <h3>Secure Meetings</h3>

            <p>
              JWT authentication and encrypted communication.
            </p>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="stats">

        <div className="stat-box">

          <h2>5000+</h2>

          <p>Users</p>

        </div>

        <div className="stat-box">

          <h2>1200+</h2>

          <p>Meetings</p>

        </div>

        <div className="stat-box">

          <h2>99.9%</h2>

          <p>Server Uptime</p>

        </div>

        <div className="stat-box">

          <h2>24/7</h2>

          <p>Support</p>

        </div>

      </section>

      {/* CTA */}

      <section className="cta">

        <h2>Ready to Start Your Meeting?</h2>

        <p>
          Join thousands of users collaborating with MeetSphere.
        </p>

        <Link to="/register">

          <button>
            Get Started
          </button>

        </Link>

      </section>

      <Footer />

    </>
  );
}

export default Home;