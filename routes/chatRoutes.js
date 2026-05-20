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
    getChatUsers,

    markPatientRead,
    markAdminRead

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

router.put(
    "/read/patient",
    verifyToken,
    checkRole("patient"),
    markPatientRead
);

router.put(
    "/read/admin/:userId",
    verifyToken,
    checkRole("admin"),
    markAdminRead
);

module.exports = router;