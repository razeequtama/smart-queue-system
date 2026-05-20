const Chat = require("../models/chatModel");
const Notification = require("../models/notificationModel");
const db = require("../config/db");

const sendMessage = (req, res) => {

    const { message, user_id } = req.body;

    let targetUserId = req.user.id;

    if (req.user.role === "admin") {

        targetUserId = user_id;
    }

    Chat.sendMessage(
        [
            targetUserId,
            req.user.role,
            req.user.name || req.user.role,
            message
        ],
        (err) => {

            if (err) {

                return res.status(500).json({
                    message: "Failed to send"
                });
            }

            createChatNotification(
                req,
                targetUserId,
                message,
                (notificationErr) => {

                    if (notificationErr) {
                        console.error(
                            "Notification error:",
                            notificationErr
                        );
                    }

                    res.json({
                        message: "Message sent"
                    });
                }
            );
        }
    );
};

const createChatNotification = (
    req,
    targetUserId,
    message,
    callback
) => {

    if (req.user.role === "admin") {

        const payload = JSON.stringify({
            chatUserId: targetUserId,
            text: message,
            senderName: req.user.name || "Admin"
        });

        Notification.createNotification(
            [
                targetUserId,
                `New message from admin ${req.user.name || "Admin"}`,
                payload
            ],
            callback
        );

        return;
    }

    const sql = `
        SELECT id
        FROM users
        WHERE role = 'admin'
    `;

    db.query(sql, (err, admins) => {

        if (err) {
            return callback(err);
        }

        if (!admins.length) {
            return callback(null);
        }

        const payload = JSON.stringify({
            chatUserId: req.user.id,
            text: message,
            senderName: req.user.name || "Patient"
        });

        let completed = 0;
        let hadError = false;

        admins.forEach((admin) => {

            Notification.createNotification(
                [
                    admin.id,
                    "New message from patient",
                    payload
                ],
                (notificationErr) => {

                    if (notificationErr && !hadError) {
                        hadError = true;
                        callback(notificationErr);
                    }

                    completed += 1;

                    if (completed === admins.length && !hadError) {
                        callback(null);
                    }
                }
            );
        });
    });
};

const getMyMessages = (req, res) => {

    Chat.getMessages(
        req.user.id,
        (err, result) => {
            res.json(result);
        }
    );
};

const getAdminMessages = (req, res) => {

    const userId = req.params.userId;

    Chat.getMessages(
        userId,
        (err, result) => {
            res.json(result);
        }
    );
};

const getChatUsers = (req, res) => {

    Chat.getUserChatList(
        (err, result) => {
            res.json(result);
        }
    );
};

const markPatientRead = (req, res) => {

    Chat.markAdminMessagesAsRead(
        req.user.id,
        (err) => {
            res.json({
                message: "Messages read"
            });
        }
    );
};

const markAdminRead = (req, res) => {

    Chat.markPatientMessagesAsRead(
        req.params.userId,
        (err) => {
            res.json({
                message: "Messages read"
            });
        }
    );
};

module.exports = {
    sendMessage,
    getMyMessages,
    getAdminMessages,
    getChatUsers,
    markPatientRead,
    markAdminRead
};