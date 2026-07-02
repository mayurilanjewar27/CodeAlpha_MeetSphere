import "./Whiteboard.css";
import {
  FaPen,
  FaEraser,
  FaTrash,
  FaDownload,
  FaPalette
} from "react-icons/fa";

function Whiteboard() {

  return (

    <div className="whiteboard">

      {/* Header */}

      <div className="whiteboard-header">

        <h2>Live Whiteboard</h2>

        <span>Meeting Collaboration</span>

      </div>

      {/* Toolbar */}

      <div className="toolbar">

        <button title="Pen">

          <FaPen />

        </button>

        <button title="Eraser">

          <FaEraser />

        </button>

        <button title="Color">

          <FaPalette />

        </button>

        <button title="Clear">

          <FaTrash />

        </button>

        <button title="Download">

          <FaDownload />

        </button>

      </div>

      {/* Canvas */}

      <div className="canvas-area">

        <canvas
          width="900"
          height="500"
        />

        <div className="canvas-message">

          <h3>Whiteboard Ready</h3>

          <p>
            Draw diagrams, explain ideas and collaborate
            with everyone in your meeting.
          </p>

        </div>

      </div>

    </div>

  );

}

export default Whiteboard;