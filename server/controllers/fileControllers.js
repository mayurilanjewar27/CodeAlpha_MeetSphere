import File from "../models/File.js";

export const uploadFile = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const { meetingId } = req.body;

    const file = await File.create({
      fileName: req.file.filename,
      originalName: req.file.originalname,
      fileUrl: `/uploads/${req.file.filename}`,
      fileType: req.file.mimetype,
      fileSize: req.file.size,
      uploadedBy: req.user.id,
      meeting: meetingId,
    });

    res.status(201).json({
      success: true,
      message: "File uploaded successfully",
      file,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

/* ==========================
   Get All Files
========================== */

export const getFiles = async (req, res) => {

  try {

    const files = await File.find({
      meeting: req.params.meetingId,
      isDeleted: false,
    })
      .populate("uploadedBy", "name email");

    res.status(200).json({
      success: true,
      count: files.length,
      files,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

/* ==========================
   Get Single File
========================== */

export const getFile = async (req, res) => {

  try {

    const file = await File.findById(req.params.id)
      .populate("uploadedBy", "name email")
      .populate("meeting", "title");

    if (!file || file.isDeleted) {

      return res.status(404).json({
        success: false,
        message: "File not found",
      });

    }

    res.status(200).json({
      success: true,
      file,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

/* ==========================
   Delete File
========================== */

export const deleteFile = async (req, res) => {

  try {

    const file = await File.findById(req.params.id);

    if (!file) {

      return res.status(404).json({
        success: false,
        message: "File not found",
      });

    }

    file.isDeleted = true;

    await file.save();

    res.status(200).json({
      success: true,
      message: "File deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};