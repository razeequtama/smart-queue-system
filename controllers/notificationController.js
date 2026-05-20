const Notification = require("../models/notificationModel");

const getNotifications = (req, res) => {
    Notification.getNotifications(req.user.id, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Failed to load notifications"
            });
        }

        res.json(result);
    });
};

const markNotificationRead = (req, res) => {
    Notification.markAsRead(
        req.params.id,
        req.user.id,
        (err) => {
            if (err) {
                return res.status(500).json({
                    message: "Failed to mark notification as read"
                });
            }

            res.json({
                message: "Notification marked as read"
            });
        }
    );
};

module.exports = {
    getNotifications,
    markNotificationRead
};
