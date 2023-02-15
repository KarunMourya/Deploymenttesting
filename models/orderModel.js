import {  DataTypes} from "sequelize" ;
import sequelize from "../database/dbConnection.js";

const Order = sequelize.define('Order', {
  products: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},{
  underscored : true,
});

export default Order;
