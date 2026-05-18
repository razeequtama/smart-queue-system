const db = require("../config/db");

const createUser = (
    data,
    callback
) => {

    const sql = `
        INSERT INTO users
        (
            name,
            email,
            phone_number,
            password,
            role
        )
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(sql, data, callback);
};

const findUserByEmail = (
    email,
    callback
) => {

    const sql = `
        SELECT *
        FROM users
        WHERE email = ?
    `;

    db.query(sql, [email], callback);
};

module.exports = {
    createUser,
    findUserByEmail
};