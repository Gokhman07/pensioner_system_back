const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Risk_insurances = sequelize.define("risk_insurances", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_pensioner: {
    type: DataTypes.INTEGER,
  },
  manufacture_name: {
    type: DataTypes.STRING,
  },
  pos_type: {
    type: DataTypes.STRING,
  },
  collective_name: {
    type: DataTypes.STRING,
  },
  cash_opening_date: {
    type: DataTypes.DATE,
  },
  period_report: {
    type: DataTypes.INTEGER,
  },
  last_upadete_of_this_screen: {
    type: DataTypes.STRING,
  },

  total_annual_premium: {
    type: DataTypes.INTEGER,
  },
  insuarunce_amount: {
    type: DataTypes.INTEGER,
  }, 
 
  insurance_agency_handles: {
    type: DataTypes.STRING,
  },
  agent_name: {
    type: DataTypes.STRING,
  },
  agent_telephone: {
    type: DataTypes.STRING,
  },
  agent_mail: {
    type: DataTypes.INTEGER,
  },
  remarks: {
    type: DataTypes.INTEGER,
  }
});

module.exports = Risk_insurances;
