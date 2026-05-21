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

    db.query(sql, [userId], (err, result) => {
        if (err) {
            console.error("Database error fetching notifications:", err); // Debugging log
        } else {
            console.log("Database notifications result:", result); // Debugging log
        }

        callback(err, result);
    });
};

const markAsRead = (
    notificationId,
    userId,
    callback
) => {

    const sql = `
        UPDATE notifications
        SET is_read = 1
        WHERE id = ?
        AND user_id = ?
    `;

    db.query(sql, [notificationId, userId], callback);
};

module.exports = {
    createNotification,
    getNotifications,
    markAsRead
};