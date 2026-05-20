const Chat =
    require("../models/chatModel");

const sendMessage = (
    req,
    res
) => {

    const { message } = req.body;

    Chat.sendMessage(
        [
            req.user.id,
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

module.exports = {
    sendMessage,
    getMyMessages,
    getAdminMessages,
    getChatUsers
};