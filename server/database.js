import { Sequelize } from "sequelize";
import { alumniModel } from "./models/alumni.js";

export const connection = async () => {
  const sequelize = new Sequelize("Alumnia", "postgres", "Prathi@psql", {
    host: "localhost",
    dialect: "postgres",
  });

  let Alumni=null;

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    Alumni = alumniModel(sequelize);
    await sequelize.sync();
    console.log("Table created successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "postgres",
});
