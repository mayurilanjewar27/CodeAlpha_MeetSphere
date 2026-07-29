import "./Video.css";
import {
  FaMicrophone,
  FaMicrophoneSlash,
  FaVideo,
  FaVideoSlash,
  FaExpand,
  FaThumbtack
} from "react-icons/fa";

function Video() {

  const user = {
    name: "Mayuri",
    camera: true,
    microphone: true,
    online: true
  };

  return (

    <div className="video-card">

      <div className="video-screen">

        {/* Live Camera Video */}
        <video
          className="video-player"
          autoPlay
          muted
          playsInline
        />

        {/* Placeholder */}
        <div className="video-placeholder">

          <div className="avatar">

            {user.name.charAt(0)}

          </div>

          <h2>{user.name}</h2>

        

      </div>

      {/* Status */}

     

        <div className="status-icons">

          {
            user.microphone ?

            <FaMicrophone className="active"/>

            :

            <FaMicrophoneSlash className="inactive"/>

          }

          {
            user.camera ?

            <FaVideo className="active"/>

            :

            <FaVideoSlash className="inactive"/>

          }

        </div>

      </div>

      {/* Controls */}

      <div className="video-controls">

        <button>

          <FaThumbtack/>

        </button>

        <button>

          <FaExpand/>

        </button>

      </div>

    </div>

  );

}

export default Video;