import "./Home.css";
import { Link } from "react-router-dom";
import {
  FaVideo,
  FaUsers,
  FaDesktop,
  FaShieldAlt,
  FaPlayCircle,
  FaArrowRight
} from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Home() {

  const features = [
    {
      icon: <FaVideo />,
      title: "HD Video Meetings",
      desc: "Crystal clear video meetings with unlimited participants."
    },
    {
      icon: <FaDesktop />,
      title: "Screen Sharing",
      desc: "Present your ideas with one-click screen sharing."
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      desc: "Work together using chat and collaborative tools."
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Meetings",
      desc: "JWT Authentication & encrypted communication."
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section className="hero">

        <div className="hero-left">

          <span className="tag">
            🚀 Next Generation Meeting Platform
          </span>

          <h1>
            Connect.
            Collaborate.
            Create.
          </h1>

          <p>
            MeetSphere helps teams communicate with
            HD Video Calls, Live Chat,
            Whiteboard, Screen Sharing and
            Secure Collaboration.
          </p>

          <div className="hero-buttons">

            <Link to="/meeting/demo123">

              <button className="join-btn">

                Join Meeting

              </button>

            </Link>

            <Link to="/register">

              <button className="demo-btn">

                <FaPlayCircle />

                Watch Demo

              </button>

            </Link>

          </div>

        </div>

        <div className="hero-right">

          <div className="meeting-window">

            <div className="meeting-top">

              <span className="red"></span>

              <span className="yellow"></span>

              <span className="green"></span>

            </div>

            <div className="meeting-grid">

              <div className="video-card">👩 Mayuri</div>

              <div className="video-card">👨 Alex</div>

              <div className="video-card">👩 Sara</div>

              <div className="video-card">👨 John</div>

            </div>

            <div className="meeting-controls">

              🎤 📹 💬 🖥️ 👥 🔴

            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="stats">

        <div>

          <h2>5000+</h2>

          <p>Active Users</p>

        </div>

        <div>

          <h2>1200+</h2>

          <p>Meetings Daily</p>

        </div>

        <div>

          <h2>99.9%</h2>

          <p>Uptime</p>

        </div>

        <div>

          <h2>24/7</h2>

          <p>Support</p>

        </div>

      </section>

      {/* Features */}

      <section className="features">

        <h2>

          Why Choose MeetSphere?

        </h2>

        <p>

          Everything you need for professional online meetings.

        </p>

        <div className="feature-grid">

          {

            features.map((item,index)=>(

              <div
                className="feature-card"
                key={index}
              >

                <div className="icon">

                  {item.icon}

                </div>

                <h3>

                  {item.title}

                </h3>

                <p>

                  {item.desc}

                </p>

              </div>

            ))

          }

        </div>

      </section>

      {/* CTA */}

      <section className="cta">

        <h2>

          Ready to Start Your First Meeting?

        </h2>

        <p>

          Join thousands of users using MeetSphere every day.

        </p>

        <Link to="/register">

          <button>

            Get Started

            <FaArrowRight />

          </button>

        </Link>

      </section>

      <Footer />

    </>
  );
}

export default Home;