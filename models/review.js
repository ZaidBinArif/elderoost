const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Residence = require('../models/residence');

const Review = sequelize.define(
  'review',
  {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    author: {
      type: Sequelize.STRING
    },
    rating_value: {
      type: Sequelize.DECIMAL,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: `pending`
    },
    author_email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    notify: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    accepted_terms: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
  {
    underscored: true
  }
);

Review.sync({ force: true });
// Review.belongsTo(Residence);

module.exports = Review;
