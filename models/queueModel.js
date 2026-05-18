const db = require("../config/db");

const createQueue = (data, callback) => {

    const sql = `
        INSERT INTO queues
        (
            user_id,
            doctor_id,
            appointment_date,
            appointment_time
        )
        VALUES (?, ?, ?, ?)
    `;

    db.query(sql, data, callback);
};

const getUserQueues = (userId, callback) => {

    const sql = `
        SELECT
            queues.*,
            doctors.doctor_name
        FROM queues
        JOIN doctors
        ON queues.doctor_id = doctors.id
        WHERE user_id = ?
    `;

    db.query(sql, [userId], callback);
};

const getAllQueues = (callback) => {

    const sql = `
        SELECT
            queues.*,
            users.name,
            doctors.doctor_name
        FROM queues
        JOIN users
        ON queues.user_id = users.id
        JOIN doctors
        ON queues.doctor_id = doctors.id
    `;

    db.query(sql, callback);
};

module.exports = {
    createQueue,
    getUserQueues,
    getAllQueues
};