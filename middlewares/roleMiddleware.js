const checkRole = (role) => {

    return (req, res, next) => {

        const userRole = String(req.user.role || "").trim().toLowerCase();
        const requiredRole = String(role || "").trim().toLowerCase();

        if (userRole !== requiredRole) {

            return res.status(403).json({
                message: "Forbidden access"
            });

        }

        next();
    };
};

module.exports = checkRole;