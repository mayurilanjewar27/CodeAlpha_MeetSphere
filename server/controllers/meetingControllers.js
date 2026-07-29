import Meeting from "../models/Meeting.js";
import { v4 as uuidv4 } from "uuid";

/* ==========================
   Create Meeting
========================== */

export const createMeeting = async (req, res) => {
  try {

    const { title, description, password } = req.body;

    const meeting = await Meeting.create({
      meetingId: uuidv4(),
      title,
      description,
      password,
      host: req.user.id,
      participants: [req.user.id],
      status: "Live",
      startTime: new Date(),
    });

    res.status(201).json({
      success: true,
      message: "Meeting Created Successfully",
      meeting,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

/* ==========================
   Get All Meetings
========================== */

export const getMeetings = async (req, res) => {
  try {

    const meetings = await Meeting.find()
      .populate("host", "name email")
      .populate("participants", "name email");

    res.status(200).json({
      success: true,
      count: meetings.length,
      meetings,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

/* ==========================
   Get Meeting By ID
========================== */

export const getMeetingById = async (req, res) => {

  try {

    const meeting = await Meeting.findOne({
      meetingId: req.params.id,
    })
      .populate("host", "name email")
      .populate("participants", "name email");

    if (!meeting) {

      return res.status(404).json({
        success: false,
        message: "Meeting Not Found",
      });

    }

    res.status(200).json({
      success: true,
      meeting,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

/* ==========================
   Join Meeting
========================== */

export const joinMeeting = async (req, res) => {

  try {

    const meeting = await Meeting.findOne({
      meetingId: req.params.id,
    });

    if (!meeting) {

      return res.status(404).json({
        success: false,
        message: "Meeting Not Found",
      });

    }

    const alreadyJoined = meeting.participants.includes(req.user.id);

    if (!alreadyJoined) {
      meeting.participants.push(req.user.id);
      await meeting.save();
    }

    res.status(200).json({
      success: true,
      message: "Joined Meeting Successfully",
      meeting,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

/* ==========================
   End Meeting
========================== */

export const endMeeting = async (req, res) => {

  try {

    const meeting = await Meeting.findOne({
      meetingId: req.params.id,
    });

    if (!meeting) {

      return res.status(404).json({
        success: false,
        message: "Meeting Not Found",
      });

    }

    meeting.status = "Ended";
    meeting.endTime = new Date();

    await meeting.save();

    res.status(200).json({
      success: true,
      message: "Meeting Ended Successfully",
      meeting,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

/* ==========================
   Delete Meeting
========================== */

export const deleteMeeting = async (req, res) => {

  try {

    const meeting = await Meeting.findOne({
      meetingId: req.params.id,
    });

    if (!meeting) {

      return res.status(404).json({
        success: false,
        message: "Meeting Not Found",
      });

    }

    await Meeting.deleteOne({
      meetingId: req.params.id,
    });

    res.status(200).json({
      success: true,
      message: "Meeting Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};