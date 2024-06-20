// database.js
const { Sequelize } = require("sequelize");

// Initialize Sequelize with your PostgreSQL connection string
const sequelize = new Sequelize(
  "postgres://postgres:Pra@example.com:5432/Alumnia",
  {
    dialect: "postgres",
    protocol: "postgres",
    logging: false, // disable logging; default: console.log
    // dialectOptions: {
    //   ssl: true, // uncomment this if you need SSL
    // }
  }
);

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
