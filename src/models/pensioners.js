const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Pensioners = sequelize.define("pensioners", {
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
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  passport_number: {
    type: DataTypes.STRING,
  },
  marital_id: {
    type: DataTypes.INTEGER,
  },
  id_empl_status: {
    type: DataTypes.INTEGER,
  },

  occupation: {
    type: DataTypes.STRING,
  },
  belong_comp: {
    type: DataTypes.INTEGER,
  }, 
 
  company: {
    type: DataTypes.STRING,
  },
  birth_date: {
    type: DataTypes.STRING,
  },
  card_number: {
    type: DataTypes.STRING,
  },
  group_id: {
    type: DataTypes.INTEGER,
  },
  couple_id: {
    type: DataTypes.INTEGER,
  }
});

module.exports = Pensioners;
