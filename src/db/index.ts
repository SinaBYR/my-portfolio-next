import mariadb from 'mariadb';
import pg from 'pg';

// export const db = Object.freeze({
//   pool: mariadb.createPool({
//     host: process.env.DB_HOST,
//     port: +process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_DATABASE
//   })
// });

export const db = new pg.Pool({
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});