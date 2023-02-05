const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.cookie.split(";")[0].slice(12);
    const decode = jwt.verify(token, "kod");
    req.user = decode;
    next();
  } catch {
    res.status(401).json({ messages: "Brak dostępu" });
  }
};

module.exports = authenticate;
