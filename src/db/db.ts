import mariadb from 'mariadb';

export const db = Object.freeze({
  pool: mariadb.createPool({
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
  })
});