const db = require("../config/db");

const getDoctors = (callback) => {

    const sql = `
        SELECT * FROM doctors
    `;

    db.query(sql, callback);
};

module.exports = {
    getDoctors
};