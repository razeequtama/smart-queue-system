const Notification = require("../models/notificationModel");

const getNotifications = (
    req,
    res
) => {

    Notification.getUserNotifications(
        req.user.id,

        (err, result) => {

            if (err) {

                return res.status(500).json({
                    message:
                        "Failed"
                });

            }

            res.json(result);
        }
    );
};

module.exports = {
    getNotifications
};