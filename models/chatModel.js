const db = require("../config/db");

const sendMessage = (
    data,
    callback
) => {

    const sql = `
        INSERT INTO chats
        (
            sender_id,
            receiver_id,
            message
        )
        VALUES (?, ?, ?)
    `;

    db.query(sql, data, callback);
};

const getConversation = (
    userId,
    adminId,
    callback
) => {

    const sql = `
        SELECT
            chats.*,
            users.name AS sender_name
        FROM chats

        JOIN users
        ON chats.sender_id = users.id

        WHERE
        (
            sender_id = ?
            AND receiver_id = ?
        )

        OR

        (
            sender_id = ?
            AND receiver_id = ?
        )

        ORDER BY created_at ASC
    `;

    db.query(
        sql,
        [
            userId,
            adminId,
            adminId,
            userId
        ],
        callback
    );
};

module.exports = {
    sendMessage,
    getConversation
};