// Middleware to verify JWT token in request headers
export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    // Verify the token using the "secret" key
    jwt.verify(token, "secret", (err) => {
      if (err) return res.sendStatus(403); // Token verification failed
      next(); // Proceed to the next middleware or route
    });
  } else {
    res.sendStatus(401); // Token not provided
  }
};
