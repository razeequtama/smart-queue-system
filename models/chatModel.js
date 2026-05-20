const db = require("../config/db");

const sendMessage = (
    data,
    callback
) => {

    const sql = `
        INSERT INTO chats
        (
            user_id,
            sender_role,
            sender_name,
            message
        )
        VALUES (?, ?, ?, ?)
    `;

    db.query(sql, data, callback);
};

const getMessages = (
    userId,
    callback
) => {

    const sql = `
        SELECT *
        FROM chats
        WHERE user_id = ?
        ORDER BY created_at ASC
    `;

    db.query(sql, [userId], callback);
};

const getUserChatList = (
    callback
) => {

    const sql = `
        SELECT
            users.id,
            users.name,

            MAX(chats.created_at)
            AS latest_chat,

            SUM(
                CASE
                    WHEN chats.is_read = 0
                    AND chats.sender_role = 'patient'
                    THEN 1
                    ELSE 0
                END
            ) AS unread_count

        FROM users

        JOIN chats
        ON users.id = chats.user_id

        GROUP BY users.id

        ORDER BY latest_chat DESC
    `;

    db.query(sql, callback);
};

const markAsRead = (
    userId,
    callback
) => {

    const sql = `
        UPDATE chats
        SET is_read = 1
        WHERE user_id = ?
    `;

    db.query(sql, [userId], callback);
};

module.exports = {
    sendMessage,
    getMessages,
    getUserChatList,
    markAsRead
};