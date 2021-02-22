const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("pensioners", "root", "введи свой пароль", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;
