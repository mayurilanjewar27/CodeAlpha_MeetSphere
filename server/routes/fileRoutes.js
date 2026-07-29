import express from "express";
import multer from "multer";
import path from "path";

import protect from "../middleware/authMiddleware.js";

import {
  uploadFile,
  getFiles,
  getFile,
  deleteFile,
} from "../controllers/fileControllers.js";

const router = express.Router();

/* ==========================
   Multer Storage
========================== */

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

/* ==========================
   File Filter
========================== */

const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error("Only Images, PDF, Word and PPT files are allowed."),
      false
    );
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 20 * 1024 * 1024,
  },
});

/* ==========================
   Routes
========================== */

// Upload File
router.post(
  "/upload",
  protect,
  upload.single("file"),
  uploadFile
);

// Get all files of a meeting
router.get(
  "/:meetingId",
  protect,
  getFiles
);

// Get single file
router.get(
  "/file/:id",
  protect,
  getFile
);

// Delete file
router.delete(
  "/:id",
  protect,
  deleteFile
);

export default router;