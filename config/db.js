const Sequelize = require('sequelize');


var database = `postgres://root:1@localhost:5432/emberspin_development`;
var sequelize = {};

if (process.env.NODE_ENV === 'production') {
  database = `${process.env.DATABASE_URL}`;
}

sequelize = new Sequelize(`${database}`);

module.exports = sequelize;
