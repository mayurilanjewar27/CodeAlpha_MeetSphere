import "./ScreenShare.css";
import { useState } from "react";
import {
  FaDesktop,
  FaStopCircle,
  FaExpand,
  FaUsers
} from "react-icons/fa";

function ScreenShare() {

  const [sharing, setSharing] = useState(false);

  const handleShare = () => {
    setSharing(!sharing);
  };

  return (

    <div className="screen-share">

      {/* Header */}

      <div className="screen-header">

        <h2>Screen Sharing</h2>

        <span>Live Presentation</span>

      </div>

      {/* Screen */}

      <div className="screen-preview">

        {

          sharing ?

          <>

            <div className="screen-active">

              <FaDesktop className="screen-icon"/>

              <h2>Your Screen is Being Shared</h2>

              <p>
                Everyone in the meeting can see your screen.
              </p>

            </div>

          </>

          :

          <>

            <div className="screen-idle">

              <FaDesktop className="screen-icon"/>

              <h2>No Screen Shared</h2>

              <p>
                Click the button below to start presenting.
              </p>

            </div>

          </>

        }

      </div>

      {/* Controls */}

      <div className="screen-controls">

        <button
          className="share-btn"
          onClick={handleShare}
        >

          {

            sharing ?

            <>

              <FaStopCircle/>

              Stop Sharing

            </>

            :

            <>

              <FaDesktop/>

              Share Screen

            </>

          }

        </button>

        <button className="fullscreen-btn">

          <FaExpand/>

        </button>

        <button className="participants-btn">

          <FaUsers/>

        </button>

      </div>

    </div>

  );

}

export default ScreenShare;