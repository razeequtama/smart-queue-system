const express = require("express");

const router = express.Router();

const verifyToken =
    require("../middlewares/authMiddleware");

const checkRole =
    require("../middlewares/roleMiddleware");

const {
    createAppointment,
    getMyQueues,
    getAllQueues,
    updateQueueStatus,
    deleteQueue
} = require("../controllers/queueController");

router.post(
    "/",
    verifyToken,
    checkRole("patient"),
    createAppointment
);

router.get(
    "/my",
    verifyToken,
    checkRole("patient"),
    getMyQueues
);

router.get(
    "/",
    verifyToken,
    checkRole("admin"),
    getAllQueues
);

router.put(
    "/:id",
    verifyToken,
    checkRole("admin"),
    updateQueueStatus
);

router.delete(
    "/:id",
    verifyToken,
    checkRole("admin"),
    deleteQueue
);

module.exports = router;