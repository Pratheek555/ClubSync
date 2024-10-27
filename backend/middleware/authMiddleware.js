// const jwt = require('jsonwebtoken');

// module.exports = function (req, res, next) {
//     const token = req.header('x-auth-token');
//     if (!token) {
//         return res.status(401).json({ msg: 'No token, authorization denied' });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded.userId;
//         next();
//     } catch (err) {
//         res.status(401).json({ msg: 'Token is not valid' });
//     }
// };

module.exports = function (req, res, next) {
    // Bypass authentication for testing purposes
    req.user = "671bfd4b1154536824b33937"; // Assign a test user ID or any default value
    next();
};

