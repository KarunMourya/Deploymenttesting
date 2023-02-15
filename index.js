import express from 'express';
import routes from './routes/routes.js';
import passport from 'passport';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json());
app.use('/', routes);
app.use(passport.initialize())
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
