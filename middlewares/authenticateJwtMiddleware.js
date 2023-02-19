import passport from "../lib/passport.js";

const authenticateMiddleware = async (request, response, next) => {
  try {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      return response.send({ message: "token is not found" });
    }
    const [type, token] = authHeader.split(" ");
    if (type !== "Bearer") {
      return response.send({ message: "Corrupt Header" });
    }
    await passport.authenticate(
      "jwt",
      { session: false, failWithError: true },
      function (error, user, info) {
        if (error) {
          return response.send({ message: info });
        }
        if (!user) {
          return response.send({ message: info });
        }
        request.user = user;
        next();
      }
    )(request, response, next);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default authenticateMiddleware;
