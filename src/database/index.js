const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("pensioners", "root", "printer10", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;
