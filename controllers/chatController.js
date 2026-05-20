const Chat =
    require("../models/chatModel");

const sendMessage = (
    req,
    res
) => {

    const { message, user_id } =
        req.body;

    let targetUserId =
        req.user.id;

    if (
        req.user.role === "admin"
    ) {

        targetUserId = user_id;
    }

    Chat.sendMessage(
        [
            targetUserId,
            req.user.role,
            req.user.role,
            message
        ],

        (err) => {

            if (err) {

                return res.status(500).json({
                    message:
                        "Failed to send"
                });

            }

            res.json({
                message:
                    "Message sent"
            });
        }
    );
};

const getMyMessages = (
    req,
    res
) => {

    Chat.getMessages(
        req.user.id,

        (err, result) => {

            res.json(result);
        }
    );
};

const getAdminMessages = (
    req,
    res
) => {

    const userId =
        req.params.userId;

    Chat.getMessages(
        userId,

        (err, result) => {

            res.json(result);
        }
    );
};

const getChatUsers = (
    req,
    res
) => {

    Chat.getUserChatList(
        (err, result) => {

            res.json(result);
        }
    );
};

const markPatientRead = (
    req,
    res
) => {

    Chat.markAdminMessagesAsRead(
        req.user.id,

        (err) => {

            res.json({
                message:
                    "Messages read"
            });
        }
    );
};

const markAdminRead = (
    req,
    res
) => {

    Chat.markPatientMessagesAsRead(
        req.params.userId,

        (err) => {

            res.json({
                message:
                    "Messages read"
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