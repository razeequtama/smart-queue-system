const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User =
    require("../models/userModel");

const register = async (
    req,
    res
) => {

    const {
        name,
        email,
        phone_number,
        password,
        role
    } = req.body;

    if (
        !name ||
        !email ||
        !phone_number ||
        !password ||
        !role
    ) {

        return res.status(400).json({
            message:
                "All fields required"
        });

    }

    if (
        role !== "admin" &&
        role !== "patient"
    ) {

        return res.status(400).json({
            message: "Invalid role"
        });

    }

    User.findUserByEmail(
        email,
        async (err, result) => {

            if (result.length > 0) {

                return res.status(400).json({
                    message:
                        "Email already exists"
                });

            }

            const hashedPassword =
                await bcrypt.hash(
                    password,
                    10
                );

            User.createUser(
                [
                    name,
                    email,
                    phone_number,
                    hashedPassword,
                    role
                ],

                (err) => {

                    if (err) {

                        return res.status(500).json({
                            message:
                                "Register failed"
                        });

                    }

                    res.json({
                        message:
                            "Register success"
                    });
                }
            );
        }
    );
};

const login = (
    req,
    res
) => {

    const {
        email,
        password
    } = req.body;

    User.findUserByEmail(
        email,
        async (err, result) => {

            if (
                result.length === 0
            ) {

                return res.status(400).json({
                    message:
                        "User not found"
                });

            }

            const user = result[0];

            const isMatch =
                await bcrypt.compare(
                    password,
                    user.password
                );

            if (!isMatch) {

                return res.status(400).json({
                    message:
                        "Wrong password"
                });

            }

            const token = jwt.sign(
                {
                    id: user.id,
                    role: user.role
                },

                process.env.JWT_SECRET,

                {
                    expiresIn: "1d"
                }
            );

            res.json({
                token,
                role: user.role,
                name: user.name
            });
        }
    );
};

module.exports = {
    register,
    login
};