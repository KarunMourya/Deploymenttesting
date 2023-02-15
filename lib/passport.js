import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import User from "../models/userModel.js";
import dotenv from "dotenv";
dotenv.config();

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY,
};

passport.use(
  new Strategy(opts, async function (payload, done) {
    try {
      const user = await User.findOne({
        where: {
          email: payload.email,
        },
      });

      if (!user) {
        return done(null, false, { message: "Unauthorized user" });
      }
      if (payload.exp <= Date.now() / 1000) {
        return done(error, false, { message: "Token has expired" });
      }
      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  })
);

export default passport;
