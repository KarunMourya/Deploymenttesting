import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.USER_NAME, process.env.USER_PASSWORD, {
  host: "localhost",
  dialect: "postgres",
});

const dataBaseConnection = async (sequelize) => {
  try {
    await sequelize.authenticate()
    console.log("Connection has been established successfully.");
    await sequelize.sync({force:false});
    console.log("Database is synced");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
};

dataBaseConnection(sequelize);

export default sequelize;
