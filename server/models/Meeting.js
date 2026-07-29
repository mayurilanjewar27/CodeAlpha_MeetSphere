import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema(
  {
    meetingId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    description: {
      type: String,
      default: "",
    },

    password: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Scheduled", "Live", "Ended"],
      default: "Scheduled",
    },

    startTime: {
      type: Date,
      default: Date.now,
    },

    endTime: {
      type: Date,
    },

    isRecorded: {
      type: Boolean,
      default: false,
    },

    recordingUrl: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Meeting = mongoose.model("Meeting", meetingSchema);

export default Meeting;