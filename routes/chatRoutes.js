const express =
    require("express");

const router =
    express.Router();

const verifyToken =
    require("../middlewares/authMiddleware");

const checkRole =
    require("../middlewares/roleMiddleware");

const {
    sendMessage,
    getMyMessages,
    getAdminMessages,
    getChatUsers
} = require("../controllers/chatController");

router.post(
    "/send",
    verifyToken,
    sendMessage
);

router.get(
    "/my",
    verifyToken,
    checkRole("patient"),
    getMyMessages
);

router.get(
    "/admin/users",
    verifyToken,
    checkRole("admin"),
    getChatUsers
);

router.get(
    "/admin/:userId",
    verifyToken,
    checkRole("admin"),
    getAdminMessages
);

module.exports = router;