import "./Meeting.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import Video from "../../components/Video/Video";
import Chat from "../../components/Chat/Chat";
import Whiteboard from "../../components/Whiteboard/Whiteboard";
import ScreenShare from "../../components/ScreenShare/ScreenShare";
import FileShare from "../../components/FileShare/FileShare";
import Participants from "../../components/Participants/Participants";

import {
FaMicrophone,
FaMicrophoneSlash,
FaVideo,
FaVideoSlash,
FaPhoneSlash,
FaDesktop,
FaComments,
FaUsers,
FaChalkboard
} from "react-icons/fa";

function Meeting(){

return(

<>

<Navbar/>

<div className="meeting-page">

<div className="meeting-header">

<div>

<h1>Project Discussion Meeting</h1>

<p>Meeting ID : MS-2026-001</p>

</div>

<div className="meeting-time">

<h3>10:30 AM</h3>

<p>Duration : 01:15:24</p>

</div>

</div>

<div className="meeting-main">

<div className="meeting-left">

<div className="video-grid">

<Video/>

<Video/>

<Video/>

<Video/>

</div>

<div className="meeting-controls">

<button>

<FaMicrophone/>

</button>

<button>

<FaVideo/>

</button>

<button>

<FaDesktop/>

</button>

<button>

<FaComments/>

</button>

<button>

<FaUsers/>

</button>

<button>

<FaChalkboard/>

</button>

<button className="end-call">

<FaPhoneSlash/>

</button>

</div>

</div>

<div className="meeting-right">

<Chat/>

</div>

</div>

<div className="meeting-sections">

<ScreenShare/>

<Whiteboard/>

<FileShare/>

<Participants/>

</div>

</div>

<Footer/>

</>

);

}

export default Meeting;