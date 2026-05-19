const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) {
        return res.send("token missing");
    }

    try {

        jwt.verify(token, "secretkey");

        next();

    } catch (err) {

        res.send("invalid token");
    }

}

module.exports = verifyToken;