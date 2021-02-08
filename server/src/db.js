const pg = require("pg");

const pool = new pg.Pool({
  user: "postgres",
  password: "postgres",
  database: "challenge",
});

exports.query = (...args) => pool.query(...args);

exports.close = () => pool.end();
