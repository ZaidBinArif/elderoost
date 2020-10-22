const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define(
  'user',
  {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    is_admin: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    reset_password_token: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true
    }
  },
  { underscored: true }
);

User.sync({ force: true });

module.exports = User;
