// const mysql = require("mysql2");
import mysql from "mysql2";

const pool = mysql.createPool({
  connectionLimit: 4,
  host: "127.0.0.1",
  port: "3306",
  user: "lachlanholland",
  password: "black2gold",
  socket: "/tmp/mysql.sock",
  database: "brisbanegateway",
});

pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log("Database connected succesfully");
  connection.release();
});

module.exports = pool;
