import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import path from "path";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import meetingRoutes from "./routes/meetingRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";

import socketHandler from "./socket/socket.js";

dotenv.config();

// Connect Database
connectDB();

const app = express();
const server = http.createServer(app);

/* ==============================
   Socket.IO
============================== */

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});

socketHandler(io);

/* ==============================
   Middleware
============================== */

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* ==============================
   Upload Folder
============================== */

app.use(
  "/uploads",
  express.static(path.join(process.cwd(), "uploads"))
);

/* ==============================
   API Routes
============================== */

app.use("/api/auth", authRoutes);

app.use("/api/meetings", meetingRoutes);

app.use("/api/files", fileRoutes);

/* ==============================
   Home Route
============================== */

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to MeetSphere API 🚀",
  });
});

/* ==============================
   404 Route
============================== */

app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

/* ==============================
   Server
============================== */

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("====================================");
  console.log(`🚀 MeetSphere Server Running`);
  console.log(`🌍 URL : http://localhost:${PORT}`);
  console.log("====================================");
});