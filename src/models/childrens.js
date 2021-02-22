const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Childrens = sequelize.define("childrens", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },

  lastname: {
    type: DataTypes.STRING,
  },
  
  father_id: {
    type: DataTypes.INTEGER,
  },
  
  mother_id: {
    type: DataTypes.INTEGER,
  },
  
  
 
});

module.exports = Childrens;
