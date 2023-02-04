const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decode = jwt.verify(token, "kod");
    req.user = decode;
    next();
  } catch {
    res.json({ messages: "Brak dostępu" });
  }
};

module.exports = authenticate;
