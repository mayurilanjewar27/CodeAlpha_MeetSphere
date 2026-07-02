import "./Dashboard.css";
import { Link } from "react-router-dom";
import {
  FaVideo,
  FaPlusCircle,
  FaUsers,
  FaCalendarAlt,
  FaHistory,
  FaUserCircle
} from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Dashboard() {

  const meetings = [
    {
      id: 1,
      title: "Project Discussion",
      date: "10 July 2026",
      time: "10:00 AM"
    },
    {
      id: 2,
      title: "Team Standup",
      date: "11 July 2026",
      time: "9:30 AM"
    },
    {
      id: 3,
      title: "Client Presentation",
      date: "15 July 2026",
      time: "2:00 PM"
    }
  ];

  return (
    <>

      <Navbar />

      <section className="dashboard">

        <div className="welcome">

          <div>

            <h1>Welcome, Mayuri 👋</h1>

            <p>
              Manage meetings, invite participants and collaborate in real time.
            </p>

          </div>

          <FaUserCircle className="profile-icon"/>

        </div>

        {/* Quick Actions */}

        <div className="actions">

          <Link to="/meeting/demo123">

            <div className="action-card">

              <FaVideo className="action-icon"/>

              <h3>Join Meeting</h3>

            </div>

          </Link>

          <div className="action-card">

            <FaPlusCircle className="action-icon"/>

            <h3>Create Meeting</h3>

          </div>

          <div className="action-card">

            <FaUsers className="action-icon"/>

            <h3>Participants</h3>

          </div>

          <div className="action-card">

            <FaCalendarAlt className="action-icon"/>

            <h3>Schedule</h3>

          </div>

        </div>

        {/* Upcoming Meetings */}

        <div className="meeting-section">

          <h2>Upcoming Meetings</h2>

          {
            meetings.map((meeting) => (

              <div
                className="meeting-card"
                key={meeting.id}
              >

                <div>

                  <h3>{meeting.title}</h3>

                  <p>{meeting.date}</p>

                  <span>{meeting.time}</span>

                </div>

                <button>

                  Join

                </button>

              </div>

            ))
          }

        </div>

        {/* Statistics */}

        <div className="stats">

          <div className="stat-card">

            <FaVideo className="stat-icon"/>

            <h2>56</h2>

            <p>Total Meetings</p>

          </div>

          <div className="stat-card">

            <FaUsers className="stat-icon"/>

            <h2>120</h2>

            <p>Participants</p>

          </div>

          <div className="stat-card">

            <FaHistory className="stat-icon"/>

            <h2>18</h2>

            <p>Meeting History</p>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default Dashboard;