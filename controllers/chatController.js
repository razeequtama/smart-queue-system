const Chat = require("../models/chatModel");

const Notification = require("../models/notificationModel");

const sendMessage = (
    req,
    res
) => {

    const {
        receiver_id,
        message
    } = req.body;

    if (!message) {

        return res.status(400).json({
            message: "Message required"
        });

    }

    Chat.sendMessage(
        [
            req.user.id,
            receiver_id,
            message
        ],

        (err) => {

            if (err) {

                return res.status(500).json({
                    message:
                        "Failed to send"
                });

            }

            Notification.createNotification(
                [
                    receiver_id,
                    "New Message",
                    "You received a new chat"
                ],

                () => {}
            );

            res.json({
                message:
                    "Message sent"
            });
        }
    );
};

const getConversation = (req, res) => {

    const adminId =
        req.params.adminId;

    Chat.getConversation(
        req.user.id,
        adminId,

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
    sendMessage,
    getConversation
};