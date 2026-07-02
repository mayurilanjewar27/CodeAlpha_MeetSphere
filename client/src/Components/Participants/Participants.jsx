import "./Participants.css";
import {
  FaUserCircle,
  FaMicrophone,
  FaMicrophoneSlash,
  FaVideo,
  FaVideoSlash,
  FaCrown
} from "react-icons/fa";

function Participants() {

  const participants = [
    {
      id: 1,
      name: "Mayuri",
      role: "Host",
      online: true,
      mic: true,
      camera: true
    },
    {
      id: 2,
      name: "Rahul",
      role: "Participant",
      online: true,
      mic: false,
      camera: true
    },
    {
      id: 3,
      name: "Priya",
      role: "Participant",
      online: true,
      mic: true,
      camera: false
    },
    {
      id: 4,
      name: "Amit",
      role: "Participant",
      online: false,
      mic: false,
      camera: false
    }
  ];

  return (

    <div className="participants">

      <div className="participants-header">

        <h2>Meeting Participants</h2>

        <span>{participants.length} Members</span>

      </div>

      <div className="participants-list">

        {

          participants.map((user) => (

            <div
              className="participant-card"
              key={user.id}
            >

              <div className="participant-left">

                <FaUserCircle className="avatar" />

                <div>

                  <h3>

                    {user.name}

                    {

                      user.role === "Host" &&

                      <FaCrown className="host-icon"/>

                    }

                  </h3>

                  <p>{user.role}</p>

                </div>

              </div>

              <div className="participant-right">

                <span
                  className={
                    user.online
                    ?
                    "online"
                    :
                    "offline"
                  }
                >
                  {
                    user.online
                    ?
                    "Online"
                    :
                    "Offline"
                  }
                </span>

                {

                  user.mic ?

                  <FaMicrophone className="green"/>

                  :

                  <FaMicrophoneSlash className="red"/>

                }

                {

                  user.camera ?

                  <FaVideo className="green"/>

                  :

                  <FaVideoSlash className="red"/>

                }

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default Participants;