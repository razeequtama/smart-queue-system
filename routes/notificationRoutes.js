const express =
    require("express");

const router =
    express.Router();

const verifyToken =
    require("../middlewares/authMiddleware");

const Notification =
    require("../models/notificationModel");

router.get(
    "/",
    verifyToken,
    (req, res) => {

        Notification.getNotifications(
            req.user.id,

            (err, result) => {

                res.json(result);
            }
        );
    }
);

module.exports = router;