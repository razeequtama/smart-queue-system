const Doctor = require("../models/doctorModel");

const getAllDoctors = (req, res) => {

    Doctor.getDoctors((err, result) => {

        if (err) {

            return res.status(500).json({
                message: "Failed to get doctors"
            });

        }

        res.json(result);
    });
};

module.exports = {
    getAllDoctors
};