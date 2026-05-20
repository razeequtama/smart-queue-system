const express =
    require("express");

const router =
    express.Router();

const verifyToken =
    require("../middlewares/authMiddleware");

const {
    getNotifications,
    markNotificationRead
} = require("../controllers/notificationController");

router.get(
    "/",
    verifyToken,
    getNotifications
);

router.put(
    "/:id/read",
    verifyToken,
    markNotificationRead
);

module.exports = router;