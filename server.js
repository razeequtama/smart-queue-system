require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const open = require("open");

const chatRoutes = require("./routes/chatRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const authRoutes = require("./routes/authRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const queueRoutes = require("./routes/queueRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/auth", authRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/queues", queueRoutes);

const PORT = process.env.PORT;

app.listen(PORT, async () => {

    console.log(
        `Server running on port ${PORT}`
    );

    await open(
        `http://localhost:${PORT}/login.html`
    );

});

app.use("/api/chats", chatRoutes);

app.use("/api/notifications", notificationRoutes);