import express from "express";

import {
  createMeeting,
  getMeetings,
  getMeetingById,
  joinMeeting,
  endMeeting,
  deleteMeeting,
} from "../controllers/meetingControllers.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

/* ===============================
   Meeting Routes
================================ */

/*
   Create Meeting
   POST /api/meetings/create
*/
router.post("/create", protect, createMeeting);

/*
   Get All Meetings
   GET /api/meetings
*/
router.get("/", protect, getMeetings);

/*
   Get Single Meeting
   GET /api/meetings/:id
*/
router.get("/:id", protect, getMeetingById);

/*
   Join Meeting
   PUT /api/meetings/:id/join
*/
router.put("/:id/join", protect, joinMeeting);

/*
   End Meeting
   PUT /api/meetings/:id/end
*/
router.put("/:id/end", protect, endMeeting);

/*
   Delete Meeting
   DELETE /api/meetings/:id
*/
router.delete("/:id", protect, deleteMeeting);

export default router;