const db = require("../config/db");

const createNotification = (
    data,
    callback
) => {

    const sql = `
        INSERT INTO notifications
        (
            user_id,
            title,
            message
        )
        VALUES (?, ?, ?)
    `;

    db.query(sql, data, callback);
};

const getNotifications = (
    userId,
    callback
) => {

    const sql = `
        SELECT *
        FROM notifications
        WHERE user_id = ?
        ORDER BY created_at DESC
    `;

    db.query(sql, [userId], callback);
};

module.exports = {
    createNotification,
    getNotifications
};