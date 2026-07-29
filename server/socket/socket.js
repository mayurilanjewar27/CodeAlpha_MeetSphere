const socketHandler = (io) => {

    io.on("connection", (socket) => {

        console.log("✅ User Connected :", socket.id);

        /* ===================================
            JOIN MEETING
        ==================================== */

        socket.on("join-meeting", ({ meetingId, user }) => {

            socket.join(meetingId);

            console.log(`${user.name} joined ${meetingId}`);

            socket.to(meetingId).emit("user-joined", {
                user,
                socketId: socket.id,
            });

        });

        /* ===================================
            LEAVE MEETING
        ==================================== */

        socket.on("leave-meeting", ({ meetingId, user }) => {

            socket.leave(meetingId);

            socket.to(meetingId).emit("user-left", {
                user,
            });

        });

        /* ===================================
               CHAT MESSAGE
        ==================================== */

        socket.on("send-message", (data) => {

            io.to(data.meetingId).emit("receive-message", {

                sender: data.sender,

                message: data.message,

                time: new Date(),

            });

        });

        /* ===================================
             WEBRTC SIGNALING
        ==================================== */

        socket.on("offer", (data) => {

            socket.to(data.target).emit("offer", {

                offer: data.offer,

                sender: socket.id,

            });

        });

        socket.on("answer", (data) => {

            socket.to(data.target).emit("answer", {

                answer: data.answer,

                sender: socket.id,

            });

        });

        socket.on("ice-candidate", (data) => {

            socket.to(data.target).emit("ice-candidate", {

                candidate: data.candidate,

                sender: socket.id,

            });

        });

        /* ===================================
             SCREEN SHARING
        ==================================== */

        socket.on("start-screen-share", (meetingId) => {

            socket.to(meetingId).emit("screen-share-started");

        });

        socket.on("stop-screen-share", (meetingId) => {

            socket.to(meetingId).emit("screen-share-stopped");

        });

        /* ===================================
              WHITEBOARD
        ==================================== */

        socket.on("draw", (data) => {

            socket.to(data.meetingId).emit("draw", data);

        });

        socket.on("clear-board", (meetingId) => {

            io.to(meetingId).emit("clear-board");

        });

        /* ===================================
               FILE SHARING
        ==================================== */

        socket.on("file-uploaded", (data) => {

            io.to(data.meetingId).emit("new-file", {

                fileName: data.fileName,

                uploadedBy: data.uploadedBy,

            });

        });

        /* ===================================
               DISCONNECT
        ==================================== */

        socket.on("disconnect", () => {

            console.log("❌ User Disconnected :", socket.id);

        });

    });

};

export default socketHandler;