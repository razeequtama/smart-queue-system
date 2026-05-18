const db = require("../config/db");

const Queue = require("../models/queueModel");

const createAppointment = (req, res) => {

    const {
        doctor_id,
        appointment_date,
        appointment_time
    } = req.body;

    if (
        !doctor_id ||
        !appointment_date ||
        !appointment_time
    ) {

        return res.status(400).json({
            message: "All fields required"
        });

    }

    Queue.createQueue(
        [
            req.user.id,
            doctor_id,
            appointment_date,
            appointment_time
        ],
        (err) => {

            if (err) {

                return res.status(500).json({
                    message: "Failed to create appointment"
                });

            }

            res.json({
                message: "Appointment created"
            });
        }
    );
};

const getMyQueues = (req, res) => {

    Queue.getUserQueues(
        req.user.id,
        (err, result) => {

            if (err) {

                return res.status(500).json({
                    message: "Failed"
                });

            }

            res.json(result);
        }
    );
};

const getAllQueues = (req, res) => {

    Queue.getAllQueues((err, result) => {

        if (err) {

            return res.status(500).json({
                message: "Failed"
            });

        }

        res.json(result);
    });
};

const updateQueueStatus = (req, res) => {

    const { status } = req.body;

    const sql = `
        UPDATE queues
        SET status = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [status, req.params.id],
        (err) => {

            if (err) {

                return res.status(500).json({
                    message: "Update failed"
                });

            }

            res.json({
                message: "Status updated"
            });
        }
    );
};

const deleteQueue = (req, res) => {

    const sql = `
        DELETE FROM queues
        WHERE id = ?
    `;

    db.query(
        sql,
        [req.params.id],
        (err) => {

            if (err) {

                return res.status(500).json({
                    message: "Delete failed"
                });

            }

            res.json({
                message: "Queue deleted"
            });
        }
    );
};

module.exports = {
    createAppointment,
    getMyQueues,
    getAllQueues,
    updateQueueStatus,
    deleteQueue
};