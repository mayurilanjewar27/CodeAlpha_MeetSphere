import "./Loader.css";
import { FaVideo } from "react-icons/fa";

function Loader() {
  return (
    <div className="loader-container">

      <div className="loader-card">

        <div className="loader-circle">

          <FaVideo className="loader-icon" />

        </div>

        <h1 className="loader-title">
          MeetSphere
        </h1>

        <p className="loader-text">
          Connecting People Around the World...
        </p>

        <div className="loading-bar">

          <div className="loading-progress"></div>

        </div>

      </div>

    </div>
  );
}

export default Loader;