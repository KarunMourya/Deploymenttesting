import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../database/dbConnection.js";
import Order from "./orderModel.js";

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    education: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    underscored: true,
    hooks: {
      beforeBulkDestroy: () => {
        console.log("Orders going to be destroyed");
      },
      afterBulkDestroy: () => {
        console.log("Orders has been destroyed");
      },
    },
  }
);

User.hasMany(Order, {
  foreignKey: "userId",
  onDelete: "cascade",
  hooks: true,
});
Order.belongsTo(User, {
  foreignKey: "userId",
});

export default User;
