import "./FileShare.css";
import { useState } from "react";
import {
  FaFileUpload,
  FaFilePdf,
  FaFileWord,
  FaFileImage,
  FaDownload,
  FaTrash
} from "react-icons/fa";

function FileShare() {

  const [files, setFiles] = useState([]);

  const uploadFile = (e) => {

    const selectedFiles = Array.from(e.target.files);

    const newFiles = selectedFiles.map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: (file.size / 1024).toFixed(2) + " KB",
      type: file.type
    }));

    setFiles([...files, ...newFiles]);
  };

  const deleteFile = (id) => {
    setFiles(files.filter(file => file.id !== id));
  };

  const getIcon = (type) => {

    if (type.includes("pdf")) return <FaFilePdf className="pdf"/>;

    if (type.includes("word")) return <FaFileWord className="word"/>;

    if (type.includes("image")) return <FaFileImage className="image"/>;

    return <FaFileUpload className="default"/>;
  };

  return (

    <div className="file-share">

      <div className="file-header">

        <h2>Meeting File Sharing</h2>

        <p>Upload and share files with participants</p>

      </div>

      <div className="upload-box">

        <label htmlFor="upload">

          <FaFileUpload className="upload-icon"/>

          <h3>Choose Files</h3>

          <p>PDF, DOCX, PPT, Images, ZIP</p>

        </label>

        <input
          type="file"
          id="upload"
          multiple
          onChange={uploadFile}
        />

      </div>

      <div className="file-list">

        {

          files.length===0 ?

          <h3 className="empty">
            No files uploaded
          </h3>

          :

          files.map(file=>(

            <div
              className="file-card"
              key={file.id}
            >

              <div className="file-info">

                {getIcon(file.type)}

                <div>

                  <h4>{file.name}</h4>

                  <span>{file.size}</span>

                </div>

              </div>

              <div className="file-buttons">

                <button className="download">

                  <FaDownload/>

                </button>

                <button
                  className="delete"
                  onClick={()=>deleteFile(file.id)}
                >

                  <FaTrash/>

                </button>

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default FileShare;