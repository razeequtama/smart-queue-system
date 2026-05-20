const express = require("express");

const router = express.Router();

const verifyToken = require("../middlewares/authMiddleware");

const {
    sendMessage,
    getConversation
} = require(
    "../controllers/chatController"
);

router.post(
    "/",
    verifyToken,
    sendMessage
);

router.get(
    "/:adminId",
    verifyToken,
    getConversation
);

module.exports = router;