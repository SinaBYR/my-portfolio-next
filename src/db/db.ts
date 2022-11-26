import mariadb from 'mariadb';

export const db = Object.freeze({
  pool: mariadb.createPool({
    host: 'localhost',
    port: 3306,
    user: 'sina',
    password: 'Sina13801111',
    database: 'my_portfolio'
  })
});